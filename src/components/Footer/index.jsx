import React from "react";
import { Text, Heading, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="w-full">
        <div className="h-[555px] relative">
          <div className="h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-600 absolute" />
          <Img
            src="images/img_image_9_555x1440.png"
            alt="imagenine_one"
            className="h-[555px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex md:flex-col justify-between items-center w-full h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto md:p-5 absolute max-w-[1136px] md:relative">
            <div className="flex flex-col items-start w-[21%] md:w-full">
              <Heading as="h3">Address</Heading>
              <div className="flex flex-col self-stretch mt-5 gap-[7px]">
                <Text size="2xl" as="p" className="!font-lato">
                  Hyderabad ( Headquarters)
                </Text>
                <Text as="p" className="!font-lato leading-[27px]">
                  #201, Sri Parvata,Plot 1285A, Rd 1 & 64,Jubilee Hills, Hyderabad 500033.
                </Text>
              </div>
              <div className="flex flex-col self-stretch items-start mt-[41px] gap-1.5">
                <Text size="2xl" as="p" className="!font-lato">
                  Visakhapatnam Center{" "}
                </Text>
                <Text as="p" className="!font-lato leading-[27px]">
                  <>
                    #110, 1st Floor,
                    <br />
                    Dutt Island, Siripuram.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <Heading as="h3">Contact Details</Heading>
              <Text size="2xl" as="p" className="mt-5 !font-lato">
                Hyderabad ( Headquarters)
              </Text>
              <a href="#" className="mt-[11px]">
                <Text as="p" className="!font-lato">
                  +91 8500082020
                </Text>
              </a>
              <a href="#" className="self-center mt-[7px]">
                <Text as="p" className="!font-lato">
                  <span className="text-white-A700_01">&nbsp;</span>
                  <span className="text-white-A700_01">welcome@starlitenutrition.com</span>
                </Text>
              </a>
              <Text size="2xl" as="p" className="mt-[70px] !font-lato">
                Visakhapatnam Center
              </Text>
              <a href="#" className="mt-2.5">
                <Text as="p" className="!font-lato">
                  +91 8500092020
                </Text>
              </a>
            </div>
            <div className="flex flex-col self-start items-start mt-5 gap-4">
              <Heading as="h3">Quick Links</Heading>
              <div className="flex flex-col self-center">
                <ul className="flex flex-col self-start items-start gap-[9px]">
                  <li>
                    <a href="Home" target="_blank" rel="noreferrer">
                      <Text size="2xl" as="p" className="!font-lato !font-normal">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text size="2xl" as="p" className="!font-lato !font-normal">
                        About Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Services" target="_blank" rel="noreferrer">
                      <Text size="2xl" as="p" className="!font-lato !font-normal">
                        Services
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
