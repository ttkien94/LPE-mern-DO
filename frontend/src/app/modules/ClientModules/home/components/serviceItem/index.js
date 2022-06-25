import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function ServiceItem({ service }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="service-item">
        <div className="cat-icon">{service.cat_icon}</div>

        <div className="service-item-caption">
          <h2>{service.title}</h2>

          <p className="mb-0">{service.description}</p>

          {!service.description && <Link to={service.link}>Đi tới</Link>}
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
