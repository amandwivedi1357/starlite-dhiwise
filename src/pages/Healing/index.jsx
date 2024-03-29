import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Footer1 from "../../components/Footer1";

export default function HealingPage() {
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
              <Img src="images/img_rectangle_29_4.png" alt="image" className="h-[825px] w-full object-cover" />
              <div className="h-[828px] w-full left-0 bottom-0 right-0 top-0 p-[46px] m-auto md:p-5 bg-black-900_af absolute">
                <div className="flex flex-col items-center w-[68%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
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
                  <Img src="images/img_television.svg" alt="image_one" className="h-[29px] ml-11 md:ml-0" />
                  <div className="flex self-stretch justify-center mt-[-26px] p-11 md:p-5 relative border-white-A700_3d border border-solid rounded-[23px]">
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
            <div className="self-stretch h-[2334px] mt-[27px] relative">
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-col items-end z-[1]">
                  <div className="flex flex-col self-stretch items-end">
                    <Img
                      src="images/img_leaf_2_png_103x151.png"
                      alt="leaf2png_one"
                      className="w-[11%] mr-3.5 md:mr-0 z-[1] object-cover"
                    />
                    <div className="self-stretch h-[612px] md:h-auto mt-[-83px] relative">
                      <Img
                        src="images/img_image_7.png"
                        alt="imageseven_one"
                        className="h-[612px] w-full object-cover"
                      />
                      <div className="flex flex-col items-center w-[72%] gap-[27px] top-[10%] right-0 left-0 m-auto absolute">
                        <div className="flex">
                          <div className="flex flex-col items-center gap-[25px]">
                            <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                              Healing Consultation Programs
                            </Text>
                            <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                              HEALING
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col self-stretch gap-[25px]">
                          <Text size="lg" as="p" className="!text-gray-800_e5 text-center leading-[29px]">
                            Healing is a multifaceted process that involves restoring balance, resilience, and wholeness
                            to the body, mind, and spirit. It encompasses various approaches, including physical,
                            emotional, and spiritual modalities, aimed at alleviating pain, trauma, or illness. Healing
                            involves addressing the root causes of imbalances and supporting the body&#39;s natural
                            ability to heal itself. It can take place on different levels, from the physical treatment
                            of ailments to the emotional release of past traumas.{" "}
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_e5 text-center leading-[29px]">
                            Healing often involves practices such as meditation, mindfulness, energy work, and
                            therapeutic interventions tailored to individual needs. Ultimately, healing is about
                            achieving a state of harmony, well-being, and inner peace, allowing individuals to
                            experience greater vitality and connection to themselves and the world around them.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_leaf_2_png_77x102.png"
                    alt="leaf2png_three"
                    className="w-[7%] mt-[-7px] z-[1] relative object-cover"
                  />
                </div>
                <div className="flex flex-col items-start mt-[-151px] relative">
                  <div className="flex flex-col self-stretch items-center justify-center gap-[59px] px-14 py-[84px] md:p-5 sm:gap-[29px] bg-red-50_59">
                    <div className="flex justify-center w-[93%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <Img
                          src="images/img_rectangle_22175_1.png"
                          alt="image_two"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[41px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Traditional Therapies
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            In order to promote holistic healing and well-being, our alternative health services include
                            a range of traditional therapies, such as acupuncture, acupressure, Su-Jok, homeopathy,
                            yoga, and Ayurvedic treatments.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-[93%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <div className="flex flex-col items-start w-[50%] md:w-full mt-[31px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Energy Healing
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Holistic approaches to healing are provided by Reiki, Tibetan, and Balinese healing
                            techniques. Our practitioners offer energy healing sessions that are hands-on and encourage
                            emotional balance, stress relief, and relaxation.
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_22201_1.png"
                          alt="image_three"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center w-[93%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <Img
                          src="images/img_rectangle_22202_1.png"
                          alt="image_four"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[39px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Chiropractic Care
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Musculoskeletal health is the main objective of chiropractic care. By realigning the body
                            and restoring function, our chiropractors offer customised treatment plans that enhance
                            general health and reduce pain.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-[93%] md:w-full">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <div className="flex flex-col items-start w-[44%] md:w-full mt-0.5">
                          <Img
                            src="images/img_group_50437_orange_800_23x43.svg"
                            alt="image_five"
                            className="self-end h-[23px]"
                          />
                          <Text size="3xl" as="p" className="mt-1.5 !text-gray-800_01">
                            Naturopathic Medicine
                          </Text>
                          <Text size="lg" as="p" className="mt-3 !text-gray-800_01 leading-[29px]">
                            Naturopathic medicine combines natural therapies with contemporary science to enhance health
                            and well-being. Our naturopathic doctors provide individualised treatment regimens that
                            incorporate botanical medication, diet, and lifestyle modifications.
                          </Text>
                        </div>
                        <div className="flex justify-center w-[37%] md:w-full">
                          <div className="flex flex-col items-start w-full">
                            <Img
                              src="images/img_globe.svg"
                              alt="globe_one"
                              className="h-[25px] ml-[137px] md:ml-0 z-[1]"
                            />
                            <Img
                              src="images/img_rectangle_22203_1.png"
                              alt="image_six"
                              className="h-[264px] w-full md:h-auto mt-[-24px] relative object-cover rounded-[10px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-[93%] md:w-full mb-[17px]">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <Img
                          src="images/img_rectangle_22204_3.png"
                          alt="image_seven"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[37px] gap-3.5">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Eastern & Western Detox
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Detoxification improves overall health and vitality. Our detox programs use both Eastern and
                            Western detox treatments, such as dietary changes, herbal therapy, and lifestyle
                            modifications.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_leaf_2_png_103x150.png"
                    alt="leaf2png_five"
                    className="w-[10%] mt-[-70px] relative object-cover"
                  />
                </div>
              </div>
              <Img
                src="images/img_leaf_2_png_103x151.png"
                alt="leaf2png_seven"
                className="h-[103px] w-[11%] left-[-29.00px] top-[0.00px] m-auto object-cover absolute"
              />
            </div>
            <div className="self-stretch h-[847px] md:h-auto mt-[3px] relative">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col self-stretch items-end">
                  <div className="self-stretch h-[395px] bg-red-50" />
                  <Img
                    src="images/img_leaf_2_png_87x96.png"
                    alt="leaf2png_nine"
                    className="w-[7%] mt-[-30px] relative object-cover"
                  />
                </div>
                <div className="flex md:flex-col w-[56%] md:w-full mt-[-167px] gap-[54px] relative">
                  <div className="flex flex-col items-center w-full p-[49px] md:p-5 bg-white-A700_01 shadow-lg rounded">
                    <Img
                      src="images/img_settings_gray_800_01_80x80.svg"
                      alt="ibs_care_plan"
                      className="h-[80px] w-[80px]"
                    />
                    <Text size="6xl" as="p" className="mt-[18px] !text-gray-800_01 !font-cormorant text-center">
                      IBS Care Plan
                    </Text>
                    <Text as="p" className="mt-[43px] !text-gray-800_e5">
                      3 sessions
                    </Text>
                    <Text as="p" className="mt-5 !text-gray-800_e5">
                      Cupping
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Homeopathy
                    </Text>
                    <Text as="p" className="mt-[17px] !text-gray-800_e5">
                      Auricular Intervention
                    </Text>
                    <Button
                      size="xl"
                      shape="round"
                      className="mt-[69px] mb-[21px] sm:px-5 tracking-[1.68px] uppercase border-orange-800 border border-solid min-w-[189px] !rounded-sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                  <div className="flex flex-col items-center w-full p-[31px] sm:p-5 bg-white-A700_01 shadow-lg rounded">
                    <Img
                      src="images/img_settings_gray_800_01_80x80.svg"
                      alt="settings_one"
                      className="h-[80px] w-[80px] mt-[18px]"
                    />
                    <Text size="6xl" as="p" className="mt-6 !text-gray-800_01 !font-cormorant text-center">
                      Sciatica Pain Management
                    </Text>
                    <Text as="p" className="mt-[37px] !text-gray-800_e5">
                      3 sessions
                    </Text>
                    <Text as="p" className="mt-5 !text-gray-800_e5">
                      Cupping
                    </Text>
                    <div className="flex flex-col items-center w-[63%] md:w-full mt-[19px] mb-[39px]">
                      <Text as="p" className="!text-gray-800_e5">
                        Homeopathy
                      </Text>
                      <Text as="p" className="mt-[17px] !text-gray-800_e5">
                        Auricular Intervention
                      </Text>
                      <Button
                        size="xl"
                        shape="round"
                        className="w-full mt-[69px] sm:px-5 tracking-[1.68px] uppercase border-orange-800 border border-solid !rounded-sm"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[669px] w-full md:h-auto top-[0.00px] right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_image_8_329x641.png"
                  alt="imageeight_one"
                  className="h-[669px] w-full object-cover"
                />
                <div className="flex flex-col items-center gap-[11px] top-[12%] right-0 left-0 m-auto absolute">
                  <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                    Healing Programs
                  </Text>
                  <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                    OUR PROGRAMS
                  </Text>
                </div>
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
            <Footer1 className="self-stretch mt-[191px]" />
          </div>
        </div>
      </div>
    </>
  );
}
