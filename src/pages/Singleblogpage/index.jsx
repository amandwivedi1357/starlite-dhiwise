import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Footer from "../../components/Footer";

export default function SingleblogpagePage() {
  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="w-full pl-[29px] mx-auto md:p-5 sm:pl-5 max-w-[1469px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch h-[825px] relative">
              <Img
                src="images/img_rectangle_29_1.png"
                alt="image"
                className="h-[825px] w-full bottom-[-111.06px] right-0 left-0 m-auto object-cover absolute"
              />
              <div className="w-full h-max pt-[37px] left-0 bottom-0 right-0 top-0 px-[37px] m-auto sm:pt-5 sm:px-5 bg-black-900_af absolute">
                <div className="flex flex-col items-center">
                  <header className="flex flex-col items-center justify-center w-[94%] md:w-full gap-7">
                    <Img src="images/img_television.svg" alt="image_one" className="h-[25px]" />
                    <Img src="images/img_svg.svg" alt="svg_one" className="self-end h-[20px] w-[20px]" />
                  </header>
                  <div className="self-stretch h-[730px] md:h-auto relative">
                    <div className="flex flex-col items-center w-[63%] mt-[205px] gap-4">
                      <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                        Discover Wellness Wisdom
                      </Text>
                      <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                        Explore Our Latest Blogs for Health
                      </Text>
                      <Text as="p" className="w-[48%] md:w-full !text-white-A700_b2 text-center leading-[35px]">
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
              </div>
            </div>
            <div className="self-stretch h-[677px] md:h-auto mt-6 relative">
              <div className="flex flex-col items-start w-full">
                <div className="flex md:flex-col self-stretch items-start">
                  <Img
                    src="images/img_leaf_2_png_103x151.png"
                    alt="leaf2png_one"
                    className="w-[10%] md:w-full mt-1.5 z-[1] object-cover"
                  />
                  <Img
                    src="images/img_image_7.png"
                    alt="imageseven_one"
                    className="h-[669px] w-full ml-[-122px] md:ml-0 relative object-cover"
                  />
                </div>
                <Text
                  size="6xl"
                  as="p"
                  className="mt-[-28px] ml-[100px] md:ml-0 !text-gray-800_01 !font-cormorant relative"
                >
                  Top trending diet’s of 2024
                </Text>
              </div>
              <Img
                src="images/img_leaf_2_png_103x151.png"
                alt="leaf2png_three"
                className="h-[103px] w-[11%] right-[15.00px] top-[11.00px] m-auto object-cover absolute"
              />
              <div className="flex bottom-[7%] left-[7%] m-auto absolute">
                <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                  WEIGHT MANAGEMENT
                </Text>
              </div>
              <div className="flex justify-center w-[86%] top-[7%] right-0 left-0 m-auto absolute">
                <div className="w-full">
                  <div className="py-[13px] bg-red-50_1e rounded-[10px]">
                    <Img
                      src="images/img_rectangle_26_598x1208.png"
                      alt="image_two"
                      className="h-[457px] w-full md:h-auto object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <Text
                size="6xl"
                as="p"
                className="bottom-[3.20px] right-[21%] m-auto !text-gray-800_01 !font-cormorant absolute"
              >
                Recent Articles
              </Text>
            </div>
            <div className="flex md:flex-col justify-between items-start w-[84%] md:w-full mt-2.5 gap-5">
              <div className="flex flex-col w-[67%] md:w-full gap-9">
                <div className="flex items-center gap-[9px]">
                  <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
                  <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                    ARTICLE - 5MIN READ
                  </Text>
                </div>
                <Text as="p" className="!text-gray-800_01 leading-[25px]">
                  It is that time of the year when you and everyone around you is making resolutions to stay fit, lose
                  weight & eat clean. There are so many options out there for you to try, it can get quite confusing.
                  Here are some basic facts about the top trending diets in 2022.
                </Text>
                <div>
                  <div className="flex flex-col gap-8">
                    <Text as="p" className="!text-gray-800_01 leading-[25px]">
                      <>
                        1. Keto Diet:
                        <br />A classic ketogenic diet primarily consists of high fats, moderate proteins, and very low
                        carbohydrates where fat makes up more than 75% of the macronutrient distribution. Consuming oily
                        and fatty foods at random without calculating the intake and requirements can lead to serious
                        liver conditions &amp; heart issues. In the short term this diet gives great results, but the
                        possible risks associated with it may outweigh the benefits.
                      </>
                    </Text>
                    <div className="h-[250px] md:h-auto relative">
                      <Img
                        src="images/img_settings_gray_800_02.svg"
                        alt="settings_one"
                        className="h-[6px] mb-[33px] mr-[126px] md:mr-0"
                      />
                      <Text
                        as="p"
                        className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-800_01 leading-[25px] absolute"
                      >
                        <>
                          2. Intermittent fasting: <br />
                          Intermittent fasting (IF) is a pattern that alternates between periods of fasting and
                          <br />
                          eating. The concept is that when you fast, human growth hormone levels go up and insulin
                          levels go down. Your body’s cells also change the expression of genes and initiate vital
                          repair processes at the cellular level. Intermittent fasting when done under professional
                          guidance, can boost metabolism
                          <br />
                          while helping you eat fewer calories. It’s a very effective way to lose weight and belly fat.
                          However, keep in mind that the main reason for its success is that IF helps you eat fewer
                          calories overall. If you binge and eat massive amounts during your eating periods, you may not
                          see any results at all
                        </>
                      </Text>
                    </div>
                    <Text as="p" className="!text-gray-800_01 leading-[25px]">
                      <>
                        3. MIND Diet:
                        <br />
                        The MIND diet is a combination of the traditional Mediterranean diet and the DASH diet with an
                        emphasis on cognitive brain health.  MIND is an acronym for “Mediterranean-DASH Intervention for
                        Neurodegenerative Delay”. The diet plan is
                        <br />
                        intended to promote a healthy brain, including lowering the risk of Alzheimer’s
                        <br />
                        disease. The focus is on reducing processed foods to cut entry of sodium, eat more plant based
                        foods and calculated amount of healthy fat while avoiding red meat. The MIND diet encourages the
                        consumption of all kinds of vegetables, fruits, nuts, olive oil, whole grains, fish, beans,
                        poultry and a moderate amount of wine his therapeutic diet has more pros than cons and shows
                        results when followed long term, under professional guidance.
                      </>
                    </Text>
                    <Text as="p" className="!text-gray-800_01 leading-[25px]">
                      <>
                        4. Vegan:
                        <br />
                        Vegan diet refers to consuming only plant-based food items like leafy vegetables, millets, nuts,
                        and fruits. Veganism denounces the consumption of animal-based food items like meat, eggs, fish,
                        milk and dairy products.It is rich in fibre, which helps in digestion, keeps sugars &amp;
                        cholesterol under control and increases the metabolic rate. And it is has a huge positive impact
                        on the environment.However, a vegan diet lacks nutrients found primarily in animal products like
                        Vitamin B12, Calcium, Vitamin D, and Omega 3 fatty acids. Therefore supplementation under
                        professional guidance will be required.
                      </>
                    </Text>
                    <Text as="p" className="!text-gray-800_01 leading-[25px]">
                      <>
                        5. Flexitarian Diet :<br />
                        The Flexitarian Diet is a semi-vegetarian pattern of eating that advises less meat and more
                        plant-based foods. There are no specific rules, making it a convenient option for people who are
                        looking to cut back on animal products. It’s more a lifestyle than a diet. Like all diets, it
                        has the potential to be restrictive. This really depends on WHY you’re eating less meat, and
                        your relationship with food. If you’re a flexitarian, you still need to be mindful of your B12
                        and iron levels (both essential for energy), nutrients that are found in meat and fish.
                      </>
                    </Text>
                    <Text as="p" className="!text-gray-800_01 leading-[25px]">
                      <>
                        6. Intuitive Eating:
                        <br />
                        With intuitive eating, people are encouraged to make peace with food by not labelling it as
                        “good” or “bad” food groups, and to listen to physical cues for hunger and fullness. It means
                        tapping into your body’s intuitive ability to tell you what your body needs without emphasis on
                        calorie in vs calorie out. Cons of intuitive eating are that it can take time to tune into your
                        body and get the balance right. Sensing whether you are full or hungry requires tuning into your
                        body’s signals; this can be very difficult for some people. Research shows that intuitive eating
                        is good for maintaining your current weight,
                        <br />
                        but intuitive eating alone probably won’t help you lose weight unless you pair it with an
                        exercise regimen.
                      </>
                    </Text>
                    <Text as="p" className="!text-gray-800_01 leading-[25px]">
                      Make a wise choice based on your lifestyle, your health goals, accessibility to foods and your
                      traditional eating habits. Your results will be more achievable &amp; sustainable with
                      professional guidance from an experienced Nutrition Professional.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[29%] md:w-full mt-1 gap-[15px]">
                <div className="flex items-start gap-2.5 p-[5px] border-blue_gray-100_e0 border border-solid bg-white-A700_01 flex-1 rounded-[10px]">
                  <Img
                    src="images/img_rectangle_26_107x156.png"
                    alt="nutrition_one"
                    className="w-[50%] rounded-bl-[10px] rounded-tl-[10px] object-cover"
                  />
                  <div className="flex flex-col w-[50%] mt-[13px] gap-1.5">
                    <div className="flex">
                      <Text size="xs" as="p" className="!text-deep_orange-800 tracking-[1.00px]">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[21px]">
                      Cold pressed oil- yay or nay !
                    </Text>
                  </div>
                </div>
                <div className="flex items-start gap-[11px] p-[5px] border-blue_gray-100_e0 border border-solid bg-white-A700_01 flex-1 rounded-[10px]">
                  <Img
                    src="images/img_rectangle_22211.png"
                    alt="image"
                    className="w-[50%] rounded-bl-[10px] rounded-tl-[10px] object-cover"
                  />
                  <div className="flex flex-col w-[50%] mt-[13px] gap-1.5">
                    <div className="flex">
                      <Text size="xs" as="p" className="!text-deep_orange-800 tracking-[1.00px]">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="xl" as="p" className="!text-gray-800_01 !font-cormorant leading-[21px]">
                      Do you require supplement&#39;s?
                    </Text>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-[5px] border-blue_gray-100_e0 border border-solid bg-white-A700_01 flex-1 rounded-[10px]">
                  <Img
                    src="images/img_rectangle_22211_107x156.png"
                    alt="image"
                    className="w-[49%] rounded-bl-[10px] rounded-tl-[10px] object-cover"
                  />
                  <div className="flex flex-col items-start mt-[13px] gap-[7px]">
                    <div className="flex">
                      <Text size="xs" as="p" className="!text-deep_orange-800 tracking-[1.00px]">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="xl" as="p" className="!text-gray-800_01 !font-cormorant">
                      Milk is healthy choice?
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch mt-[170px]">
              <div>
                <div className="h-[470px] md:h-auto relative">
                  <Img
                    src="images/img_rectangle_22066_470x1440.png"
                    alt="image_three"
                    className="h-[470px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center justify-center w-[88%] h-max gap-9 left-0 bottom-0 right-0 top-0 px-14 py-[101px] m-auto md:p-5 bg-black-900_96 absolute rounded">
                    <Text size="11xl" as="p" className="mt-[11px] !font-cormorant text-center">
                      Interested in Health & Wellness ?
                    </Text>
                    <Button
                      color="orange_800_01"
                      size="xl"
                      shape="round"
                      className="self-end sm:px-5 tracking-[2.00px] uppercase font-medium min-w-[275px]"
                    >
                      contact us today
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Footer className="self-stretch" />
          </div>
        </div>
      </div>
    </>
  );
}
