import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Slider, Button } from "../../components";

export default function AboutuspagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="w-full pl-[30px] mx-auto md:p-5 sm:pl-5 max-w-[1470px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch h-[825px] relative">
              <Img
                src="images/img_rectangle_29_825x1439.png"
                alt="image"
                className="h-[825px] w-full bottom-[-133.00px] right-0 left-0 m-auto object-cover absolute"
              />
              <div className="w-full h-max pt-[46px] left-0 bottom-0 right-0 top-0 px-[46px] m-auto md:pt-5 md:px-5 bg-black-900_af absolute">
                <div className="flex flex-col self-end items-center">
                  <header className="flex justify-between items-center w-[93%] md:w-full gap-5">
                    <Img src="images/img_television.svg" alt="image_one" className="h-[53px] w-[53px]" />
                    <Img src="images/img_svg.svg" alt="svg_one" className="h-[20px] w-[20px] mt-[11px]" />
                  </header>
                  <div className="self-stretch h-[730px] md:h-auto relative">
                    <div className="flex flex-col items-center w-[45%] mt-[152px]">
                      <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
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
                        Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                      </Text>
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
                            <Img src="images/img_plus.svg" alt="plus_three" className="h-[11px] w-[11px] mt-0.5" />
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
            <div className="self-stretch h-[669px] md:h-auto mt-6 pl-[30px] sm:pl-5 relative">
              <div className="flex md:flex-col justify-center items-start w-full">
                <Img
                  src="images/img_leaf_2_png_103x151.png"
                  alt="leaf2png_one"
                  className="w-[10%] md:w-full mt-1.5 z-[1] object-cover"
                />
                <Img
                  src="images/img_image_7_669x1439.png"
                  alt="imageseven_one"
                  className="w-[92%] md:w-full ml-[-121px] md:ml-0 relative object-cover"
                />
              </div>
              <div className="flex flex-col w-[86%] h-max gap-[58px] right-[14.50px] bottom-0 top-0 my-auto sm:gap-[29px] absolute">
                <div className="flex md:flex-col items-start gap-[34px]">
                  <div className="flex flex-col items-center md:self-stretch mt-[73px] gap-7 flex-1">
                    <Text
                      size="10xl"
                      as="p"
                      className="w-[54%] md:w-full !text-gray-800_01 !font-cormorant text-center leading-[63px]"
                    >
                      <span className="text-gray-800_01">We&nbsp;</span>
                      <span className="text-gray-800_01 font-normal italic">Provide</span>
                      <span className="text-gray-800_01">&nbsp;Nutritious Treatments for Well - being</span>
                    </Text>
                    <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                      ABOUT US
                    </Text>
                    <Text size="lg" as="p" className="!text-gray-800_01 text-center leading-[35px]">
                      <>
                        Starlite places a high priority on the well-being of its clients and exemplifies a collaborative
                        approach to holistic rehabilitation. Starlite is a Hyderabad, India-based company that was
                        founded in 2016. It also has operations in Visakhapatnam and Dubai. 
                        <br />
                        <br />
                        Our philosophy is centered on holistic treatment, highlighting the relationship between the
                        mind, body, and spirit. We reject a one-size-fits-all approach and instead promote the
                        transforming potential of expert coaching combined with a balanced diet. 
                      </>
                    </Text>
                  </div>
                  <Img
                    src="images/img_leaf_2_png_103x151.png"
                    alt="leaf2png_three"
                    className="w-[13%] md:w-full object-cover"
                  />
                </div>
                <Img
                  src="images/img_leaf_2_png_103x151.png"
                  alt="leaf2png_five"
                  className="w-[15%] ml-[465px] md:ml-0 object-cover"
                />
              </div>
            </div>
            <div className="flex md:flex-col w-[85%] md:w-full mt-14 gap-[50px]">
              <div className="flex flex-col items-center justify-center w-full gap-[21px] px-14 py-[62px] md:p-5 border-deep_orange-300_99 border border-solid bg-white-A700_01 rounded-[16px]">
                <Img src="images/img_cut_gray_800_02.svg" alt="vision_one" className="h-[53px] mt-[9px]" />
                <Text size="6xl" as="p" className="!text-gray-800_01 !font-cormorantgaramond text-center">
                  Vision
                </Text>
                <Text
                  size="lg"
                  as="p"
                  className="w-[97%] md:w-full mb-2.5 !text-gray-800_01 text-center leading-[29px]"
                >
                  To be the people&#39;s first choice for wellness lifestyle aiming for a healthier, happier and
                  sustainable future across generations.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[21px] px-14 py-[71px] md:p-5 border-deep_orange-300_99 border border-solid bg-white-A700_01 rounded-[16px]">
                <Img src="images/img_settings_gray_800_02_53x64.svg" alt="settings_one" className="h-[53px]" />
                <Text size="6xl" as="p" className="!text-gray-800_01 !font-cormorantgaramond text-center">
                  Mission
                </Text>
                <Text size="lg" as="p" className="w-[93%] md:w-full !text-gray-800_01 text-center leading-[29px]">
                  To foster & inspire people to achieve optimal health & wellbeing through our holistic wellness
                  lifestyle programs.
                </Text>
              </div>
            </div>
            <div className="flex flex-col self-stretch items-center mt-[107px]">
              <div className="self-stretch h-[721px] md:h-auto relative">
                <div className="flex flex-col w-full">
                  <Img
                    src="images/img_leaf_2_png_103x151.png"
                    alt="leaf2png_seven"
                    className="w-[11%] ml-2 md:ml-0 z-[1] object-cover"
                  />
                  <div className="h-[669px] md:h-auto mt-[-51px] relative">
                    <Img src="images/img_image_8.png" alt="imageeight_one" className="h-[669px] w-full object-cover" />
                    <div className="flex flex-col items-center w-[80%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Text
                        size="10xl"
                        as="p"
                        className="w-[60%] md:w-full !text-gray-800_01 !font-cormorant text-center leading-[63px]"
                      >
                        <span className="text-gray-800_01">Experience&nbsp;</span>
                        <span className="text-gray-800_01 font-normal italic">wellness</span>
                        <span className="text-gray-800_01">&nbsp;with a touch of class :</span>
                        <span className="text-gray-800_01 font-normal italic">&nbsp;Nourish</span>
                        <span className="text-gray-800_01">&nbsp;your soul</span>
                      </Text>
                      <Text size="s" as="p" className="mt-[29px] !text-deep_orange-800 tracking-[2.00px]">
                        WHY US
                      </Text>
                      <Text
                        size="lg"
                        as="p"
                        className="w-[88%] md:w-full mt-[25px] !text-gray-800_01 text-center leading-[35px]"
                      >
                        Starlite Nutrition Centre boasts an excellent team of dedicated nutritionists, emphasizing a
                        holistic and research-led approach to achieving fitness goals. With an impressive success rate
                        and a focus on trust and confidentiality, they prioritize client well-being. The brand is not
                        just a name but a symbol of hope, bringing about transformative changes in health and lifestyle.
                        Starlite Nutrition Centre invites clients to embrace positive changes, fostering a happier,
                        healthier, and wealthier life through personalized wellness guidance.
                      </Text>
                      <div className="flex md:flex-col self-stretch mt-[115px] gap-32">
                        <div className="flex flex-col items-center w-[13%] md:w-full gap-[13px]">
                          <Img
                            src="images/img_big_lotus_flower.svg"
                            alt="excellent_team"
                            className="h-[56px] w-[56px]"
                          />
                          <Text size="4xl" as="p" className="!text-orange-800_cc !font-cormorant text-center">
                            Excellent Team
                          </Text>
                        </div>
                        <div className="flex flex-col items-center w-[9%] md:w-full gap-3">
                          <Img src="images/img_wellness.svg" alt="wellness_one" className="h-[59px] w-[59px]" />
                          <Text
                            size="4xl"
                            as="p"
                            className="!text-orange-800_cc !font-cormorant text-center !font-normal italic"
                          >
                            Success rate
                          </Text>
                        </div>
                        <div className="flex flex-col items-center gap-[17px] flex-1">
                          <Img src="images/img_settings.svg" alt="cut_one" className="h-[53px] w-[53px]" />
                          <Text size="4xl" as="p" className="!text-orange-800_cc !font-cormorant text-center">
                            Scientific & Holistic approach
                          </Text>
                        </div>
                        <div className="flex flex-col items-center w-[18%] md:w-full gap-3">
                          <Img src="images/img_meditation.svg" alt="meditation_one" className="h-[63px] w-[63px]" />
                          <Text
                            size="4xl"
                            as="p"
                            className="!text-orange-800_cc !font-cormorant text-center !font-normal italic"
                          >
                            Trust & Confidentiality
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_leaf_2_png_87x97.png"
                  alt="leaf2png_nine"
                  className="h-[87px] w-[7%] right-[0.00px] top-[23%] m-auto object-cover absolute"
                />
              </div>
              <Text size="10xl" as="p" className="mt-48 !text-gray-800_01 !font-cormorant text-center">
                Our Professional Team
              </Text>
              <Text size="s" as="p" className="mt-[18px] !text-deep_orange-800 tracking-[3.00px]">
                OUR TEAM
              </Text>
              <div className="flex md:flex-col self-stretch justify-between items-start mt-[111px] gap-5">
                <Img
                  src="images/img_leaf_2_png_103x151.png"
                  alt="leaf2png_eleven"
                  className="w-[11%] md:w-full object-cover"
                />
                <div className="flex md:flex-col w-[86%] md:w-full mt-7 gap-[134px]">
                  <div className="flex flex-col gap-3.5 flex-1">
                    <div>
                      <div className="bg-red-50 rounded-[10px]">
                        <Img
                          src="images/img_image_249.png"
                          alt="image"
                          className="h-[250px] w-full md:h-auto object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[15px]">
                      <Text
                        size="s"
                        as="p"
                        className="w-[84%] md:w-full !text-deep_orange-800 tracking-[2.00px] capitalize leading-[25px]"
                      >
                        Director And Advisor ( Lt. Col. )
                      </Text>
                      <Text size="3xl" as="p" className="!text-gray-800_01 !font-cormorantgaramond">
                        Pragathi Kumar Achanta
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[13px] flex-1">
                    <div className="self-stretch">
                      <div className="bg-red-50 rounded-[10px]">
                        <Img
                          src="images/img_image_249.png"
                          alt="image249_one"
                          className="h-[250px] w-full md:h-auto object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="w-[95%] md:w-full !text-deep_orange-800 tracking-[2.00px] leading-[25px]"
                    >
                      Founder And Director Strategy
                    </Text>
                    <Text size="3xl" as="p" className="!text-gray-800_01 !font-cormorantgaramond">
                      Mr. Naveeen Arun
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-3.5 flex-1">
                    <div className="self-stretch">
                      <div className="bg-red-50 rounded-[10px]">
                        <Img
                          src="images/img_image_249.png"
                          alt="image249_one"
                          className="h-[250px] w-full md:h-auto object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="w-[86%] md:w-full !text-deep_orange-800 tracking-[2.00px] capitalize leading-[25px]"
                    >
                      Co-Founder, Director - Operations
                    </Text>
                    <Text size="3xl" as="p" className="!text-gray-800_01 !font-cormorantgaramond">
                      Anjali Dange V
                    </Text>
                  </div>
                  <Img src="images/img_leaf_2_png_87x97.png" alt="leafpng" className="w-[8%] md:w-full object-cover" />
                </div>
              </div>
              <Img src="images/img_settings_gray_800_02_14x36.svg" alt="settings_one" className="h-[14px] mt-[68px]" />
              <div className="self-stretch mt-[157px]">
                <div className="flex flex-col items-center">
                  <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                    Our Professional Experts
                  </Text>
                  <Text size="s" as="p" className="mt-[11px] !text-deep_orange-800 tracking-[3.00px]">
                    OUR EXPERTS
                  </Text>
                  <div className="flex md:flex-col self-stretch justify-between items-center mt-[111px] gap-5">
                    <div className="flex md:flex-col justify-between items-start w-[85%] md:w-full gap-5">
                      <Img
                        src="images/img_leaf_2_png_103x151.png"
                        alt="leaf2png"
                        className="w-[12%] md:w-full object-cover"
                      />
                      <div className="w-[83%] mt-7">
                        <Slider
                          autoPlay
                          autoPlayInterval={2000}
                          responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 3 } }}
                          renderDotsItem={(props) => {
                            return props?.isActive ? (
                              <div className="w-[10px] h-[10px] bg-colors" />
                            ) : (
                              <div className="w-[10px] h-[10px] bg-white-A700_01" />
                            );
                          }}
                          activeIndex={sliderState}
                          onSlideChanged={(e) => {
                            setSliderState(e?.item);
                          }}
                          ref={sliderRef}
                          items={[...Array(9)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <div className="flex flex-col gap-3.5 mx-2.5">
                                <div>
                                  <div className="bg-red-50 rounded-[10px]">
                                    <Img
                                      src="images/img_image_249_250x250.png"
                                      alt="image249_one"
                                      className="h-[250px] w-full md:h-auto object-cover rounded-[10px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start w-[86%] md:w-full gap-[15px]">
                                  <Text
                                    size="s"
                                    as="p"
                                    className="w-[92%] md:w-full !text-deep_orange-800 tracking-[2.00px] capitalize leading-[25px]"
                                  >
                                    Trained Diabetes Educator
                                  </Text>
                                  <Text size="3xl" as="p" className="!text-gray-800_01 !font-cormorantgaramond">
                                    Ms. Gayathri Nishanth
                                  </Text>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_leaf_2_png_87x97.png"
                      alt="leaf2png"
                      className="self-end w-[7%] md:w-full mb-[133px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[84%] md:w-full mt-[179px] gap-5">
                <Img src="images/img_leaf_2_png_106x98.png" alt="leaf2png" className="w-[8%] md:w-full object-cover" />
                <div className="flex flex-col items-center w-[80%] md:w-full mb-[37px] gap-[43px]">
                  <div className="flex flex-col items-center justify-center gap-[25px] py-[5px]">
                    <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                      Discover Our Valued Wellness Partnerships
                    </Text>
                    <Text size="s" as="p" className="mb-0.5 !text-deep_orange-800 tracking-[3.00px]">
                      OUR PARTNERS
                    </Text>
                  </div>
                  <Text size="lg" as="p" className="!text-gray-800_01 text-center leading-[35px]">
                    Starlite places a high priority on the well-being of its clients and exemplifies a collaborative
                    approach to holistic rehabilitation. Starlite is a Hyderabad, India-based company that was founded
                    in 2016. It also has operations in Visakhapatnam and Dubai. 
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[83%] md:w-full mt-[61px] gap-5">
                <div className="flex flex-col w-[80%] md:w-full gap-[87px] md:gap-[65px] sm:gap-[43px]">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Img
                      src="images/img_trexbio_logo_removebg_preview.png"
                      alt="trexbiologo_one"
                      className="w-[12%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_pulse_logo.png"
                      alt="pulselogo_one"
                      className="w-[9%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_helios_logo_201.png"
                      alt="helioslogo201"
                      className="w-[13%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_gourmet_craft_r.png"
                      alt="gourmetcraftr"
                      className="w-[9%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_download_2_removebg_preview.png"
                      alt="downloadtwo_one"
                      className="w-[12%] sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex sm:flex-col justify-between items-start gap-5">
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
                </div>
                <Img
                  src="images/img_leaf_2_png_103x154.png"
                  alt="leaf2png"
                  className="w-[11%] md:w-full mt-[11px] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-[214px] gap-[25px] p-[5px]">
                <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                  Nurturing Your Wellness Journey{" "}
                </Text>
                <Text size="s" as="p" className="mb-0.5 !text-deep_orange-800 tracking-[3.00px]">
                  OUR CLIENTS
                </Text>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[83%] md:w-full mt-[43px] gap-5">
                <Img
                  src="images/img_leaf_2_png_106x98.png"
                  alt="leaf2png"
                  className="w-[8%] md:w-full mt-[7px] object-cover"
                />
                <Text size="lg" as="p" className="w-[80%] md:w-full !text-gray-800_01 text-center leading-[35px]">
                  Starlite places a high priority on the well-being of its clients and exemplifies a collaborative
                  approach to holistic rehabilitation. Starlite is a Hyderabad, India-based company that was founded in
                  2016. It also has operations in Visakhapatnam and Dubai. 
                </Text>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[83%] md:w-full mt-[83px] gap-5">
                <div className="flex flex-col w-[79%] md:w-full mb-[26px] gap-[87px] md:gap-[65px] sm:gap-[43px]">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Img
                      src="images/img_trexbio_logo_removebg_preview.png"
                      alt="trexbiologo"
                      className="w-[12%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_pulse_logo.png"
                      alt="pulselogo_three"
                      className="w-[9%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_helios_logo_201.png"
                      alt="helioslogo201"
                      className="w-[13%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_gourmet_craft_r.png"
                      alt="gourmetcraftr"
                      className="w-[9%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_download_2_removebg_preview.png"
                      alt="downloadtwo"
                      className="w-[12%] sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex sm:flex-col justify-between items-start gap-5">
                    <Img
                      src="images/img_yes_labs_sainik.png"
                      alt="yeslabssainik"
                      className="w-[10%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_fast_and_up_club_logo.png"
                      alt="fastandup_three"
                      className="w-[9%] sm:w-full object-cover"
                    />
                    <Img src="images/img_logo_2x.png" alt="logo2x_three" className="w-[10%] sm:w-full object-cover" />
                    <Img
                      src="images/img_1478dbc3_f0f6_4.png"
                      alt="1478dbc3f0f6fou"
                      className="w-[18%] sm:w-full object-cover"
                    />
                    <Img
                      src="images/img_tata_1mg_logo.png"
                      alt="tata1mglogo"
                      className="w-[9%] sm:w-full object-cover"
                    />
                  </div>
                </div>
                <Img src="images/img_leaf_2_png_87x128.png" alt="leaf2png" className="w-[11%] md:w-full object-cover" />
              </div>
              <Text size="10xl" as="p" className="mt-[222px] !text-gray-800_01 !font-cormorant text-center">
                Awards and Accolades in Wellness
              </Text>
              <Text size="s" as="p" className="mt-8 !text-deep_orange-800 tracking-[3.00px]">
                AWARDS & RECOGNITION
              </Text>
              <div className="self-stretch mt-[105px]">
                <div className="bg-red-50_84">
                  <div className="h-[495px] md:h-auto relative">
                    <Img
                      src="images/img_image_8_495x1439.png"
                      alt="imageeight"
                      className="h-[495px] w-full object-cover"
                    />
                    <div className="flex md:flex-col justify-between items-center w-[93%] h-max right-[0.00px] bottom-0 top-0 gap-5 my-auto absolute md:relative">
                      <div className="flex flex-col w-[36%] md:w-full gap-[27px]">
                        <Text size="8xl" as="p" className="!text-gray-800_01 !font-cormorant">
                          Sadhana award -third edition
                        </Text>
                        <Text size="lg" as="p" className="w-[98%] md:w-full !text-gray-800_01 leading-[35px]">
                          For best individual nutrition practitioner in Hyderabad 2024 ,organised in HyderabadSuccess
                          Stories: Thriving with Starlitesectetur. Amet eget diam nulla sed Lorem ipsum dolor sit amet
                          consectetur. ..Lorem ipsum dolor sit amet consectetur. “
                        </Text>
                      </div>
                      <Img
                        src="images/img_rectangle_26_495x712.png"
                        alt="image_two"
                        className="w-[53%] md:w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[558px] mt-[94px] relative">
                <div className="h-[558px] w-full bg-gray-600 absolute" />
                <div className="h-[422px] w-full md:h-auto top-[3.00px] right-0 left-0 m-auto absolute">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col items-end">
                      <div className="flex flex-col self-stretch items-start">
                        <footer className="self-stretch rotate-[180deg]" />
                        <Text size="2xl" as="p" className="mt-[-11px] ml-60 md:ml-0 !font-cormorant relative">
                          State level quality award
                        </Text>
                      </div>
                      <div className="flex flex-col self-start items-start mt-[-21px] gap-[7px] relative">
                        <Text size="2xl" as="p" className="!font-lato">
                          Visakhapatnam Center
                        </Text>
                        <div className="flex">
                          <a href="#">
                            <Text as="p" className="!font-lato">
                              +91 8500092020
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                    <Text
                      as="p"
                      className="w-[19%] md:w-full mt-[-39px] ml-[153px] md:ml-0 !font-lato relative leading-[27px]"
                    >
                      <>
                        #110, 1st Floor,
                        <br />
                        Dutt Island, Siripuram.
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-col justify-between items-center w-[79%] top-[16%] right-0 left-0 gap-5 m-auto absolute md:relative">
                    <div className="flex flex-col items-end w-[65%] md:w-full gap-[49px]">
                      <Img
                        src="images/img_settings_gray_800_02_14x36.svg"
                        alt="settings_five"
                        className="h-[14px] mr-[154px] md:mr-0"
                      />
                      <div className="flex flex-col self-stretch gap-2">
                        <div className="flex justify-between items-start w-[91%] md:w-full gap-5 flex-wrap">
                          <Heading as="h1" className="mb-3">
                            Address
                          </Heading>
                          <Heading as="h2">Contact Details</Heading>
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
                  <Text size="2xl" as="p" className="bottom-[14%] left-[11%] m-auto !font-lato absolute">
                    Visakhapatnam Center{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
