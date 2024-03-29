import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";

export default function TestimonialPage() {
  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="w-full pl-[29px] mx-auto md:p-5 sm:pl-5 max-w-[1469px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch h-[825px] md:h-auto relative">
              <Img src="images/img_rectangle_29_6.png" alt="image" className="h-[825px] w-full object-cover" />
              <div className="flex flex-col items-start w-full h-max gap-4 left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-black-900_af absolute">
                <Img src="images/img_television.svg" alt="image_one" className="h-[12px] ml-[61px] md:ml-0" />
                <div className="h-[730px] w-[98%] md:h-auto mb-[29px] ml-7 md:ml-0 relative">
                  <div className="flex flex-col items-center w-[63%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                      Life-Changing Testimonials
                    </Text>
                    <Text
                      size="12xl"
                      as="p"
                      className="mt-[7px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                    >
                      Hear What Our Clients Have to Say
                    </Text>
                    <Text as="p" className="w-[48%] md:w-full mt-[17px] !text-white-A700_b2 text-center leading-[35px]">
                      Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                    </Text>
                  </div>
                  <Img src="images/img_svg.svg" alt="svg_one" className="h-[20px] w-[20px] mt-11 mr-11 md:mr-0" />
                  <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-11 m-auto md:p-5 border-white-A700_3d border border-solid absolute rounded-[23px]">
                    <div className="flex justify-center w-[33%] md:w-full mb-[619px]">
                      <div className="flex justify-between w-full gap-5">
                        <a href="COMPANY" target="_blank" rel="noreferrer" className="self-end">
                          <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                            COMPANY
                          </Text>
                        </a>
                        <div className="flex self-end items-start gap-[7px]">
                          <a href="SERVICES" target="_blank" rel="noreferrer">
                            <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                              SERVICES
                            </Text>
                          </a>
                          <Img src="images/img_plus.svg" alt="plus_one" className="h-[11px] w-[11px] mt-0.5" />
                        </div>
                        <div className="flex self-end items-start gap-[7px]">
                          <a href="media" target="_blank" rel="noreferrer">
                            <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                              media
                            </Text>
                          </a>
                          <Img src="images/img_plus.svg" alt="plus_three" className="h-[11px] w-[11px] mt-0.5" />
                        </div>
                        <a href="connect" target="_blank" rel="noreferrer" className="self-end">
                          <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                            connect
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex self-stretch justify-between mt-[30px] pr-3.5 gap-5">
              <Img
                src="images/img_leaf_2_png_103x151.png"
                alt="leaf2png_one"
                className="self-start w-[11%] object-cover"
              />
              <Img src="images/img_leaf_2_png_103x151.png" alt="leaf2png_three" className="w-[11%] object-cover" />
            </div>
            <div className="h-[100px] w-[100px] mt-[31px] bg-blue_gray-100 rounded-[50px]" />
            <Text size="3xl" as="p" className="self-start mt-[39px] !text-gray-800_01">
              Mr. Praveen KVD
            </Text>
            <div className="flex flex-col w-[61%] md:w-full mt-[17px] gap-[19px]">
              <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                <>
                  My Wife Mrs Gayatri from MVP colony Visakhapatnam, met Dr Deepthi
                  <br />
                  madam for Nutrition advice. Before meeting Dr Deepthi She had tried several
                  <br />
                  unscientific methods to reduce weight, which resulted in short lasting
                  <br />
                  outcomes with extreme fatigue.
                </>
              </Text>
              <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                <>
                  After our first visit we have realised that we are in Good hands. She has advised an Evidence based
                  diet plan, not only that but helped us in following an individualized diet plan. My wife has lost 7
                  kgs in three month’s time, now with more health and happiness. I advise everyone to consult Dr
                  Deepthi, Senior Consultant Nutritionist at Starlite for any kind
                  <br />
                  of Diet advice.
                </>
              </Text>
            </div>
            <footer className="self-stretch mt-[140px]">
              <div>
                <div className="h-[555px] md:h-auto relative">
                  <Img
                    src="images/img_rectangle_22058_5.png"
                    alt="image_two"
                    className="h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img src="images/img_image_9.png" alt="imagenine_one" className="h-[555px] w-full object-cover" />
                  <div className="flex md:flex-col justify-between items-center w-[79%] h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute md:relative">
                    <div className="flex flex-col items-start w-[21%] md:w-full gap-5">
                      <Heading as="h3">Address</Heading>
                      <div className="flex flex-col self-stretch gap-[41px]">
                        <div className="flex flex-col gap-[7px]">
                          <Text size="2xl" as="p" className="!font-lato">
                            Hyderabad ( Headquarters)
                          </Text>
                          <Text as="p" className="!font-lato leading-[27px]">
                            #201, Sri Parvata,Plot 1285A, Rd 1 & 64,Jubilee Hills, Hyderabad 500033.
                          </Text>
                        </div>
                        <div className="flex flex-col items-start gap-1.5">
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
                            <a href="#">
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
                            <a href="#">
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
          </div>
        </div>
      </div>
    </>
  );
}
