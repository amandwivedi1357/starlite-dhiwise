import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function NutritionPage() {
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
              <Img src="images/img_rectangle_29_2.png" alt="image" className="h-[825px] w-full object-cover" />
              <div className="h-[825px] w-full md:h-auto left-0 bottom-0 right-0 top-0 p-[47px] m-auto md:p-5 bg-black-900_af absolute">
                <div className="flex flex-col items-center w-[93%] mt-[9px]">
                  <div className="flex md:flex-col self-stretch justify-center items-end">
                    <Img src="images/img_television.svg" alt="image_one" className="h-[37px] md:w-full mb-[18px]" />
                    <div className="flex justify-between md:self-stretch ml-96 gap-5 md:ml-0 flex-1 flex-wrap">
                      <a href="COMPANY" target="_blank" rel="noreferrer">
                        <Text size="s" as="p" className="!text-deep_orange-300 tracking-[1.68px] uppercase">
                          COMPANY
                        </Text>
                      </a>
                      <a href="SERVICES" target="_blank" rel="noreferrer">
                        <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                          SERVICES
                        </Text>
                      </a>
                      <a href="media" target="_blank" rel="noreferrer">
                        <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                          media
                        </Text>
                      </a>
                      <a href="connect" target="_blank" rel="noreferrer">
                        <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                          connect
                        </Text>
                      </a>
                    </div>
                    <Img
                      src="images/img_svg.svg"
                      alt="svg_one"
                      className="h-[20px] w-[20px] md:w-full ml-[415px] md:ml-0"
                    />
                  </div>
                  <Text
                    size="12xl"
                    as="p"
                    className="mt-[167px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                  >
                    Nutrition
                  </Text>
                  <Text
                    size="12xl"
                    as="p"
                    className="mt-[11px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                  >
                    Consultation Programs
                  </Text>
                  <Text as="p" className="w-[33%] md:w-full mt-[17px] !text-white-A700_b2 text-center leading-[35px]">
                    Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                  </Text>
                </div>
                <div className="h-[730px] w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700_3d border border-solid absolute rounded-[23px]" />
              </div>
            </div>
            <div className="self-stretch h-[3618px] md:h-auto mt-[30px] relative">
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
                            Nutrition Consultation Programs
                          </Text>
                          <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                            NUTRITION
                          </Text>
                        </div>
                      </div>
                      <Text size="lg" as="p" className="!text-gray-800_e5 text-center leading-[29px]">
                        <>
                          The nutrition program aims to promote healthy eating habits and overall well-being by
                          providing personalized dietary guidance and support. Through a combination of nutritional
                          education, meal planning, and lifestyle modifications, participants learn to make informed
                          choices about their diet and develop sustainable habits for long-term health. <br />
                          <br /> The program emphasizes the importance of balanced nutrition, portion control, and
                          mindful eating to achieve individual health goals, whether it&#39;s weight management,
                          improved energy levels, or disease prevention. With the support of qualified nutrition
                          professionals, participants receive personalized recommendations tailored to their unique
                          needs, empowering them to make positive changes towards a healthier lifestyle.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-[-81px] p-2.5 z-[1] relative bg-red-50_59">
                  <div className="flex flex-col items-end w-[94%] md:w-full mt-[74px] mb-28">
                    <div className="flex flex-col w-[93%] md:w-full gap-[60px] sm:gap-[30px]">
                      <div>
                        <div className="flex md:flex-col justify-between items-center gap-5">
                          <Img
                            src="images/img_rectangle_22175.png"
                            alt="image_two"
                            className="w-[37%] md:w-full object-cover rounded-[10px]"
                          />
                          <div className="flex flex-col items-start w-[56%] md:w-full gap-3">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              Weight Management
                            </Text>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              We understand that managing one&#39;s weight is a complex process that is unique to each
                              person, regardless of age or gender. Our personalized diet programs put an emphasis on
                              long-term weight loss while attending to individual requirements and objectives to
                              guarantee healthy results for men, women, kids, and teens.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <div className="flex flex-col items-start w-[56%] md:w-full mt-[29px] gap-3.5">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              Diabetic Care
                            </Text>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              Managing diabetes necessitates a complex strategy that combines dietary changes, lifestyle
                              changes, and individualized coaching. Our specialized nutrition programs are designed to
                              help people with diabetes control their blood sugar levels, minimize their dependency on
                              medication, and improve their general quality of life.
                            </Text>
                          </div>
                          <Img
                            src="images/img_rectangle_22201.png"
                            alt="image_three"
                            className="w-[37%] md:w-full object-cover rounded-[10px]"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <Img
                            src="images/img_rectangle_22202.png"
                            alt="image_four"
                            className="w-[37%] md:w-full object-cover rounded-[10px]"
                          />
                          <div className="flex flex-col items-start w-[56%] md:w-full mt-[37px] gap-3.5">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              Heart Health
                            </Text>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              A healthy heart is the foundation of well-being. Our nutrition experts promote
                              cardiovascular health through targeted dietary recommendations, cholesterol management,
                              and lifestyle interventions, resulting in long-term heart health and vitality.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <div className="flex flex-col items-start w-[56%] md:w-full mt-[31px] gap-3">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              Thyroid Support
                            </Text>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              Thyroid disorders can impair metabolic function and overall health. Our tailored nutrition
                              plans are designed to support thyroid function, regulate hormone levels, and alleviate
                              symptoms associated with thyroid imbalances, ensuring our clients&#39; optimal well-being.
                            </Text>
                          </div>
                          <Img
                            src="images/img_rectangle_22203.png"
                            alt="image_five"
                            className="w-[37%] md:w-full object-cover rounded-[10px]"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-col justify-between items-center gap-5">
                          <Img
                            src="images/img_rectangle_22204.png"
                            alt="image_six"
                            className="w-[37%] md:w-full object-cover rounded-[10px]"
                          />
                          <div className="flex flex-col items-start w-[56%] md:w-full gap-[13px]">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              PCOS / PCOD Support
                            </Text>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovary Disorder) treatment focuses on
                              managing symptoms and addressing underlying hormonal imbalances. Common approaches include
                              lifestyle changes such as diet and exercise, medication to regulate menstrual cycles and
                              hormone levels, and in some cases, fertility treatments.{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <div className="flex flex-col items-start w-[56%] md:w-full mt-[31px] gap-3">
                            <Text size="3xl" as="p" className="!text-gray-800_01">
                              Digestive Health{" "}
                            </Text>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              Overall health and immune system performance depend on a gut that is in balance. Through
                              dietary adjustments, probiotic supplements, and lifestyle interventions, our nutrition
                              programs place a high priority on digestive health, promoting gut integrity and microbial
                              balance.
                            </Text>
                          </div>
                          <Img
                            src="images/img_rectangle_22240.png"
                            alt="image_seven"
                            className="w-[37%] md:w-full object-cover rounded-[10px]"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <div className="h-[264px] w-[37%] md:w-full md:h-auto relative">
                            <Img
                              src="images/img_rectangle_22204_264x455.png"
                              alt="image_eight"
                              className="h-[264px] w-full object-cover rounded-[10px]"
                            />
                            <Img
                              src="images/img_group_50437_gray_800_01.svg"
                              alt="image_nine"
                              className="h-[34px] right-[24.00px] top-[9.36px] m-auto absolute"
                            />
                          </div>
                          <div className="flex flex-col w-[56%] md:w-full mt-[9px] gap-3.5">
                            <div className="flex justify-between items-start w-[45%] md:w-full gap-5">
                              <Text size="3xl" as="p" className="!text-gray-800_01">
                                Prenatal Nutrition
                              </Text>
                              <Img
                                src="images/img_group_50437_gray_800_01.svg"
                                alt="image_ten"
                                className="h-[34px] mb-[23px]"
                              />
                            </div>
                            <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                              Nutrition is critical in maintaining a healthy pregnancy and fetal growth. Our prenatal
                              nutrition specialists offer tailored advice and assistance, enabling pregnant moms to make
                              informed nutritional decisions for optimal maternal and fetal health.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col self-stretch justify-between items-center mt-[60px] gap-5">
                      <div className="flex flex-col self-end w-[59%] md:w-full gap-[35px]">
                        <div className="flex flex-col items-start ml-[90px] gap-3.5 md:ml-0">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Geriatric Nutrition
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            Our dietary requirements change as we become older. Our geriatric nutrition programs are
                            designed to meet the special needs of senior citizens, encouraging energy, mental clarity,
                            and general well-being as they age.
                          </Text>
                        </div>
                        <div className="flex justify-between items-start w-[53%] md:w-full gap-5">
                          <Img
                            src="images/img_leaf_2_png_103x151.png"
                            alt="leaf2png_three"
                            className="w-[37%] mb-3.5 object-cover"
                          />
                          <Img src="images/img_group_50437_orange_800.svg" alt="image_eleven" className="h-[29px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-[34%] md:w-full gap-[17px]">
                        <Img
                          src="images/img_rectangle_22240_264x455.png"
                          alt="image_twelve"
                          className="h-[264px] w-full md:h-auto object-cover rounded-[10px]"
                        />
                        <Img src="images/img_globe.svg" alt="globe_one" className="h-[32px] ml-[143px] md:ml-0" />
                      </div>
                    </div>
                    <div className="flex justify-end w-[93%] md:w-full mt-[9px]">
                      <div className="flex md:flex-col justify-between items-start w-full gap-5">
                        <Img
                          src="images/img_rectangle_22204_1.png"
                          alt="image_thirteen"
                          className="w-[37%] md:w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start w-[56%] md:w-full mt-[39px] gap-3">
                          <Text size="3xl" as="p" className="!text-gray-800_01">
                            Immune Support
                          </Text>
                          <Text size="lg" as="p" className="!text-gray-800_01 leading-[29px]">
                            A robust immune system is key to warding off illness and infection. Our immunity-boosting
                            nutrition protocols focus on nutrient-dense foods, targeted supplementation, and lifestyle
                            strategies to enhance immune resilience and overall health.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_leaf_2_png_77x102.png"
                alt="leaf2png_five"
                className="h-[77px] w-[7%] right-[0.00px] top-[17%] m-auto object-cover absolute"
              />
              <Img
                src="images/img_leaf_2_png_103x151.png"
                alt="leaf2png_seven"
                className="h-[103px] w-[11%] left-[-29.00px] top-[0.00px] m-auto object-cover absolute"
              />
            </div>
            <div className="self-stretch h-[916px] md:h-auto relative">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col self-stretch items-end">
                  <Img
                    src="images/img_leaf_2_png_87x96.png"
                    alt="leaf2png_nine"
                    className="w-[7%] z-[1] object-cover"
                  />
                  <div className="self-stretch h-[395px] mt-[-18px] relative bg-red-50" />
                </div>
                <div className="flex md:flex-col w-[56%] md:w-full mt-[-110px] gap-[54px] relative">
                  <div className="flex flex-col items-center justify-end p-[42px] md:p-5 bg-white-A700_01 shadow-lg rounded">
                    <Text size="6xl" as="p" className="mt-[108px] !text-gray-800_01 !font-cormorant text-center">
                      PCOD/PCOS Care Plan
                    </Text>
                    <Text as="p" className="mt-[41px] !text-gray-800_e5">
                      4 weeks / 8 weeks / 12 weeks
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Detailed health assessment
                    </Text>
                    <Text as="p" className="mt-5 !text-gray-800_e5">
                      Monitoring & evaluation
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Weekly diet plan
                    </Text>
                    <Button
                      size="xl"
                      shape="round"
                      className="mt-[68px] mb-7 sm:px-5 tracking-[1.68px] uppercase border-orange-800 border border-solid min-w-[189px] !rounded-sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-end p-[34px] sm:p-5 bg-white-A700_01 shadow-lg rounded">
                    <Text size="6xl" as="p" className="mt-[117px] !text-gray-800_01 !font-cormorant text-center">
                      Weight Management Plan
                    </Text>
                    <Text as="p" className="mt-[39px] !text-gray-800_e5">
                      8 weeks / 12 weeks
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Detailed health assessment
                    </Text>
                    <Text as="p" className="mt-5 !text-gray-800_e5">
                      Monitoring & evaluation
                    </Text>
                    <Text as="p" className="mt-[19px] !text-gray-800_e5">
                      Weekly diet plan
                    </Text>
                    <Button
                      size="xl"
                      shape="round"
                      className="mt-[68px] mb-9 sm:px-5 tracking-[1.68px] uppercase border-orange-800 border border-solid min-w-[189px] !rounded-sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="h-[669px] w-[89%] md:h-auto left-[0.00px] top-[8%] m-auto absolute">
                <Img
                  src="images/img_image_8_329x641.png"
                  alt="imageeight_one"
                  className="h-[669px] w-full object-cover"
                />
                <div className="flex flex-col items-center gap-[9px] right-[29%] top-[13%] m-auto absolute">
                  <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                    Nutrition Programs
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
            <footer className="self-stretch mt-[191px]">
              <div>
                <div className="h-[555px] relative">
                  <Img
                    src="images/img_rectangle_22058_2.png"
                    alt="image_fourteen"
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
