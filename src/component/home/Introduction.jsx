import Button from "../ui/Button";
import Image from "next/image";
import map from "@/assets/images/home/maps/map.png";
import house from "@/assets/images/home/maps/house.png";
import house1 from "@/assets/images/home/maps/house2.png";
import icon1 from "@/assets/images/home/maps/Icon.png";
import icon2 from "@/assets/images/home/maps/Icon (1).png";
import icon3 from "@/assets/images/home/maps/Icon (2).png";
import currentLocIcon from "@/assets/images/home/maps/Group 13639.png";
import locIcon from "@/assets/images/home/maps/Group.png";
import path from "@/assets/images/home/maps/path.png";
import SectionContainer from "../ui/SectionContainer";

const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-8 items-start
                    xl:w-1/2 
                    lg:w-[40%]
                    md:w-full
                    max-md:w-full">
                    <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1">
                        <p className="brand-text-green">Discover new opportunities and connections</p>
                    </div>
                    <h1 className="text-navy font-heading font-extrabold
                        xl:text-7xl 
                        lg:text-6xl
                        md:text-6xl
                        max-md:text-5xl">Your Leads. <br/>Our Calls. <br/> Smarter Sales.</h1>
                    <p className="brand-text-green 
                        xl:leading-7 lg:leading-6 md:leading-5 max-md:leading-5">Lead Sourze delivers professional telesales campaigns for New Zealand businesses across real estate, solar, finance, services, and more. With proven systems, expert oversight, and AI-enhanced calling, we turn your contact lists into qualified conversations, appointments, and measurable results.</p>
                    <div className="flex items-center gap-5">
                        <Button style={"!p-4"} url={"/"} bgColor={"brand-bg-green"} textColor={"text-white"}>
                            Schedule a Consultation
                        </Button>
                        <Button style={"!p-4"} url={"/"} bgColor={"brand-bg-green"} textColor={"text-white"}>
                            See Our Pricing
                        </Button>
                    </div>
                </div>
                <div className="h-[700px] relative overflow-hidden w-1/2 
                    lg:block md:hidden max-md:hidden">
                    <div className="w-full absolute inset-0 z-0">
                        <div className="relative w-full h-full">
                          <Image
                            src={map}
                            alt="map"
                            className="object-cover object-center brightness-[0.95]"
                            fill
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7FD]/95 via-[#F7F7FD]/70 to-[#eaeaf5]/20" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between absolute left-3 top-25 z-10 rounded-xl overflow-hidden shadow-md bg-white
                        xl:w-[265px] xl:h-[340px] 
                        lg:w-[205px] lg:h-[280px]
                        md:w-[185px] md:h-[240px]">
                      {/* Image wrapper */}
                      <div className="relative w-full 
                        xl:h-[165px] lg:h-[105px] md:h-[95px]">
                        <Image 
                          src={house}
                          alt="house"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Text content */}
                      <div className="p-4 font-heading flex flex-col justify-between gap-7">
                        <div>
                            <p>
                                <span className="brand-text-green font-extrabold
                                    xl:text-2xl lg:text-xl">$2,700</span>/month
                            </p>
                            <h3 className="text-navy font-bold
                                xl:text-2xl lg:text-xl">Beverly Springfield</h3>
                        </div>
                        <div className="flex items-center justify-between py-3 border-t border-t-gray-200">
                            <div className="flex items-center gap-2">
                                <Image
                                    width={18} height={18} src={icon1} alt="icon1"/>
                                <p className="text-sm text-[#6C727F]">4</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    width={18} height={18} src={icon2} alt="icon2"/>
                                <p className="text-sm text-[#6C727F]">2</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    width={18} height={18} src={icon3} alt="icon3"/>
                                <p className="text-sm text-[#6C727F]">6x7.5 m²</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between absolute right-24 bottom-5 z-10 w-[165px] h-[240] rounded-xl overflow-hidden shadow-md bg-white border-[2px] border-[#2E7D32]">
                        {/* Image wrapper */}
                        <div className="p-[1.5px]">
                            <div className="relative w-full h-[100px] rounded-t-lg overflow-hidden">
                              <Image 
                                src={house1}
                                alt="house1"
                                fill
                                className="object-cover"
                              />
                            </div>
                        </div>
                      

                      {/* Text content */}
                      <div className="p-2 font-heading flex flex-col justify-between gap-2">
                        <div>
                            <p>
                                <span className="brand-text-green text-lg font-extrabold">$1,600</span>/month
                            </p>
                            <h3 className="text-navy font-bold">Tarpon Bay</h3>
                            <p className="text-[#6C727F] text-xs">Palm Harbor, TX</p>
                        </div>
                        <div className="flex items-center justify-between py-3 border-t border-t-gray-200">
                            <div className="flex items-center gap-1">
                                <Image
                                    width={14} height={14} src={icon1} alt="icon1"/>
                                <p className="text-xs text-[#6C727F]">4</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image
                                    width={14} height={14} src={icon2} alt="icon2"/>
                                <p className="text-xs text-[#6C727F]">2</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image
                                    width={14} height={14} src={icon3} alt="icon3"/>
                                <p className="text-xs text-[#6C727F]">6x7.5 m²</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[220px] h-[300px]
                        xl:right-28 xl:top-22 
                        lg:right-3 lg:top-22
                        md:right-0 md:top-22">
                        <div className="relative w-full h-full">
                            <Image 
                                className="absolute -top-3 left-1"
                                src={currentLocIcon} alt="loc1" width={50}/>
                            <Image 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto"
                              src={path}
                              alt="loc3"
                            />
                            <Image 
                                className="absolute -bottom-5 left-8"
                                src={locIcon} alt="loc2" width={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;