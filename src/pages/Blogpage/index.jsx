import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Slider, Button } from "../../components";
import Footer from "../../components/Footer";

export default function BlogpagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

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
              <div className="w-full h-max pt-[29px] left-0 bottom-0 right-0 top-0 px-[29px] m-auto sm:pt-5 sm:px-5 bg-black-900_af absolute">
                <div className="flex flex-col items-center">
                  <header className="flex flex-col items-center justify-center w-[94%] md:w-full gap-[41px]">
                    <Img src="images/img_television.svg" alt="image_one" className="h-[19px]" />
                    <Img src="images/img_svg.svg" alt="svg_one" className="self-end h-[20px] w-[20px]" />
                  </header>
                  <div className="self-stretch h-[730px] md:h-auto relative">
                    <div className="flex flex-col items-center w-[63%] mt-[205px]">
                      <Text size="12xl" as="p" className="!text-white-A700_a2 !font-cormorant text-center opacity-0.9">
                        Discover Wellness Wisdom
                      </Text>
                      <Text
                        size="12xl"
                        as="p"
                        className="mt-[25px] !text-white-A700_a2 !font-cormorant text-center opacity-0.9"
                      >
                        Explore Our Latest Blogs for Health
                      </Text>
                      <Text
                        as="p"
                        className="w-[48%] md:w-full mt-[7px] !text-white-A700_b2 text-center leading-[35px]"
                      >
                        Ready for a new year of wellness? We are. Come join us for your health and wellness retreat.
                      </Text>
                    </div>
                    <div className="flex justify-end w-full h-max left-0 bottom-0 right-0 top-0 p-[33px] m-auto sm:p-5 border-white-A700_3d border border-solid absolute rounded-[23px]">
                      <div className="flex md:flex-col justify-between items-center w-[63%] md:w-full mb-[619px] mr-[105px] gap-5 md:mr-0">
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
            <div className="self-stretch h-[872px] mt-6 relative">
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
                    <Text size="10xl" as="p" className="!text-gray-800_01 !font-cormorant text-center">
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
              <div className="w-[86%] m-auto">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
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
                  className="gap-[41px] bottom-[0.00px] right-0 left-0 absolute"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-[26px] p-4 mx-[20.5px] border-blue_gray-100_e0 border border-solid bg-white-A700_01 rounded-[10px]">
                        <Img
                          src="images/img_rectangle_26_598x1208.png"
                          alt="image"
                          className="object-cover rounded-[10px]"
                        />
                        <div className="flex flex-col items-start mb-2.5">
                          <div className="flex">
                            <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                              WEIGHT MANAGEMENT
                            </Text>
                          </div>
                          <Text size="6xl" as="p" className="mt-[13px] !text-gray-800_01 !font-cormorant">
                            Top trending diet’s of 2024
                          </Text>
                          <Text as="p" className="mt-5 !text-gray-800_01 leading-[25px]">
                            It is that time of the year when you and everyone around you is making resolutions to stay
                            fit, lose weight.
                          </Text>
                          <div className="flex items-center mt-[30px] gap-[9px]">
                            <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
                            <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                              ARTICLE - 5MIN READ
                            </Text>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="h-[668px] w-[93%] mt-[62px] relative">
              <Img
                src="images/img_leaf_2_png_103x138.png"
                alt="leaf2png_five"
                className="h-[103px] w-[10%] bottom-[0.00px] left-[0.00px] m-auto object-cover absolute"
              />
              <div className="flex md:flex-col w-[93%] gap-[41px] right-[0.00px] top-[0.00px] m-auto absolute md:relative">
                <div className="flex flex-col w-full gap-[26px] p-4 border-blue_gray-100_e0 border border-solid bg-white-A700_01 rounded-[10px]">
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
                <div className="flex flex-col w-full gap-[26px] p-4 border-blue_gray-100_e0 border border-solid bg-white-A700_01 rounded-[10px]">
                  <Img src="images/img_rectangle_26_8.png" alt="image" className="object-cover rounded-[10px]" />
                  <div className="flex flex-col items-start mb-2.5">
                    <div className="flex">
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="mt-[13px] !text-gray-800_02 !font-cormorant">
                      Greek yogurt - yay or nay !
                    </Text>
                    <Text as="p" className="mt-3.5 !text-gray-800_01 leading-[25px]">
                      <>
                        A thicker creamier version of yogurt that we seem to be suddenly exposed to in the
                        <br />
                        supermarkets and in advertisements.
                      </>
                    </Text>
                    <div className="flex items-center mt-9 gap-[9px]">
                      <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
                      <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                        ARTICLE - 5MIN READ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[26px] p-[15px] border-blue_gray-100_e0 border border-solid bg-white-A700_01 rounded-[10px]">
                  <Img src="images/img_rectangle_26_9.png" alt="image" className="object-cover rounded-[10px]" />
                  <div className="flex flex-col items-start mb-[11px]">
                    <div className="flex">
                      <Text size="s" as="p" className="!text-deep_orange-800 tracking-[1.00px] !font-normal">
                        NUTRITION
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="mt-[13px] !text-gray-800_02 !font-cormorant">
                      Refrigerator necessity or not?{" "}
                    </Text>
                    <Text as="p" className="mt-3.5 !text-gray-800_01 leading-[25px]">
                      Every chef and home maker would be definitely thanking this invention! The refrigerator has become
                      a necessity
                    </Text>
                    <div className="flex items-center mt-9 gap-[9px]">
                      <Img src="images/img_article.svg" alt="article_one" className="h-[26px] w-[26px]" />
                      <Text size="s" as="p" className="self-end mb-0.5 !text-deep_orange-800 tracking-[1.00px]">
                        ARTICLE - 5MIN READ
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[364px] mt-[63px] relative">
              <div className="flex flex-col items-end w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img
                  src="images/img_leaf_2_png_87x118.png"
                  alt="leaf2png_seven"
                  className="w-[8%] z-[1] object-cover"
                />
                <div className="self-stretch h-[341px] mt-[-64px] relative bg-red-50" />
              </div>
              <Img
                src="images/img_h1_row_background_img_4_png_157x1435.png"
                alt="h1row_one"
                className="h-[157px] w-full bottom-[0.00px] right-0 left-0 m-auto object-cover absolute"
              />
              <div className="flex md:flex-col items-center w-[85%] bottom-[5.00px] left-[0.00px] m-auto absolute md:relative">
                <div className="flex w-[48%] md:w-full z-[1]">
                  <div className="h-[329px] w-full md:h-auto relative">
                    <Img
                      src="images/img_image_8_329x641.png"
                      alt="imageeight_one"
                      className="h-[329px] w-full object-cover"
                    />
                    <Text
                      size="10xl"
                      as="p"
                      className="h-max left-[22%] bottom-0 top-0 my-auto !text-gray-800_01 !font-cormorant text-center absolute"
                    >
                      Wellbeing Blog
                    </Text>
                  </div>
                </div>
                <Text
                  as="p"
                  className="w-[52%] md:w-full ml-[-114px] md:ml-0 !text-gray-800_01 relative leading-[29px]"
                >
                  Welcome to Our Wellness Hub! Dive into a World of Insightful Articles, Tips, and Inspiration to
                  Nourish Your Mind, Body, and Soul. Discover Expert Guidance, Empowering Stories, and Practical Advice
                  to Support Your Journey Towards Optimal Health and Well-Being. Let&#39;s Embark on this Path Together,
                  Towards a Happier, Healthier You!
                </Text>
              </div>
            </div>
            <Footer className="self-stretch mt-[37px]" />
          </div>
        </div>
      </div>
    </>
  );
}
