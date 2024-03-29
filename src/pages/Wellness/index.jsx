import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function WellnessPage() {
  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="w-full pl-[29px] mx-auto md:p-5 sm:pl-5 max-w-[1469px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch h-[828px] md:h-auto relative">
              <Img src="images/img_rectangle_29_5.png" alt="image" className="h-[825px] w-full object-cover" />
              <div className="h-[828px] w-full left-0 bottom-0 right-0 top-0 p-[41px] m-auto md:p-5 bg-black-900_af absolute">
                <div className="flex flex-col items-center w-[67%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                    Healing Haven
                  </Text>
                  <Text
                    size="12xl"
                    as="p"
                    className="mt-[7px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                  >
                    Nurturing Wellness, Restoring Balance
                  </Text>
                  <Text as="p" className="w-[45%] md:w-full mt-[17px] !text-white-A700_b2 text-center leading-[35px]">
                    Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                  </Text>
                </div>
                <div className="flex flex-col items-start w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img src="images/img_television.svg" alt="image_one" className="h-[26px] ml-[33px] md:ml-0" />
                  <div className="flex self-stretch justify-center mt-[-18px] p-11 md:p-5 relative border-white-A700_3d border border-solid rounded-[23px]">
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
                <Img
                  src="images/img_svg.svg"
                  alt="svg_one"
                  className="h-[20px] w-[20px] right-[6%] top-[11%] m-auto absolute"
                />
              </div>
            </div>
            <div className="self-stretch h-[1750px] md:h-auto mt-[27px] relative">
              <div className="w-full">
                <div className="flex flex-col items-end z-[1]">
                  <Img
                    src="images/img_leaf_2_png_103x151.png"
                    alt="leaf2png_one"
                    className="w-[11%] mr-3.5 md:mr-0 z-[1] object-cover"
                  />
                  <div className="self-stretch h-[612px] md:h-auto mt-[-83px] relative">
                    <Img src="images/img_image_7.png" alt="imageseven_one" className="h-[612px] w-full object-cover" />
                    <div className="flex flex-col items-center w-[72%] gap-[27px] top-[10%] right-0 left-0 m-auto absolute">
                      <div className="flex">
                        <div className="flex flex-col items-center gap-[25px]">
                          <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                            Wellness Consultation Programs
                          </Text>
                          <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                            WELLNESS
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch gap-[25px]">
                        <Text size="lg" as="p" className="!text-gray-800_01 text-center leading-[29px]">
                          Wellness encompasses a holistic approach to health, focusing on physical, mental, and
                          emotional well-being. It emphasises proactive steps to maintain and improve overall health,
                          rather than just treating illness. This multidimensional concept includes factors such as
                          nutrition, exercise, stress management, sleep quality, and social connections. Wellness
                          encourages individuals to take charge of their health through lifestyle choices, self-care
                          practices, and preventive measures.{" "}
                        </Text>
                        <Text size="lg" as="p" className="!text-gray-800_01 text-center leading-[29px]">
                          It promotes a balanced and harmonious life, where individuals strive for optimal health and
                          fulfilment in all aspects of their lives. Ultimately, wellness is about living with vitality,
                          purpose, and resilience, cultivating a state of well-being that supports a thriving and
                          fulfilling life.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-[-19px] relative">
                  <div className="flex flex-col self-stretch items-center justify-center gap-[60px] px-14 py-[84px] md:p-5 sm:gap-[30px] bg-red-50_59">
                    <div className="flex justify-center w-[93%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <Img
                          src="images/img_rectangle_22175_2.png"
                          alt="image_two"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[41px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Corporate Wellness Programs
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Our corporate wellness initiatives aim to increase worker productivity and well-being. We go
                            above and beyond traditional services by providing tailored programs such as exercise
                            classes, stress management seminars, health assessments, and lifestyle counselling.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-[93%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <div className="flex flex-col w-[50%] md:w-full gap-3.5">
                          <div className="flex justify-between items-center w-[50%] md:w-full gap-5">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              Wellness Retreats
                            </Text>
                            <Img
                              src="images/img_group_50437_orange_800_21x43.svg"
                              alt="image_three"
                              className="self-end h-[21px]"
                            />
                          </div>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Our retreats offer soothing settings such as Ananda, Shreyas, or Tranquil, along with
                            personalised wellness programs, holistic therapies, and immersive experiences. 
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Our retreats provide the ideal environment to prioritise your general well-being and rebuild
                            your relationship with yourself. Luxurious spa services, serene hikes in the nearby
                            wilderness, and energising yoga and meditation sessions are among the available activities.
                          </Text>
                        </div>
                        <div className="h-[264px] w-[37%] md:w-full md:h-auto mb-[33px] relative">
                          <Img
                            src="images/img_rectangle_22201_2.png"
                            alt="image_four"
                            className="h-[264px] w-full object-cover rounded-[10px]"
                          />
                          <Img
                            src="images/img_globe.svg"
                            alt="globe_one"
                            className="h-[23px] left-[29%] top-[15%] m-auto absolute"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-[93%] md:w-full mb-2.5">
                      <div className="flex md:flex-col justify-between items-center w-full gap-5">
                        <Img
                          src="images/img_rectangle_22202_2.png"
                          alt="image_five"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col self-end items-start w-[56%] md:w-full gap-4">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Lifestyle Membership
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Discover exceptional holistic wellness with our prestigious lifestyle membership program. As
                            a member, you&#39;ll have access to a comprehensive suite of tailored wellness services. 
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Our membership enables you to prioritise your well-being by providing personalised support
                            and discounted offerings, as well as exclusive invitations to events and workshops.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_leaf_2_png_103x147.png"
                    alt="leaf2png_three"
                    className="w-[10%] mt-[-94px] z-[1] relative object-cover"
                  />
                </div>
              </div>
              <Img
                src="images/img_leaf_2_png_77x102.png"
                alt="leaf2png_five"
                className="h-[77px] w-[7%] right-[0.00px] top-[40%] m-auto object-cover absolute"
              />
              <Img
                src="images/img_leaf_2_png_103x151.png"
                alt="leaf2png_seven"
                className="h-[103px] w-[11%] left-[-29.00px] top-[0.00px] m-auto object-cover absolute"
              />
            </div>
            <div className="self-stretch h-[847px] mt-6 relative">
              <div className="flex flex-col items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img
                  src="images/img_rectangle_22205.png"
                  alt="image_six"
                  className="h-[395px] w-full md:h-auto object-cover"
                />
                <div className="flex flex-col items-center justify-center w-[26%] md:w-full mt-[-110px] gap-[15px] px-14 py-[58px] md:p-5 relative bg-white-A700_01 shadow-lg rounded">
                  <Img src="images/img_globe_gray_800_01.svg" alt="globe_three" className="h-[64px] w-[64px] mt-2.5" />
                  <div className="flex flex-col items-center mb-3">
                    <Text size="6xl" as="p" className="self-start !text-gray-800_01 !font-cormorant text-center">
                      Wellness Care Plan
                    </Text>
                    <Text as="p" className="mt-11 !text-gray-800_e5">
                      Health Check up
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Integrated team of Doctors,
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Weekly consultations
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Monitoring & evaluation
                    </Text>
                    <Button
                      size="xl"
                      shape="round"
                      className="self-start mt-[68px] sm:px-5 tracking-[1.68px] uppercase border-orange-800 border border-solid min-w-[189px] !rounded-sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center w-full top-[0.00px] right-0 left-0 m-auto absolute md:relative">
                <div className="md:self-stretch h-[669px] md:w-full md:h-auto flex-1 relative md:flex-none">
                  <Img
                    src="images/img_image_8_669x1439.png"
                    alt="imageeight_one"
                    className="h-[669px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center gap-[11px] top-[12%] right-0 left-0 m-auto absolute">
                    <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                      Wellness Programs
                    </Text>
                    <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                      OUR PROGRAMS
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_leaf_2_png_87x95.png"
                  alt="leaf2png_nine"
                  className="self-end w-[6%] md:w-full mb-[207px] ml-[-95px] md:ml-0 z-[1] relative object-cover"
                />
              </div>
            </div>
            <div className="flex mt-36">
              <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                Other Services
              </Text>
            </div>
            <div className="flex md:flex-row sm:flex-col w-[55%] md:w-full mt-[115px] gap-[89px]">
              <div className="flex p-[37px] sm:p-5 bg-red-50 shadow-xs cursor-pointer rounded-[23px] hover:shadow-xs">
                <Text size="4xl" as="p" className="mt-[68px] !text-orange-800 !font-cormorantgaramond text-center">
                  Nutrition
                </Text>
              </div>
              <div className="flex flex-col items-center gap-[25px] flex-1 cursor-pointer hover:shadow-xs">
                <Img src="images/img_settings_gray_800_01.svg" alt="settings_one" className="h-[47px]" />
                <div className="flex">
                  <Text size="4xl" as="p" className="!text-gray-800_e5 !font-cormorantgaramond text-center">
                    Fitness
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center gap-7 flex-1 cursor-pointer hover:shadow-xs">
                <Img src="images/img_settings_gray_800_01_47x55.svg" alt="settings_one" className="h-[47px]" />
                <div className="flex">
                  <Text size="4xl" as="p" className="!text-gray-800_e5 !font-cormorantgaramond text-center">
                    Healing
                  </Text>
                </div>
              </div>
              <div className="flex mb-[39px] sm:mb-0 cursor-pointer hover:shadow-xs">
                <Text size="4xl" as="p" className="!text-gray-800_e5 !font-cormorantgaramond text-center">
                  Wellness
                </Text>
              </div>
            </div>
            <footer className="self-stretch mt-[191px]">
              <div>
                <div className="h-[555px] relative">
                  <Img
                    src="images/img_rectangle_22058_4.png"
                    alt="image_seven"
                    className="h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_9_555x1439.png"
                    alt="imagenine_one"
                    className="h-[555px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex md:flex-col justify-between items-center w-[79%] h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute md:relative">
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
