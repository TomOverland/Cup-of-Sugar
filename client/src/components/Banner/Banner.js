import React from "react";
import SiteDescription from "../SiteDescription/SiteDescription";



function Banner() {
    return (
        // eslint-disable-next-line
        <div class="flex-row-reverse container mx-auto max-w-3xl object-none object-right-bottom md:object-top"><img className="w-full bg-right" src="https://media-public.canva.com/q-l3g/MADyQ2q-l3g/1/s3.jpg"></img>
            <div class="absolute top-20 left-10">
                <SiteDescription />

            </div>
        </div>
    )
};
  
  export default Banner;
 
