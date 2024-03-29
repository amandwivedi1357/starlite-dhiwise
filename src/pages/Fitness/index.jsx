import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function FitnessPage() {
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
              <Img src="images/img_rectangle_29_3.png" alt="image" className="h-[825px] w-full object-cover" />
              <div className="h-[828px] w-full md:h-auto left-0 bottom-0 right-0 top-0 p-12 m-auto md:p-5 bg-black-900_af absolute">
                <div className="flex flex-col items-center w-[93%] mt-2.5">
                  <div className="flex self-stretch justify-between items-start gap-5">
                    <Img src="images/img_television.svg" alt="image_one" className="h-[37px] mb-[18px]" />
                    <Img src="images/img_svg.svg" alt="svg_one" className="h-[20px] w-[20px]" />
                  </div>
                  <Text
                    size="12xl"
                    as="p"
                    className="mt-[173px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                  >
                    Elevate Your Fitness Journey
                  </Text>
                  <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                    One Workout at a Time
                  </Text>
                  <Text as="p" className="w-[33%] md:w-full mt-[25px] !text-white-A700_b2 text-center leading-[35px]">
                    Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                  </Text>
                </div>
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
            <div className="self-stretch h-[3597px] md:h-auto mt-[27px] relative">
              <div className="w-full">
                <div className="flex flex-col items-end">
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
                            Fitness Consultation Programs
                          </Text>
                          <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                            FITNESS
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch gap-[25px]">
                        <Text size="lg" as="p" className="!text-gray-800_e5 text-center leading-[29px]">
                          Fitness encompasses the pursuit of physical well-being through regular exercise, healthy
                          nutrition, and lifestyle choices. It involves maintaining strength, endurance, flexibility,
                          and cardiovascular health to support overall vitality and longevity. Fitness goals vary from
                          individual to individual and can include improving athletic performance, managing weight,
                          enhancing mobility, or simply promoting general health and well-being. Achieving fitness
                          involves a combination of aerobic exercise, strength training, flexibility work, and proper
                          nutrition. It&#39;s not just about physical appearance but also about cultivating a strong and
                          resilient body that supports an active and fulfilling life.{" "}
                        </Text>
                        <Text size="lg" as="p" className="!text-gray-800_e5 text-center leading-[29px]">
                          Regular physical activity not only strengthens the body but also benefits mental health,
                          reducing stress and improving mood. Ultimately, fitness is a journey of self-improvement,
                          empowerment, and self-care, leading to a healthier and happier life.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-[-81px] px-14 py-[84px] md:p-5 z-[1] relative bg-red-50_59">
                  <div className="flex flex-col items-center w-[93%] md:w-full mb-[17px]">
                    <div className="flex w-[92%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <Img
                          src="images/img_rectangle_22175_264x455.png"
                          alt="image_two"
                          className="w-[40%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[52%] md:w-full mt-[39px] gap-3.5">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Performance Enhancement
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Optimising athletic performance requires strategic nutrition planning. Our sports nutrition
                            specialists develop personalised meal plans that fuel workouts, enhance recovery, and
                            maximise athletic potential for athletes of all levels.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <div className="flex flex-col items-start w-[50%] md:w-full mt-[31px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Muscle Recovery
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Effective muscle recovery is critical for athletes. Our nutrition regimens include measures
                            to enhance muscle repair and regeneration, enabling quick recovery from strenuous workouts
                            and contests.
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_22201_264x455.png"
                          alt="image_three"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <Img
                          src="images/img_rectangle_22202_264x455.png"
                          alt="image_four"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[37px] gap-3.5">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Lean Muscle Growth
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Sustaining muscular mass demands careful dietary planning. To assist people reach their
                            ideal body and strength goals, our specialists create personalized food regimens that
                            maximize protein synthesis, decrease fat accumulation, and encourage muscle building.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <div className="flex flex-col items-start w-[44%] md:w-full mt-[31px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Sustained Energy
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Sustained energy is essential for sports performance. Our sports nutrition regimes
                            prioritize energy availability through balanced macronutrient intake and optimal meal
                            timing, hence improving endurance and stamina.S
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_22203_264x455.png"
                          alt="image_five"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <Img
                          src="images/img_rectangle_22204_2.png"
                          alt="image_six"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[39px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Sleep Optimization
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Quality sleep is essential for athletic recovery and overall well-being. Our nutrition
                            programs include strategies to improve sleep quality and duration, supporting optimal
                            performance and recovery for athletes.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <div className="flex flex-col items-start w-[44%] md:w-full mt-[31px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Weight Management
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            A healthy weight must be maintained in order to perform well in sports. Our weight
                            management programs use individualised diet plans and lifestyle changes to support long-term
                            weight loss or maintenance
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_22218.png"
                          alt="image_seven"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <Img
                          src="images/img_rectangle_22219.png"
                          alt="image_eight"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[39px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Functional Foods & Superfoods
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Functional foods and superfoods provide unique health benefits. Our nutritionists
                            incorporate these nutrient-dense foods into personalised meal plans, resulting in better
                            health outcomes for athletes and fitness enthusiasts.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-[60px]">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <div className="flex flex-col items-start w-[44%] md:w-full mt-[31px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Nutrient Timing
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Timing nutrition strategically improves sports performance and recuperation. In order to
                            maximise performance potential and optimise nutrient delivery, our sports nutrition
                            specialists create customised meal timing strategies.
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_22220.png"
                          alt="image_nine"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[56%] md:w-full mt-4 gap-5">
                      <Img
                        src="images/img_group_50437_orange_800_29x43.svg"
                        alt="image_ten"
                        className="self-end h-[29px]"
                      />
                      <Img src="images/img_globe.svg" alt="globe_one" className="h-[32px]" />
                    </div>
                    <div className="self-stretch mt-2.5">
                      <div className="flex md:flex-col justify-between items-start gap-5">
                        <Img
                          src="images/img_rectangle_22221.png"
                          alt="image_eleven"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[39px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Guided Nutrition for Training & Competition
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Intense training and competition necessitate individualised nutrition support. Our team
                            creates tailored nutrition plans for athletes to ensure peak performance, recovery, and
                            overall well-being during peak training and competition seasons.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_leaf_2_png_77x102.png"
                alt="leaf2png_three"
                className="h-[77px] w-[7%] right-[0.00px] top-[18%] m-auto object-cover absolute"
              />
              <Img
                src="images/img_leaf_2_png_1.png"
                alt="leaf2png_five"
                className="h-[103px] w-[10%] bottom-[12%] left-[0.00px] m-auto object-cover absolute"
              />
              <Img
                src="images/img_leaf_2_png_103x151.png"
                alt="leaf2png_seven"
                className="h-[103px] w-[11%] left-[-29.00px] top-[0.00px] m-auto object-cover absolute"
              />
            </div>
            <div className="self-stretch h-[847px] md:h-auto mt-[89px] relative">
              <div className="flex flex-col items-center w-full">
                <div className="self-stretch h-[395px] bg-red-50" />
                <div className="w-[26%] md:w-full mt-[-110px] relative">
                  <div className="flex flex-col items-center justify-center p-[47px] md:p-5 bg-white-A700_01 shadow-lg rounded">
                    <Img src="images/img_dumbbell.svg" alt="dumbbell_one" className="h-[55px] w-[55px] mt-[25px]" />
                    <Text size="6xl" as="p" className="mt-5 !text-gray-800_01 !font-cormorant text-center">
                      Fitness Care Plan
                    </Text>
                    <Text as="p" className="mt-[43px] !text-gray-800_e5">
                      8 weeks / 12 weeks
                    </Text>
                    <div className="flex flex-col items-center mt-5 mb-[23px]">
                      <Text as="p" className="!text-gray-800_e5">
                        Anthropometric measurement
                      </Text>
                      <Text as="p" className="mt-[19px] !text-gray-800_e5">
                        Comprehensive medical history
                      </Text>
                      <Text as="p" className="mt-[19px] !text-gray-800_e5">
                        Nutrition diagnosis
                      </Text>
                      <Button
                        size="xl"
                        shape="round"
                        className="mt-[68px] sm:px-5 tracking-[1.68px] uppercase border-orange-800 border border-solid min-w-[189px] !rounded-sm"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center w-full top-[0.00px] right-0 left-0 m-auto absolute md:relative">
                <div className="md:self-stretch h-[669px] md:w-full md:h-auto flex-1 relative md:flex-none">
                  <Img
                    src="images/img_image_8_329x641.png"
                    alt="imageeight_one"
                    className="h-[669px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center gap-[9px] top-[13%] right-0 left-0 m-auto absolute">
                    <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                      Fitness Programs
                    </Text>
                    <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                      OUR PROGRAMS
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_leaf_2_png_87x96.png"
                  alt="leaf2png_nine"
                  className="self-end w-[6%] md:w-full mb-[217px] ml-[-95px] md:ml-0 z-[1] relative object-cover"
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
                  <div className="h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-600 absolute" />
                  <Img
                    src="images/img_image_9_555x1440.png"
                    alt="imagenine_one"
                    className="h-[555px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex md:flex-col justify-between items-center w-[79%] h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute md:relative">
                    <div className="flex flex-col items-start w-[21%] md:w-full">
                      <Heading as="h3">Address</Heading>
                      <a href="#" className="mt-5">
                        <Text size="2xl" as="p" className="!font-lato">
                          Hyderabad ( Headquarters)
                        </Text>
                      </a>
                      <Text as="p" className="mt-[7px] !font-lato leading-[27px]">
                        #201, Sri Parvata,Plot 1285A, Rd 1 & 64,Jubilee Hills, Hyderabad 500033.
                      </Text>
                      <a href="#" className="mt-[41px]">
                        <Text size="2xl" as="p" className="!font-lato">
                          Visakhapatnam Center{" "}
                        </Text>
                      </a>
                      <Text as="p" className="mt-1.5 !font-lato leading-[27px]">
                        <>
                          #110, 1st Floor,
                          <br />
                          Dutt Island, Siripuram.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                      <Heading as="h3">Contact Details</Heading>
                      <div className="flex flex-col items-start gap-[70px] md:gap-[52px] sm:gap-[35px]">
                        <div className="flex flex-col items-start gap-[11px]">
                          <Text size="2xl" as="p" className="!font-lato">
                            Hyderabad ( Headquarters)
                          </Text>
                          <ul className="flex flex-col items-start gap-[7px]">
                            <li>
                              <a href="#">
                                <Text as="p" className="!font-lato">
                                  +91 8500082020
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="ml-0.5 md:ml-0">
                                <Text as="p" className="!font-lato">
                                  <span className="text-white-A700_01">&nbsp;</span>
                                  <span className="text-white-A700_01">welcome@starlitenutrition.com</span>
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <ul className="flex flex-col items-start gap-2.5">
                          <li>
                            <a href="#">
                              <Text size="2xl" as="p" className="!font-lato">
                                Visakhapatnam Center
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="flex">
                                <Text as="p" className="!font-lato">
                                  +91 8500092020
                                </Text>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
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
