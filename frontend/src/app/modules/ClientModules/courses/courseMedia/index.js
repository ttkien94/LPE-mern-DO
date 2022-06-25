import React from "react";
import LPEBanner from "app/components/banner";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";

function CourseMedia() {
  useSiteTitle("media_course");

  return (
    <div>
      <LPEBanner
        bannerImg="https://www.pim.com.pk/wp-content/uploads/2021/06/Learning-and-development-manager.png"
        headText="Khóa học Media"
        subText="Đang được phát triển."
      />
    </div>
  );
}

export default CourseMedia;
