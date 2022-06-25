import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { appAction } from "core/redux/actions/appAction";

import Header from "./layout/header";
import Footer from "./layout/footer";
import LPELoading from "app/components/loading";

import { KEY_TOKEN } from "app/const/App";
import CallIcon from "assets/images/icon-call-nh.png";

export const HomeTemplate = ({ Component, ...restProps }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);

  // FETCH_API_USER
  useEffect(() => {
    if (Boolean(localStorage.getItem(KEY_TOKEN))) {
      dispatch(appAction());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            {loading ? <LPELoading /> : <Component {...propsRoute} />}
            <Footer />

            <div className="hotline-phone-ring-wrap">
              <div className="hotline-phone-ring">
                <div className="hotline-phone-ring-circle"></div>
                <div className="hotline-phone-ring-circle-fill"></div>
                <div className="hotline-phone-ring-img-circle">
                  <a href="tel:1900636034" className="pps-btn-img">
                    <img src={CallIcon} alt={CallIcon} width="50" />
                  </a>
                </div>
              </div>
              <div className="hotline-bar">
                <a href="tel:1900636034">
                  <span className="text-hotline">1900.636.034</span>
                </a>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
