import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function StarlitehomepagePage() {
  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-auto bg-white-A700_01">
        <div className="w-full mx-auto md:p-5 max-w-[1451px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch h-[2102px] md:h-auto relative">
              <div className="w-full">
                <div className="z-[1]">
                  <div className="h-[825px] z-[1] relative">
                    <Img
                      src="images/img_rectangle_29.png"
                      alt="image"
                      className="h-[825px] w-full bottom-[-129.00px] right-0 left-0 m-auto object-cover absolute"
                    />
                    <div className="w-full h-max pt-[47px] left-0 bottom-0 right-0 top-0 px-[47px] m-auto md:pt-5 md:px-5 bg-black-900_af absolute">
                      <div className="flex flex-col self-end items-center">
                        <header className="flex justify-between items-center w-[94%] md:w-full gap-5">
                          <Img src="images/img_television.svg" alt="image_one" className="h-[53px] w-[53px]" />
                          <Img src="images/img_svg.svg" alt="svg_one" className="h-[20px] w-[20px] mt-[15px]" />
                        </header>
                        <div className="self-stretch h-[730px] md:h-auto relative">
                          <div className="flex flex-col items-center w-[45%] mt-[133px]">
                            <Text
                              size="12xl"
                              as="p"
                              className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                            >
                              Nourish Your Soul{" "}
                            </Text>
                            <Text
                              size="12xl"
                              as="p"
                              className="mt-1.5 !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                            >
                              At Our Wellness Retreats
                            </Text>
                            <Text
                              as="p"
                              className="w-[68%] md:w-full mt-[25px] !text-white-A700_b2 text-center leading-[35px]"
                            >
                              Ready for a new year of wellness? We are. Come join us for your health and wellness
                              retreat.
                            </Text>
                            <Button
                              shape="round"
                              className="mt-[34px] sm:px-5 tracking-[1.60px] uppercase font-medium min-w-[152px]"
                            >
                              DISCOVEr
                            </Button>
                          </div>
                          <div className="flex justify-end w-full h-max left-0 bottom-0 right-0 top-0 p-[33px] m-auto sm:p-5 border-white-A700_3d border border-solid absolute rounded-[23px]">
                            <div className="flex md:flex-col justify-between items-center w-[63%] md:w-full mb-[619px] mr-[106px] gap-5 md:mr-0">
                              <div className="flex justify-between w-[56%] md:w-full gap-5">
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
                                  <Img
                                    src="images/img_plus.svg"
                                    alt="plus_three"
                                    className="h-[11px] w-[11px] mt-0.5"
                                  />
                                </div>
                                <a href="connect" target="_blank" rel="noreferrer" className="self-end">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center items-start mt-[-29px] relative">
                    <Img
                      src="images/img_leaf_2_png.png"
                      alt="leaf2png_one"
                      className="w-[8%] md:w-full mt-[89px] z-[1] object-cover"
                    />
                    <div className="md:self-stretch h-[653px] md:w-full md:h-auto ml-[-131px] md:ml-0 relative flex-1 md:flex-none">
                      <Img src="images/img_image_6.png" alt="imagesix_one" className="h-[653px] w-full object-cover" />
                      <div className="flex flex-col items-start w-[42%] gap-[29px] bottom-[11%] left-[7%] m-auto absolute">
                        <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[63px]">
                          <span className="text-gray-800_01">A true partner in your health and&nbsp;</span>
                          <span className="text-gray-800_01 font-normal italic">wellness</span>
                        </Text>
                        <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                          OUR MISSION
                        </Text>
                        <Text size="lg" as="p" className="w-[97%] md:w-full !text-gray-800_01 leading-[29px]">
                          Nurturing Your Well-being with a Holistic Approach. We believe in improving lives through good
                          nutrition and the guidance of expert coaches.
                        </Text>
                        <Button
                          color="orange_800_01"
                          variant="outline"
                          shape="round"
                          className="sm:px-5 tracking-[1.68px] uppercase min-w-[189px]"
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end mt-[-85px] relative">
                  <Img
                    src="images/img_leaf_1_png.png"
                    alt="leaf1png_one"
                    className="w-[9%] mr-[618px] md:mr-0 z-[1] object-cover"
                  />
                  <div className="flex md:flex-col self-stretch justify-end items-start mt-[-35px] relative">
                    <Img
                      src="images/img_leaf_2_png.png"
                      alt="leaf2png_three"
                      className="w-[8%] md:w-full mt-[196px] z-[1] object-cover"
                    />
                    <div className="md:self-stretch h-[653px] md:w-full md:h-auto ml-[-131px] md:ml-0 relative flex-1 md:flex-none">
                      <Img src="images/img_image_10.png" alt="imageten_one" className="h-[653px] w-full object-cover" />
                      <div className="flex flex-col items-center w-[51%] bottom-[13%] right-0 left-0 m-auto absolute">
                        <Text
                          size="10xl"
                          as="p"
                          className="w-[78%] md:w-full !text-gray-800_01 !font-cormorant text-center leading-[74px]"
                        >
                          <>
                            The perfect place for retreat, <br />
                            Where is your escape?
                          </>
                        </Text>
                        <Text
                          size="s"
                          as="p"
                          className="mt-[21px] !text-deep_orange-800 tracking-[2.00px] uppercase text-center"
                        >
                          OUR SERVICES
                        </Text>
                        <div className="flex self-stretch justify-between items-center mt-[113px] gap-5">
                          <div className="flex flex-col items-start gap-[26px]">
                            <Img
                              src="images/img_group_50437.svg"
                              alt="image_two"
                              className="h-[42px] w-[43px] ml-6 md:ml-0"
                            />
                            <div className="flex">
                              <Text size="4xl" as="p" className="!text-orange-800 !font-cormorantgaramond text-center">
                                Nutrition
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center w-[9%] gap-[25px]">
                            <Img src="images/img_settings.svg" alt="cut_one" className="h-[47px]" />
                            <div className="flex">
                              <Text size="4xl" as="p" className="!text-orange-800 !font-cormorantgaramond text-center">
                                Fitness
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center w-[11%] gap-7">
                            <Img src="images/img_cut.svg" alt="cut_three" className="h-[47px]" />
                            <div className="flex">
                              <Text size="4xl" as="p" className="!text-orange-800 !font-cormorantgaramond text-center">
                                Healing
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col self-start items-center gap-[25px]">
                            <Img
                              src="images/img_settings_orange_800.svg"
                              alt="settings_one"
                              className="h-[46px] w-[46px]"
                            />
                            <div className="flex">
                              <Text size="4xl" as="p" className="!text-orange-800 !font-cormorantgaramond text-center">
                                Wellness
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-[41%] bottom-[33%] right-[7%] m-auto shadow-xs absolute rounded-[7px]">
                <Img
                  src="images/img_rectangle_26.png"
                  alt="image_three"
                  className="h-[443px] w-full md:h-auto object-cover rounded-[7px]"
                />
              </div>
            </div>
            <div className="flex md:flex-col justify-end items-start w-[93%] md:w-full mt-[9px]">
              <div className="flex md:flex-col justify-between items-center md:self-stretch mt-[9px] pr-[55px] gap-5 md:pr-5 z-[1] bg-red-50_1e shadow-xs flex-1 rounded-[10px]">
                <div className="flex justify-center w-[61%] md:w-full">
                  <Img
                    src="images/img_rectangle_26_495x720.png"
                    alt="image_four"
                    className="h-[495px] w-full md:h-auto rounded-bl-[10px] rounded-tl-[10px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-[35%] md:w-full gap-[35px]">
                  <div className="self-stretch">
                    <Text size="7xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[54px]">
                      <span className="text-gray-800_01">Its time to kick start the healthy&nbsp;</span>
                      <span className="text-gray-800_01 font-normal italic">life style</span>
                    </Text>
                  </div>
                  <Text as="p" className="!text-gray-800_01 leading-[29px]">
                    Nourishing wellness through personalised nutrition. Fuel your best self with our expert guidence.
                  </Text>
                  <Button
                    color="orange_800_01"
                    variant="outline"
                    shape="round"
                    className="sm:px-5 tracking-[1.68px] uppercase min-w-[189px]"
                  >
                    Nutrition
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_leaf_2_png_103x102.png"
                alt="leaf2png_five"
                className="w-[102px] md:w-full ml-[-3px] md:ml-0 relative object-cover"
              />
            </div>
            <div className="h-[591px] w-[93%] mt-1 relative">
              <Img
                src="images/img_leaf_2_png_103x135.png"
                alt="leaf2png_seven"
                className="h-[103px] w-[10%] left-[0.00px] top-[0.00px] m-auto object-cover absolute"
              />
              <div className="flex md:flex-col justify-between items-center w-[93%] pl-[55px] bottom-[0.00px] right-[-0.20px] gap-5 m-auto md:pl-5 bg-red-50_1e shadow-xs absolute rounded-[10px] md:relative">
                <div className="flex flex-col items-start w-[35%] md:w-full gap-[51px] sm:gap-[25px]">
                  <div className="flex flex-col self-stretch gap-5">
                    <Text size="7xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[54px]">
                      <span className="text-gray-800_01">The best way to start the day is with a&nbsp;</span>
                      <span className="text-gray-800_01 font-normal italic">cleanse</span>
                      <span className="text-gray-800_01">&nbsp;</span>
                    </Text>
                    <Text as="p" className="!text-gray-800_01 leading-[29px]">
                      Elevate your fitness journey with us where strength meets resilience. Unleash your potential,
                      embrace the fit within
                    </Text>
                  </div>
                  <Button
                    color="orange_800_02"
                    variant="outline"
                    shape="round"
                    className="sm:px-5 tracking-[1.68px] uppercase min-w-[189px]"
                  >
                    Fitness
                  </Button>
                </div>
                <div className="flex justify-center w-[61%] md:w-full">
                  <Img
                    src="images/img_rectangle_26_1.png"
                    alt="image_five"
                    className="h-[495px] w-full md:h-auto rounded-tr-[10px] rounded-br-[10px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[629px] mt-11 relative">
              <Img
                src="images/img_leaf_2_png_103x148.png"
                alt="leaf2png_nine"
                className="h-[103px] w-[10%] bottom-[0.00px] left-[0.00px] m-auto object-cover absolute"
              />
              <Img
                src="images/img_leaf_2_png_103x146.png"
                alt="leaf2png_eleven"
                className="h-[103px] w-[10%] right-[0.80px] top-[0.00px] m-auto object-cover absolute"
              />
              <div className="flex md:flex-col justify-between items-center w-[86%] pr-[55px] top-[9%] right-0 left-0 gap-5 m-auto md:pr-5 bg-red-50_1e shadow-xs absolute rounded-[10px] md:relative">
                <div className="flex justify-center w-[61%] md:w-full">
                  <Img
                    src="images/img_rectangle_26_2.png"
                    alt="image_six"
                    className="h-[495px] w-full md:h-auto rounded-bl-[10px] rounded-tl-[10px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-[35%] md:w-full gap-[51px] sm:gap-[25px]">
                  <div className="flex flex-col self-stretch gap-5">
                    <a href="#" className="leading-[54px]">
                      <Text size="7xl" as="p" className="!text-gray-800_01 !font-cormorant">
                        <span className="text-gray-800_01">Keep Your Body, Mind And Soul In Ideal&nbsp;</span>
                        <span className="text-gray-800_01 font-normal italic">Balance</span>
                      </Text>
                    </a>
                    <Text as="p" className="w-[97%] md:w-full !text-gray-800_01 leading-[29px]">
                      Find solace in healing moments, where restoration begins. Embrace tranquility, nurture your
                      well-being.
                    </Text>
                  </div>
                  <Button
                    color="orange_800_02"
                    variant="outline"
                    shape="round"
                    className="sm:px-5 tracking-[1.68px] uppercase min-w-[189px]"
                  >
                    HEALING
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center w-[86%] md:w-full mt-[21px] pl-[55px] gap-5 md:pl-5 bg-red-50_1e shadow-xs rounded-[10px]">
              <div className="flex flex-col items-start w-[35%] md:w-full gap-[57px] sm:gap-7">
                <div className="flex flex-col self-stretch gap-5">
                  <Text size="7xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[54px]">
                    <span className="text-gray-800_01">Nourish Your Soul at Our Wellness&nbsp;</span>
                    <span className="text-gray-800_01 font-normal italic">Retreats</span>
                  </Text>
                  <Text as="p" className="!text-gray-800_01 leading-[29px]">
                    Wellness redefined: nurture your mind, invigorate your spirit. Embrace a healthier, happier you with
                    us.
                  </Text>
                </div>
                <Button
                  color="orange_800_02"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 tracking-[1.68px] uppercase min-w-[189px]"
                >
                  WELLNESS
                </Button>
              </div>
              <div className="flex justify-center w-[61%] md:w-full">
                <Img
                  src="images/img_rectangle_26_3.png"
                  alt="image_seven"
                  className="h-[495px] w-full md:h-auto rounded-tr-[10px] rounded-br-[10px] object-cover"
                />
              </div>
            </div>
            <div className="self-stretch h-[1011px] mt-[54px] relative">
              <Img
                src="images/img_leaf_2_png_183x206.png"
                alt="leaf2png"
                className="h-[183px] w-[14%] left-[0.00px] top-[0.00px] m-auto object-cover absolute"
              />
              <div className="flex flex-col w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-col items-end">
                  <Img src="images/img_leaf_2_png_150x132.png" alt="leaf2png" className="w-[9%] z-[1] object-cover" />
                  <div className="flex flex-col self-stretch items-start mt-[-30px] relative">
                    <Heading size="xl" as="h1" className="ml-[43px] md:ml-0 !text-deep_orange-100_84 z-[1]">
                      Wellness
                    </Heading>
                    <div className="flex flex-col self-stretch items-end mt-[-67px] relative">
                      <Heading size="xl" as="h2" className="mr-[42px] md:mr-0 !text-deep_orange-100_84">
                        Lifestyle
                      </Heading>
                      <div className="self-stretch mt-[-20px] relative">
                        <Img
                          src="images/img_h1_row_background_img_4_png.png"
                          alt="h1row_one"
                          className="h-[157px] w-full md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col self-center mt-[-17px] relative">
                  <Heading size="lg" as="h3" className="!text-deep_orange-300_3f text-center">
                    8
                  </Heading>
                </div>
              </div>
              <Img
                src="images/img_leaf_1_png_197x69.png"
                alt="leaf1png_three"
                className="h-[197px] w-[5%] bottom-[31%] right-[0.80px] m-auto object-cover absolute"
              />
              <Text
                size="6xl"
                as="p"
                className="bottom-[11%] left-[30%] m-auto !text-gray-800_01 !font-cormorant text-center absolute"
              >
                Our Happy Clients
              </Text>
              <div className="flex md:flex-col items-center w-[52%] bottom-[26.52px] left-[7%] m-auto absolute md:relative">
                <div className="flex self-end mb-[88px] z-[1]">
                  <Text size="6xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                    Years of Experience
                  </Text>
                </div>
                <div className="flex flex-col md:self-stretch flex-1">
                  <div className="z-[1]">
                    <Img
                      src="images/img_bowl_png.png"
                      alt="bowlpng_one"
                      className="h-[322px] w-full md:h-auto object-cover"
                    />
                  </div>
                  <div className="flex items-center mt-[-4px] ml-[101px] gap-[3px] md:ml-0 relative">
                    <div className="flex flex-col">
                      <Heading size="lg" as="h4" className="!text-deep_orange-300_3f text-center">
                        10
                      </Heading>
                    </div>
                    <Heading size="md" as="h5" className="!text-deep_orange-300_3f text-center">
                      K
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-end items-start w-[44%] gap-[3px] bottom-[0.65px] right-[5%] m-auto absolute md:relative">
                <div className="md:self-stretch mb-[22px] flex-1">
                  <div>
                    <div>
                      <div>
                        <div className="h-[237px] md:h-auto relative">
                          <Heading size="lg" as="h6" className="!text-deep_orange-300_3f text-center">
                            100+
                          </Heading>
                          <div className="flex bottom-[38%] right-0 left-0 m-auto absolute">
                            <Text size="6xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                              Professional Experience
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-[45%] md:w-full">
                  <div className="w-full px-[31px] sm:px-5">
                    <div className="h-[237px] relative">
                      <div className="flex top-[35%] right-0 left-0 m-auto absolute">
                        <Text size="6xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                          Worldwide access
                        </Text>
                      </div>
                      <div className="flex flex-col h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Heading size="lg" as="h1" className="!text-deep_orange-300_3f text-center">
                          5
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bottom-[38%] right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_h1_row_background_img_4_png_157x1426.png"
                  alt="h1row_three"
                  className="h-[157px] w-full md:h-auto object-cover"
                />
              </div>
            </div>
            <div className="self-stretch h-[803px] mt-[167px] relative">
              <div className="h-[653px] w-full md:h-auto bottom-[0.45px] right-0 left-0 m-auto absolute">
                <Img src="images/img_image_11.png" alt="imageeleven_one" className="h-[653px] w-full object-cover" />
                <div className="flex flex-col items-center w-[86%] gap-[101px] top-[1.55px] right-0 left-0 m-auto md:gap-[75px] sm:gap-[50px] absolute">
                  <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px] uppercase text-center">
                    TESTIMONIALS
                  </Text>
                  <div className="flex md:flex-col self-stretch justify-between items-center pr-[61px] gap-5 md:pr-5 bg-red-50_1e shadow-xs rounded-[10px]">
                    <div className="flex justify-center w-[61%] md:w-full">
                      <Img
                        src="images/img_rectangle_26_4.png"
                        alt="image_eight"
                        className="h-[495px] w-full md:h-auto rounded-bl-[10px] rounded-tl-[10px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start w-[34%] md:w-full gap-[37px]">
                      <div className="flex flex-col self-stretch items-start pt-1.5 gap-6">
                        <a href="#">
                          <Text size="7xl" as="p" className="!text-gray-800_01 !font-cormorant">
                            Mr. Praveen
                          </Text>
                        </a>
                        <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                          <>
                            My wife has lost 7 kgs in three month’s time, now with more health and happiness.
                            <br />I advise everyone to consult Dr Deepthi.
                          </>
                        </Text>
                      </div>
                      <Button
                        variant="outline"
                        shape="round"
                        className="sm:px-5 tracking-[1.68px] uppercase min-w-[189px]"
                      >
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_leaf_1_png_197x100.png"
                alt="leaf1png_five"
                className="h-[197px] w-[7%] left-[0.00px] top-[0.00px] m-auto object-cover absolute"
              />
              <Text
                size="10xl"
                as="p"
                className="w-max top-[9%] right-0 left-0 m-auto !text-gray-800_01 !font-cormorant text-center absolute"
              >
                <span className="text-gray-800_01">Success Stories: Thriving with</span>
                <span className="text-gray-800_01 font-normal italic">&nbsp;</span>
                <span className="text-gray-800_01">Starlite</span>
              </Text>
            </div>
            <div className="flex justify-center w-[80px] h-[14px] mt-[13px]" />
            <div className="self-stretch h-[874px] mt-[55px] relative">
              <div className="flex flex-col items-start w-full top-[0.00px] right-0 left-0 m-auto absolute">
                <Img src="images/img_leaf_2_png_103x103.png" alt="leaf2png" className="w-[103px] z-[1] object-cover" />
                <Img
                  src="images/img_image_12.png"
                  alt="imagetwelve_one"
                  className="h-[653px] w-full md:h-auto mt-[-3px] relative object-cover"
                />
              </div>
              <div className="flex flex-col items-end w-full top-[19.00px] right-0 left-0 m-auto absolute">
                <Img src="images/img_leaf_2_png_132x163.png" alt="leaf2png" className="w-[11%] object-cover" />
                <div className="self-stretch mt-[-79px] relative">
                  <div className="h-[226px] md:h-auto relative">
                    <Img
                      src="images/img_h1_row_background_img_4_png.png"
                      alt="h1row_five"
                      className="h-[157px] w-full object-cover"
                    />
                    <div className="flex flex-col items-center gap-[17px] bottom-[17%] right-0 left-0 m-auto absolute">
                      <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                        We work with best partners
                      </Text>
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px] uppercase text-center">
                        OUR PARTNERS
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bottom-[0.00px] right-0 left-0 m-auto absolute">
                <div className="flex flex-col items-center">
                  <div className="self-stretch h-[277px] relative">
                    <div className="flex flex-col items-center w-full top-[0.00px] right-0 left-0 m-auto absolute">
                      <Text
                        size="lg"
                        as="p"
                        className="w-[67%] md:w-full !text-gray-800_01 text-center z-[1] leading-[35px]"
                      >
                        Starlite places a high priority on the well-being of its clients and exemplifies a collaborative
                        approach to holistic rehabilitation. Starlite is a Hyderabad, India-based company that was
                        founded in 2016. It also has operations in Visakhapatnam and Dubai. 
                      </Text>
                      <Img
                        src="images/img_h1_row_background_img_4_png_157x1436.png"
                        alt="h1row_seven"
                        className="h-[157px] w-full md:h-auto mt-[-54px] relative object-cover"
                      />
                    </div>
                    <div className="w-full bottom-[0.00px] right-0 left-0 m-auto absolute">
                      <div className="flex sm:flex-col justify-between items-end gap-5 p-[37px] sm:p-5">
                        <Img
                          src="images/img_trexbio_logo_removebg_preview.png"
                          alt="trexbiologo_one"
                          className="w-[12%] sm:w-full mt-[97px] ml-[237px] md:ml-0 object-cover"
                        />
                        <Img
                          src="images/img_pulse_logo.png"
                          alt="pulselogo_one"
                          className="w-[9%] sm:w-full mb-[13px] object-cover"
                        />
                        <Img
                          src="images/img_helios_logo_201.png"
                          alt="helioslogo201"
                          className="w-[13%] sm:w-full mb-[11px] object-cover"
                        />
                        <Img
                          src="images/img_gourmet_craft_r.png"
                          alt="gourmetcraftr"
                          className="w-[9%] sm:w-full mb-[9px] object-cover"
                        />
                        <Img
                          src="images/img_download_2_removebg_preview.png"
                          alt="downloadtwo_one"
                          className="w-[12%] sm:w-full mb-[5px] mr-[205px] md:mr-0 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-between items-start w-[66%] md:w-full mt-[49px] gap-5">
                    <Img
                      src="images/img_yes_labs_sainik.png"
                      alt="yeslabssainik"
                      className="w-[10%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_fast_and_up_club_logo.png"
                      alt="fastandup_one"
                      className="w-[9%] sm:w-full object-cover"
                    />
                    <Img src="images/img_logo_2x.png" alt="logo2x_one" className="w-[10%] sm:w-full object-cover" />
                    <Img
                      src="images/img_1478dbc3_f0f6_4.png"
                      alt="1478dbc3f0f6fou"
                      className="w-[18%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_tata_1mg_logo.png"
                      alt="tata1mglogo_one"
                      className="w-[9%] sm:w-full object-cover"
                    />
                  </div>
                  <Img
                    src="images/img_leaf_2_png_103x154.png"
                    alt="leaf2png"
                    className="w-[11%] mt-[97px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[470px] md:h-auto mt-[87px] relative">
              <Img src="images/img_rectangle_22066.png" alt="image_nine" className="h-[470px] w-full object-cover" />
              <div className="flex justify-center w-[88%] h-max left-0 bottom-0 right-0 top-0 px-14 py-[108px] m-auto md:p-5 bg-black-900_96 absolute rounded">
                <div className="flex flex-col items-end mt-1 gap-9">
                  <Text size="11xl" as="p" className="!font-cormorant text-center">
                    Interested in Health & Wellness ?
                  </Text>
                  <Button
                    shape="round"
                    className="mr-[209px] md:mr-0 sm:px-5 tracking-[2.00px] uppercase font-medium min-w-[245px]"
                  >
                    contact us today
                  </Button>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[558px] md:h-auto relative">
              <Img src="images/img_rectangle_22058.png" alt="image_ten" className="h-[558px] w-full object-cover" />
              <div className="w-full top-[3.00px] right-0 left-0 m-auto absolute">
                <div className="flex flex-col">
                  <div className="h-[367px] md:h-auto relative">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col self-stretch items-start">
                        <footer className="self-stretch rotate-[180deg]" />
                        <Text size="2xl" as="p" className="mt-[-21px] ml-[153px] md:ml-0 !font-lato relative">
                          Visakhapatnam Center{" "}
                        </Text>
                      </div>
                      <Text size="2xl" as="p" className="mt-[-17px] !font-lato relative">
                        Visakhapatnam Center
                      </Text>
                    </div>
                    <div className="flex md:flex-col justify-between items-center w-[79%] bottom-[20%] right-0 left-0 gap-5 m-auto absolute md:relative">
                      <div className="flex flex-col w-[65%] md:w-full gap-2">
                        <div className="flex justify-between items-start w-[91%] md:w-full gap-5 flex-wrap">
                          <Heading as="h3" className="mb-3">
                            Address
                          </Heading>
                          <Heading as="h3">Contact Details</Heading>
                        </div>
                        <div className="flex sm:flex-col justify-between items-start gap-5">
                          <div className="flex flex-col w-[33%] sm:w-full gap-[7px]">
                            <Text size="2xl" as="p" className="!font-lato">
                              Hyderabad ( Headquarters)
                            </Text>
                            <Text as="p" className="!font-lato leading-[27px]">
                              #201, Sri Parvata,Plot 1285A, Rd 1 & 64,Jubilee Hills, Hyderabad 500033.
                            </Text>
                          </div>
                          <div className="flex flex-col items-start mt-3 gap-[11px]">
                            <Text size="2xl" as="p" className="!font-lato">
                              Hyderabad ( Headquarters)
                            </Text>
                            <div className="flex flex-col items-start gap-[7px]">
                              <a href="#">
                                <Text as="p" className="!font-lato">
                                  +91 8500082020
                                </Text>
                              </a>
                              <Text as="p" className="ml-0.5 md:ml-0 !font-lato">
                                <span className="text-white-A700_01">&nbsp;</span>
                                <span className="text-white-A700_01">welcome@starlitenutrition.com</span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col self-end items-start mb-1 gap-4">
                        <Heading as="h3">Quick Links</Heading>
                        <div className="flex flex-col items-start gap-[9px]">
                          <a href="Home" target="_blank" rel="noreferrer">
                            <Text size="2xl" as="p" className="!font-lato !font-normal">
                              Home
                            </Text>
                          </a>
                          <a href="#">
                            <Text size="2xl" as="p" className="!font-lato !font-normal">
                              About Us
                            </Text>
                          </a>
                          <a href="Services" target="_blank" rel="noreferrer">
                            <Text size="2xl" as="p" className="!font-lato !font-normal">
                              Services
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start w-[49%] md:w-full ml-[153px] gap-5 md:ml-0">
                    <Text as="p" className="w-[38%] !font-lato leading-[27px]">
                      <>
                        #110, 1st Floor,
                        <br />
                        Dutt Island, Siripuram.
                      </>
                    </Text>
                    <a href="#" className="mt-3">
                      <Text as="p" className="!font-lato">
                        +91 8500092020
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
