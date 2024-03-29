import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, Input } from "../../components";

export default function ContactformPage() {
  return (
    <>
      <Helmet>
        <title>starlite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div>
          <div>
            <header className="z-[1] bg-black-900_d8">
              <div className="flex md:flex-col justify-center items-center w-full mb-[34px] mx-auto md:p-5 max-w-[1239px]">
                <Img src="images/img_television.svg" alt="image" className="h-[7px] md:w-full" />
                <ul className="flex mt-[33px] ml-[373px] gap-[25px] md:ml-0 flex-wrap">
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
            <div className="h-[720px] md:h-auto mt-[-5px] relative">
              <div className="w-full p-[52px] md:p-5 bg-red-50">
                <div className="flex md:flex-col justify-between items-start w-full mt-[38px] gap-5 mx-auto max-w-[1266px]">
                  <div className="flex flex-col items-start w-[32%] md:w-full mt-[143px]">
                    <a href="#">
                      <Text size="9xl" as="p" className="!text-gray-800_01 text-center">
                        Contact Us
                      </Text>
                    </a>
                    <Text as="p" className="mt-[13px] !text-black-900 leading-[30px]">
                      Not sure what you need? The team at Starlite will be happy to listen to you.
                    </Text>
                    <div className="flex items-center mt-[60px] gap-2">
                      <Img src="images/img_mail.svg" alt="mail_one" className="h-[24px] w-[24px]" />
                      <a href=" welcome@starlitenutrition.com" target="_blank" rel="noreferrer" className="self-end">
                        <Text as="p" className="!text-black-900 tracking-[0.10px]">
                           welcome@starlitenutrition.com
                        </Text>
                      </a>
                    </div>
                    <div className="flex items-center mt-5 gap-[9px]">
                      <Img src="images/img_call.svg" alt="call_one" className="self-end h-[18px] w-[18px]" />
                      <a href="#">
                        <Text as="p" className="!text-black-900 tracking-[0.10px]">
                          +91 8500082020
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="h-[576px] w-[55%] md:w-full relative">
                    <Img
                      src="images/img_leaf_2_png_103x151.png"
                      alt="leaf2png_one"
                      className="h-[103px] w-[22%] bottom-[0.00px] right-[0.00px] m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-start justify-center w-[96%] pl-[60px] pr-14 top-[0.00px] right-0 left-0 py-[60px] m-auto md:p-5 bg-white-A700_01 absolute rounded-[10px]">
                      <Text size="5xl" as="p" className="mt-[3px] !text-gray-800_01">
                        We’d love to hear from you!
                      </Text>
                      <Text size="5xl" as="p" className="mt-[19px] !text-gray-800_01">
                        Lets get in touch
                      </Text>
                      <div className="flex flex-col self-stretch items-start mt-12 mb-[5px] gap-[35px]">
                        <div className="self-stretch">
                          <div>
                            <div className="flex flex-col items-start gap-[38px]">
                              <div className="flex sm:flex-col self-stretch justify-between gap-5">
                                <Input
                                  shape="square"
                                  type="text"
                                  name="firstName"
                                  placeholder={`First Name`}
                                  className="w-[48%] sm:w-full sm:pr-5"
                                />
                                <Input
                                  shape="square"
                                  type="text"
                                  name="lastName"
                                  placeholder={`Last Name`}
                                  className="w-[45%] sm:w-full sm:pr-5"
                                />
                              </div>
                              <div className="flex self-stretch justify-between gap-5 flex-wrap">
                                <Text
                                  as="p"
                                  className="pr-[35px] py-[9px] sm:pr-5 !text-gray-800_99 tracking-[0.02px] !font-poppins !font-medium border-gray-400 border-b border-solid"
                                >
                                  <span className="text-gray-800_99 font-montserrat font-normal">
                                    Contact Number&nbsp;
                                  </span>
                                  <span className="text-red_A700 font-montserrat font-normal">*</span>
                                </Text>
                                <Heading
                                  size="xs"
                                  as="h1"
                                  className="pr-[35px] py-[11px] sm:pr-5 !text-gray-800_99 tracking-[0.02px] !font-rambla border-gray-400 border-b border-solid"
                                >
                                  <span className="text-gray-800_99 font-montserrat font-normal">Email Id&nbsp;</span>
                                  <span className="text-red_900_e5 font-montserrat font-normal">*</span>
                                </Heading>
                              </div>
                              <Input
                                size="xs"
                                shape="square"
                                name="group376"
                                placeholder={`Tell us your requirements`}
                                className="w-[59%] sm:pr-5"
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          size="xs"
                          shape="round"
                          className="sm:px-5 tracking-[1.68px] font-medium border-orange-800 border border-solid shadow-sm min-w-[98px]"
                        >
                          Send{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_leaf_2_png_103x119.png"
                alt="leaf2png_three"
                className="h-[103px] w-[8%] left-[0.00px] top-[10%] m-auto object-cover absolute"
              />
            </div>
            <div className="h-[558px] relative">
              <footer className="w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-600 absolute" />
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="h-[555px] md:h-auto relative">
                  <Img src="images/img_image_9.png" alt="imagenine_one" className="h-[555px] w-full object-cover" />
                  <div className="flex md:flex-col justify-between items-center w-full h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto md:p-5 absolute max-w-[1136px] md:relative">
                    <div className="flex flex-col items-start w-[21%] md:w-full">
                      <Heading as="h2">Address</Heading>
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
                      <div className="flex flex-col items-start mt-5 gap-[11px]">
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
                      <div className="flex flex-col items-start mt-[70px] gap-2.5">
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
                    <div className="flex flex-col self-start items-start mt-5 gap-4">
                      <Heading as="h4">Quick Links</Heading>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
