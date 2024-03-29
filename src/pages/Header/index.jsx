import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Footer1 from "../../components/Footer1";

export default function HeaderPage() {
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
                className="h-[825px] w-full bottom-[-98.00px] right-0 left-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-center w-full h-max pb-[260px] left-0 bottom-0 right-0 top-0 m-auto md:pb-5 bg-black-900_af absolute">
                <header className="flex self-stretch justify-center items-center p-[11px] bg-black-900_d8">
                  <div className="flex md:flex-col justify-center items-center w-[87%] md:w-full mb-[26px]">
                    <Img src="images/img_television.svg" alt="image_one" className="h-[26px] md:w-full" />
                    <ul className="flex ml-[373px] gap-[25px] md:ml-0 flex-wrap">
                      <li>
                        <a href="#" className="self-end cursor-pointer hover:text-deep_orange-300">
                          <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                            COMPANY
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end cursor-pointer hover:text-deep_orange-300">
                          <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                            SERVICES
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end">
                          <Text size="s" as="p" className="!text-deep_orange-300 tracking-[1.68px] uppercase">
                            media
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end cursor-pointer hover:text-deep_orange-300">
                          <Text size="s" as="p" className="tracking-[1.68px] uppercase">
                            connect
                          </Text>
                        </a>
                      </li>
                    </ul>
                    <Img
                      src="images/img_svg.svg"
                      alt="svg_one"
                      className="h-[20px] w-[20px] md:w-full mb-1.5 ml-[410px] md:ml-0"
                    />
                  </div>
                </header>
                <div className="flex flex-col items-center mt-[218px] gap-[15px]">
                  <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                    Discover Wellness Wisdom
                  </Text>
                  <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                    Explore Our Latest Blogs for Health
                  </Text>
                </div>
                <Text
                  as="p"
                  className="w-[29%] md:w-full mt-[17px] md:p-5 !text-white-A700_b2 text-center leading-[35px]"
                >
                  Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                </Text>
              </div>
            </div>
            <div className="self-stretch h-[924px] mt-6 relative">
              <div className="h-[669px] w-full md:h-auto pl-[29px] top-[0.00px] right-0 left-0 m-auto sm:pl-5 absolute">
                <div className="flex md:flex-col justify-center items-start w-full">
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
                <div className="flex md:flex-col justify-between items-start w-[74%] right-[15.00px] top-[11.00px] gap-5 m-auto absolute md:relative">
                  <div className="flex flex-col items-center mt-[78px] gap-[25px]">
                    <Text size="10xl" as="p" className="!text-gray-800_02 !font-cormorant text-center">
                      Engage with Our Enlightening Blogs
                    </Text>
                    <Text size="s" as="p" className="!text-deep_orange-800 tracking-[2.00px]">
                      RECENT ARTICLES
                    </Text>
                  </div>
                  <Img
                    src="images/img_leaf_2_png_103x151.png"
                    alt="leaf2png_three"
                    className="w-[14%] md:w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center w-[86%] bottom-[0.00px] right-0 left-0 m-auto absolute">
                <div className="w-full">
                  <div className="p-4 bg-red-50_1e shadow-md rounded-[10px]">
                    <Img
                      src="images/img_rectangle_26_598x1208.png"
                      alt="image_two"
                      className="h-[598px] w-full md:h-auto object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex self-start mt-11">
              <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                WEIGHT MANAGEMENT
              </Text>
            </div>
            <Text size="6xl" as="p" className="self-start mt-[13px] !text-gray-800_02 !font-cormorant">
              Top trending diet’s of 2024
            </Text>
            <div className="flex self-start items-center mt-2.5 gap-[9px]">
              <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
              <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                ARTICLE - 5MIN READ
              </Text>
            </div>
            <Text as="p" className="w-[86%] md:w-full mt-[37px] !text-gray-800_01 leading-[25px]">
              It is that time of the year when you and everyone around you is making resolutions to stay fit, lose
              weight & eat clean. There are so many options out there for you to try, it can get quite confusing. Here
              are some basic facts about the top trending diets in 2022.
            </Text>
            <div className="h-[100px] w-[86%] md:h-auto mt-10 relative">
              <Img src="images/img_settings_gray_800_02.svg" alt="settings_one" className="h-[7px] mt-[7px]" />
              <Text
                as="p"
                className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-800_01 leading-[25px] absolute"
              >
                <>
                  1. Keto Diet:
                  <br />A classic ketogenic diet primarily consists of high fats, moderate proteins, and very low
                  carbohydrates where fat makes up more than 75% of the macronutrient distribution. Consuming oily and
                  fatty foods at random without calculating the intake and requirements can lead to serious liver
                  conditions &amp; heart issues. In the short term this diet gives great results, but the possible risks
                  associated with it may outweigh the benefits.
                </>
              </Text>
            </div>
            <Text as="p" className="w-[86%] md:w-full mt-[23px] !text-gray-800_01 leading-[25px]">
              <>
                2. Intermittent fasting: <br />
                Intermittent fasting (IF) is a pattern that alternates between periods of fasting and
                <br />
                eating. The concept is that when you fast, human growth hormone levels go up and insulin levels go down.
                Your body’s cells also change the expression of genes and initiate vital repair processes at the
                cellular level. Intermittent fasting when done under professional guidance, can boost metabolism
                <br />
                while helping you eat fewer calories. It’s a very effective way to lose weight and belly fat. However,
                keep in mind that the main reason for its success is that IF helps you eat fewer calories overall. If
                you binge and eat massive amounts during your eating periods, you may not see any results at all
              </>
            </Text>
            <Text as="p" className="w-[86%] md:w-full mt-10 !text-gray-800_01 leading-[25px]">
              <>
                3. MIND Diet:
                <br />
                The MIND diet is a combination of the traditional Mediterranean diet and the DASH diet with an emphasis
                on cognitive brain health.  MIND is an acronym for “Mediterranean-DASH Intervention for
                Neurodegenerative Delay”. The diet plan is
                <br />
                intended to promote a healthy brain, including lowering the risk of Alzheimer’s
                <br />
                disease. The focus is on reducing processed foods to cut entry of sodium, eat more plant based foods and
                calculated amount of healthy fat while avoiding red meat. The MIND diet encourages the consumption of
                all kinds of vegetables, fruits, nuts, olive oil, whole grains, fish, beans, poultry and a moderate
                amount of wine his therapeutic diet has more pros than cons and shows results when followed long term,
                under professional guidance.
              </>
            </Text>
            <Text as="p" className="w-[86%] md:w-full mt-10 !text-gray-800_01 leading-[25px]">
              <>
                4. Vegan:
                <br />
                Vegan diet refers to consuming only plant-based food items like leafy vegetables, millets, nuts, and
                fruits. Veganism denounces the consumption of animal-based food items like meat, eggs, fish, milk and
                dairy products.It is rich in fibre, which helps in digestion, keeps sugars &amp; cholesterol under
                control and increases the metabolic rate. And it is has a huge positive impact on the
                environment.However, a vegan diet lacks nutrients found primarily in animal products like Vitamin B12,
                Calcium, Vitamin D, and Omega 3 fatty acids. Therefore supplementation under professional guidance will
                be required.
              </>
            </Text>
            <Text as="p" className="w-[86%] md:w-full mt-10 !text-gray-800_01 leading-[25px]">
              <>
                5. Flexitarian Diet :<br />
                The Flexitarian Diet is a semi-vegetarian pattern of eating that advises less meat and more plant-based
                foods. There are no specific rules, making it a convenient option for people who are looking to cut back
                on animal products. It’s more a lifestyle than a diet. Like all diets, it has the potential to be
                restrictive. This really depends on WHY you’re eating less meat, and your relationship with food. If
                you’re a flexitarian, you still need to be mindful of your B12 and iron levels (both essential for
                energy), nutrients that are found in meat and fish.
              </>
            </Text>
            <Text as="p" className="w-[86%] md:w-full mt-10 !text-gray-800_01 leading-[25px]">
              <>
                6. Intuitive Eating:
                <br />
                With intuitive eating, people are encouraged to make peace with food by not labelling it as “good” or
                “bad” food groups, and to listen to physical cues for hunger and fullness. It means tapping into your
                body’s intuitive ability to tell you what your body needs without emphasis on calorie in vs calorie out.
                Cons of intuitive eating are that it can take time to tune into your body and get the balance
                right. Sensing whether you are full or hungry requires tuning into your body’s signals; this can be very
                difficult for some people. Research shows that intuitive eating is good for maintaining your current
                weight,
                <br />
                but intuitive eating alone probably won’t help you lose weight unless you pair it with an exercise
                regimen.
              </>
            </Text>
            <Text as="p" className="w-[86%] md:w-full mt-10 !text-gray-800_01 leading-[25px]">
              Make a wise choice based on your lifestyle, your health goals, accessibility to foods and your traditional
              eating habits. Your results will be more achievable &amp; sustainable with professional guidance from an
              experienced Nutrition Professional.
            </Text>
            <div className="flex flex-col self-stretch items-center mt-24 gap-[88px] px-14 py-[76px] md:gap-[66px] md:p-5 sm:gap-11 bg-red-50">
              <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
                Latest Articles
              </Text>
              <div className="flex md:flex-col w-[93%] md:w-full mb-[39px] gap-[41px]">
                <div className="flex flex-col w-full gap-[26px] p-4 bg-white-A700_01 shadow-md rounded-[10px]">
                  <Img
                    src="images/img_rectangle_26_293x354.png"
                    alt="nutrition_one"
                    className="object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start mb-2.5">
                    <div className="flex">
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="mt-[13px] !text-gray-800_02 !font-cormorant">
                      Cold pressed oil - yay or nay !
                    </Text>
                    <Text as="p" className="mt-3.5 !text-gray-800_01 leading-[25px]">
                      ‘Cold pressing’ is a process used during juicing or extracting oil from seeds. The process
                      separates the fiber{" "}
                    </Text>
                    <div className="flex items-center mt-9 gap-[9px]">
                      <Img src="images/img_article.svg" alt="article_5min" className="h-[26px] w-[26px]" />
                      <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                        ARTICLE - 5MIN READ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[26px] p-4 bg-white-A700_01 shadow-md rounded-[10px]">
                  <Img src="images/img_rectangle_26_6.png" alt="image" className="object-cover rounded-[10px]" />
                  <div className="flex flex-col items-start mb-2.5">
                    <div className="flex">
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="mt-[13px] !text-gray-800_02 !font-cormorant">
                      Do you require suppliments?
                    </Text>
                    <Text as="p" className="w-[96%] md:w-full mt-5 !text-gray-800_01 leading-[25px]">
                      Supplements have received flak mostly because of incorrect usage and also for being notoriously
                      abused by people .
                    </Text>
                    <div className="flex items-center mt-[30px] gap-[9px]">
                      <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
                      <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                        ARTICLE - 5MIN READ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[26px] p-4 bg-white-A700_01 shadow-md rounded-[10px]">
                  <Img src="images/img_rectangle_26_7.png" alt="image" className="object-cover rounded-[10px]" />
                  <div className="flex flex-col items-start mb-2.5">
                    <div className="flex">
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="mt-[13px] !text-gray-800_02 !font-cormorant">
                      Milk is healthy choice?
                    </Text>
                    <Text as="p" className="mt-5 !text-gray-800_01 leading-[25px]">
                      Since centuries milk has been considered as a wholesome food. Its use has been advocated to the
                      weak.
                    </Text>
                    <div className="flex items-center mt-[30px] gap-[9px]">
                      <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
                      <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                        ARTICLE - 5MIN READ
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer1 className="self-stretch" />
          </div>
        </div>
      </div>
    </>
  );
}
