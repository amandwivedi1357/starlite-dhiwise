import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";

export default function MediapagePage() {
  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="w-full pl-0 mx-auto md:p-5 sm:pl-5 max-w-[auto]">
          <div>
            <div className="flex flex-col items-center">
              <div className="self-stretch h-[825px] md:h-auto relative">
                <Img src="images/img_rectangle_29_825x1440.png" alt="image" className="h-[825px] w-full object-cover" />
                <div className="h-[825px] w-full left-0 bottom-0 right-0 top-0 p-0 m-auto sm:p-5 bg-black-900_af absolute">
                  <div className="flex flex-col items-center w-[59%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                      Explore Our Wellness World
                    </Text>
                    <Text
                      size="12xl"
                      as="p"
                      className="mt-[7px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                    >
                      Media Insights, Stories, & Updates
                    </Text>
                    <Text as="p" className="w-[51%] md:w-full mt-[17px] !text-white-A700_b2 text-center leading-[35px]">
                      Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start w-[98%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="images/img_television.svg"
                      alt="image_one"
                      className="h-[21px] ml-[33px] md:ml-0 hidden"
                    />
                    <div className="flex self-stretch justify-end mt-[-5px] p-[33px] sm:p-5 relative border-white-A700_3d border border-solid rounded-[23px]">
                      <div className="flex justify-end w-[63%] md:w-full mb-20 mr-[106px] md:mr-0">
                        <div className="flex flex-col w-full gap-[532px] md:gap-[399px] sm:gap-[266px]">
                          <div className="flex sm:flex-col justify-between items-center gap-5">
                            <div className="flex justify-between w-[56%] sm:w-full gap-5">
                              <a href="COMPANY" target="_blank" rel="noreferrer">
                                <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                                  COMPANY
                                </Text>
                              </a>
                              <div className="flex items-start gap-[7px]">
                                <a href="SERVICES" target="_blank" rel="noreferrer">
                                  <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                                    SERVICES
                                  </Text>
                                </a>
                                <Img src="images/img_plus.svg" alt="plus_one" className="h-[11px] w-[11px] mt-0.5" />
                              </div>
                              <div className="flex items-start gap-[7px]">
                                <a href="media" target="_blank" rel="noreferrer">
                                  <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                                    media
                                  </Text>
                                </a>
                                <Img src="images/img_plus.svg" alt="plus_three" className="h-[11px] w-[11px] mt-0.5" />
                              </div>
                              <a href="connect" target="_blank" rel="noreferrer">
                                <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                                  connect
                                </Text>
                              </a>
                            </div>
                            <Button
                              size="md"
                              shape="round"
                              className="sm:px-5 tracking-[1.60px] capitalize font-medium min-w-[152px]"
                            >
                              Contact Us
                            </Button>
                          </div>
                          <Img
                            src="images/img_group_50719.svg"
                            alt="image_two"
                            className="h-[5px] ml-[190px] md:ml-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_svg.svg"
                    alt="svg_one"
                    className="h-[20px] w-[20px] right-[7%] top-[11%] m-auto absolute"
                  />
                </div>
              </div>
              <div className="self-stretch h-[758px] mt-6 relative">
                <div className="h-[669px] w-full md:h-auto pl-[29px] top-[0.00px] right-0 left-0 m-auto sm:pl-5 absolute">
                  <div className="flex md:flex-col justify-center items-start w-full">
                    <Img
                      src="images/img_leaf_2_png_103x151.png"
                      alt="leaf2png_one"
                      className="w-[10%] md:w-full mt-1.5 ml-[-38px] z-[1] object-cover"
                    />
                    <Img
                      src="images/img_image_7.png"
                      alt="imageseven_one"
                      className="h-[669px] w-full ml-[-122px] md:ml-0 relative object-cover"
                    />
                  </div>
                  <div className="flex md:flex-col justify-between items-start w-[69%] right-[14.50px] top-[11.00px] gap-5 m-auto absolute md:relative">
                    <div className="flex flex-col items-center w-[57%] md:w-full mt-[73px] gap-[29px]">
                      <div className="self-stretch h-[126px] md:h-auto relative">
                        <Text
                          size="10xl"
                          as="p"
                          className="!text-gray-800_01 !font-cormorant text-center leading-[63px]"
                        >
                          Inspiring Events and Transformative Gatherings
                        </Text>
                        <Img
                          src="images/img_group_50719.svg"
                          alt="image_three"
                          className="h-[5px] bottom-[28%] right-0 left-0 m-auto absolute"
                        />
                      </div>
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                        EVENTS
                      </Text>
                    </div>
                    <Img
                      src="images/img_leaf_2_png_103x151.png"
                      alt="leaf2png_three"
                      className="w-[15%] md:w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col justify-between items-center w-[86%] pr-[55px] bottom-[0.00px] right-0 left-0 gap-5 m-auto md:pr-5 border-blue_gray-100_e0 border border-solid bg-white-A700_01 absolute rounded-[10px] md:relative">
                  <div className="flex justify-center w-[61%] md:w-full">
                    <div className="h-[409px] w-full md:h-auto relative">
                      <Img
                        src="images/img_rectangle_26_409x720.png"
                        alt="image_four"
                        className="h-[409px] w-full rounded-bl-[10px] rounded-tl-[10px] object-cover"
                      />
                      <Img
                        src="images/img_group_50854.svg"
                        alt="image_five"
                        className="h-[5px] bottom-[34%] right-[11%] m-auto absolute"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-[35%] md:w-full gap-[18px]">
                    <div className="flex self-start">
                      <Text size="7xl" as="p" className="mt-2 !text-gray-800_01 !font-cormorant">
                        Women&#39;s day celebration
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                      This Women&#39;s Day, celebrate with homemade recipes and meaningful conversations about
                      women&#39;s wellness.
                    </Text>
                    <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                      Let&#39;s prioritise self-care, mental health, and overall well-being as we honour and empower the
                      incredible women in our lives.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-[87%] md:w-full mt-[211px] pb-[7px] px-[7px]">
                <div className="flex flex-col items-center w-[51%] md:w-full gap-[29px]">
                  <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center leading-[63px]">
                    Explore Our Publications and Resources
                  </Text>
                  <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                    PRINT MEDIA
                  </Text>
                </div>
              </div>
              <div className="flex justify-end w-[86%] md:w-full mt-[77px] border-blue_gray-100_e0 border border-solid bg-white-A700_01 rounded-[10px]">
                <div className="flex md:flex-col justify-end items-center w-[95%] md:w-full gap-[45px] md:p-5">
                  <div className="flex flex-col w-[36%] md:w-full gap-5">
                    <div>
                      <div>
                        <Text size="7xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[47px]">
                          Nutrition lessons for little ones- Times of India
                        </Text>
                      </div>
                    </div>
                    <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                      Teach children what nutritious food can do for them, they can cook it and whats cool about being
                      healthier.
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_26_5.png"
                    alt="image_six"
                    className="w-[64%] md:w-full rounded-tr-[10px] rounded-br-[10px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="h-[464px] md:h-auto mt-[222px] pl-5 relative">
              <div className="flex md:flex-col justify-center items-start w-full">
                <Img
                  src="images/img_leaf_2_png_103x151.png"
                  alt="leaf2png_five"
                  className="w-[10%] md:w-full mt-[22px] ml-[-32px] z-[1] object-cover"
                />
                <div className="md:self-stretch h-[464px] ml-[-171px] md:ml-0 relative bg-red-50 flex-1" />
              </div>
              <div className="flex flex-col w-[72%] gap-[72px] right-[0.00px] top-[27.00px] m-auto md:gap-[54px] sm:gap-9 absolute">
                <div className="flex md:flex-col justify-between items-start gap-5">
                  <div className="flex flex-col items-center w-[61%] md:w-full mt-14 gap-[29px]">
                    <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center leading-[63px]">
                      Connect with Wellness: Join Our Social Community
                    </Text>
                    <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                      SOCIAL MEDIA
                    </Text>
                  </div>
                  <Img
                    src="images/img_leaf_2_png_103x151.png"
                    alt="leaf2png_seven"
                    className="w-[15%] md:w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center w-[27%] md:w-full ml-[204px] gap-5 md:ml-0">
                  <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[51px] w-[51px]" />
                  <Img src="images/img_instagram.png" alt="instagram_one" className="w-[44px] object-cover" />
                  <Button size="sm" shape="square" className="w-[44px]">
                    <Img src="images/img_link_white_a700_01.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <footer className="mt-[17px]">
              <div>
                <div className="h-[555px] md:h-auto relative">
                  <Img
                    src="images/img_rectangle_22058_558x1439.png"
                    alt="image_seven"
                    className="h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img src="images/img_image_9.png" alt="imagenine_one" className="h-[555px] w-full object-cover" />
                  <div className="flex justify-center w-[79%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex md:flex-col justify-between items-center w-full gap-5">
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
                      <div className="flex flex-col self-start items-start mt-5">
                        <Heading as="h3">Quick Links</Heading>
                        <div className="flex flex-col self-center mt-4">
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
                        <div className="flex mt-[30px] gap-[11px]">
                          <Img src="images/img_facebook.svg" alt="facebook_three" className="h-[24px] w-[24px]" />
                          <Img src="images/img_instagram.png" alt="instagram_three" className="w-[24px] object-cover" />
                          <Img src="images/img_link.svg" alt="link_three" className="h-[24px] w-[24px]" />
                        </div>
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
