import React from "react";
import SiteDescription from "../SiteDescription/SiteDescription";
import "./banner.css"

function Banner() {

  return (
    // eslint-disable-next-line
    <div className="flex container max-w-3xl object-none object-right-bottom md:object-top p-3">
        <SiteDescription />
    </div>
  );
}

export default Banner;
