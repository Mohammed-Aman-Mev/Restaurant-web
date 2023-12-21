import React from "react";
import {
  BannerSection,
  Contactus,
  Fresh,
  MealsSection,
  NewsandEvents,
  StorySection,
  Testimonial,
} from "../components";

const Landing = () => {
  return (
    <div>
      <BannerSection />
      <StorySection />
      <Fresh />
      <MealsSection />
      <Testimonial />
      <NewsandEvents />
      <Contactus />
    </div>
  );
};

export default Landing;
