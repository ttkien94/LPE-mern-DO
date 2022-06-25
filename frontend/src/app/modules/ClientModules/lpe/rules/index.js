import useSiteTitle from "core/hooks/useSiteTitle";
import { useTranslation } from "react-i18next";

import LPEBanner from "app/components/banner";
import banner from "assets/images/source/banner/noi-quy-quy-dinh.jpg";

import "./styles/styles.scss";

function Rules() {
  useSiteTitle("rules");
  const { t } = useTranslation("common");

  const rulesList = [
    {
      name: t("rules"),
      desc: t("rules_desciption"),
      linkPdf:
        "https://drive.google.com/file/d/1Qb2Mbwuv-8R_9lk00BLOkBNj01DNFNOi/view",
    },
    {
      name: t("policy"),
      desc: t("policy_desciption"),
      linkPdf:
        "https://drive.google.com/file/d/1XyQCG9YShj2kTQg9bvNvCtPDsJ15NEBk/view",
    },
    {
      name: t("policy_online"),
      desc: t("policy_online_description"),
      linkPdf:
        "https://drive.google.com/file/d/1BnJoDxlXjLxtKMmf2mHNJREkR-zuIoB0/view",
    },
  ];

  return (
    <>
      {/* Background Title */}
      <LPEBanner
        bannerImg={banner}
        headText="Hãy cùng với chúng tôi tìm hiểu thêm về LPE"
        subText="Nội quy và chính sách để phục vụ khách hàng tốt hơn"
      />

      <div className="container rules-page">
        <h1 className="heading">{t("rule_heading")}</h1>

        <div className="row pb-5">
          {rulesList.map((rule, index) => {
            return (
              <div className="col-12 col-md-4" key={index}>
                <div className="boxRule">
                  <h3>{rule.name}</h3>

                  <p className="text-secondary">{rule.desc}</p>

                  <a href={rule.linkPdf} target="_blank" rel="noreferrer">
                    {t("read_more")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Rules;
