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
    <>
      <BannerSection />
      <StorySection />
      <Fresh />
      <MealsSection />
      <Testimonial />
      <NewsandEvents />
      <Contactus />
    </>
  );
};

export default Landing;
