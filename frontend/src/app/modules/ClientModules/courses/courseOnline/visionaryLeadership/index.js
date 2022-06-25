import React, { useEffect } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import Carousel from "./Carousel";
import ProblemBusiness from "./ProblemBusiness";
import Story from "./Story";
import JourneyCourse from "./JourneyCourse";
import SkillOfCourse from "./SkillOfCourse";
import Pricing from "./Pricing";
import AboutMrVas from "./AboutMrVas";
// import FormRegister from "./FormRegister";
import BenefitAfterCourse from "./BenefitAfterCourse";
import Testimonior from "./Testimonior";

import "./styles/styles.scss";

function VisionaryLeadership() {
  useSiteTitle("vl");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="visionaryLeadership">
      <Carousel />
      <ProblemBusiness />
      <Story />
      <JourneyCourse />

      <div className="container py-5">
        <div className="wrapper-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/5tIZsrqFCAk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <SkillOfCourse />
      <AboutMrVas />
      <Pricing />
      <BenefitAfterCourse />
      <Testimonior />

      {/* <div className="bg-dangKy">
        <div className="container-fluid" id="dangKy">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <h1 className="text-center heading-title wow fadeInUp">
                Nhận Tư Vấn Về Khóa Học
              </h1>

              <div className="row">
                <div className="col-12 wrapper-form wow zoomInLeft">
                  <FormRegister />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default VisionaryLeadership;
