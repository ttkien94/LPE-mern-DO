import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

// i18n translate language
import { I18nextProvider } from "react-i18next";
import i18n from "assets/i18n";

// Showing toast when app have status
import { ToastContainer } from "react-toastify";

// Styling
import "react-toastify/dist/ReactToastify.css";
import "assets/fonts/fontawsome.min.css";
import "assets/styles/common.scss";
import "react-loading-skeleton/dist/skeleton.css";

// Store of Redux
import store from "core/redux/store/configStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {/* Content website */}
        <App />

        {/* Toast */}
        <ToastContainer />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
