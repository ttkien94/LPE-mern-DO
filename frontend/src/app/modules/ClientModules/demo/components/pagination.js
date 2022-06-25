import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Pagination({ itemPerPage, totalItem, total, onChange, isFiltered }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = Math.ceil(totalItem / itemPerPage);
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {
    isFiltered && setCurrentPage(1);
  }, [isFiltered]);

  React.useEffect(() => {
    getPager(totalItem);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItem, currentPage]);

  const handleChangePage = (e, page) => {
    e && e.preventDefault();

    // trang yêu cầu mà nhỏ hơn 1
    // trang yêu cầu lớn hơn tổng trang
    // trang yêu cầu bằng trang hiện tại
    // Return (Không yêu cầu tải lại)
    if (page < 1 || page > totalPage || page === currentPage) return;

    setCurrentPage(page);
    onChange(page);
    getPager();
  };

  const getPager = () => {
    let startPage, endPage;

    if (totalPage <= 10) {
      startPage = 1;
      endPage = totalPage;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPage) {
        startPage = totalPage - 9;
        endPage = totalPage;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // tạo mảng tối đa 10 số
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    setPages(pages);
  };

  return (
    !!totalItem && (
      <>
        <p className="text-right mb-2">
          có tổng cộng
          <span className="text-primary">{` ${totalItem} `}</span>
          người dùng
        </p>

        <div>
          <ul className="breadcrumb p-0 m-0">
            <li>
              <a href="/" onClick={(e) => handleChangePage(e, currentPage - 1)}>
                <i className="fal fa-angle-left" />
              </a>
            </li>
            {pages?.length ? (
              pages.map((page, index) => (
                <li key={page}>
                  <a
                    href="/"
                    onClick={(e) => handleChangePage(e, page)}
                    className={`${currentPage === page ? "active" : ""}`}
                  >
                    {page}
                  </a>
                </li>
              ))
            ) : (
              <li key={0}>
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  className="active"
                >
                  1
                </a>
              </li>
            )}
            <li>
              <a href="/" onClick={(e) => handleChangePage(e, currentPage + 1)}>
                <i className="fal fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  );
}

Pagination.propTypes = {
  itemPerPage: PropTypes.number,
  totalItem: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  itemPerPage: 1,
  totalItem: 1,
  total: 1,
  onChange: null,
};

export default React.memo(Pagination);
