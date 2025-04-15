
import { Separator } from "@/components/ui/separator";
// import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {

  return (<footer className="bg-black">

            <div className="bg-primary-8 bg-[url('/assets/images/footerBG.png')] bg-no-repeat bg-cover bg-center pt-16 pb-8">
                <div className="container">
                  <div className="flex md:flex-row flex-col flex-wrap">
                    <div className="lg:w-[25%] md:w-[40%] mb-[40px] lg:mb-0">
                      <div className="flex items-center mb-5">
                        <Image src="/assets/tagshop-logo.svg" alt="" width={152} height={30} />
                      </div>
                      <div className="flex-centerY gap-2">
                        <p className="text-white">EXPERTS IN:</p>
                        <div className="flex flex-wrap items-center gap-5 mt-3">
                            <Image src="/assets/meta.svg" alt="meta" width={118} height={24} />
                            <Image src="/assets/tiktok.svg" alt="tiktok" width={118} height={24} />
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-[16.333%] md:w-[30%] mb-[40px] lg:mb-0">
                      <h3 className="text-[#babfc3] text-sm font-semibold mb-4">
                        RESOURCES
                      </h3>
                      <ul className="text-white text-sm space-y-2">
                        <li>Pricing</li>
                        <li>Hire UGC Creators</li>
                        <li>Become a creator</li>
                        <li>Fair Use Policy</li>
                      </ul>
                    </div>
                    <div className="lg:w-[16.333%] md:w-[30%] mb-[40px] lg:mb-0">
                      <h3 className="text-[#babfc3] text-sm font-semibold mb-4">
                        COMPARISON
                      </h3>
                      <ul className="text-white text-sm space-y-2">
                        <li>Billo alternative</li>
                      </ul>
                    </div>
                    <div className="lg:w-[16.333%] md:w-[25%] md:mt-[40px] lg:mt-0">
                      <h3 className="text-[#babfc3] text-sm font-semibold mb-4">
                        COMPARISON
                      </h3>
                      <ul className="text-white text-sm space-y-2">
                        <li>Billo alternative</li>
                      </ul>
                    </div>
                    <div className="lg:w-[25%] md:w-[40%] md:mt-[40px] lg:mt-0">
                      <h3 className="text-[#babfc3] text-sm font-semibold mb-4">
                        BLOGS
                      </h3>
                      <ul className="text-white text-sm space-y-4">
                        <li>8 Types of UGC Videos Content You Can Try in 2025</li>
                        <li>29 UGC Video Ideas You Haven't Tried Yet</li>
                        <li>
                          10 UGC Video Examples: How Real People Boost Your Brand
                        </li>
                        <li>How to Find UGC Creators For Your Brand in 2025</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <Separator className="bg-[#ffffff17]" />
            <div className="py-[20px]">
              <div className="container">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex flex-wrap items-center py-1 ">
                    <p className="text-white text-sm my-2">
                      © 2025, Tagshop.ai - All Rights Reserved
                    </p>
                    <p className="text-white text-sm my-2">Request A Demo</p>
                  </div>

                  <div className="flex items-center gap-2 py-1 justify-center">
                        <div className="w-[34px] h-[34px] bg-[#333333] rounded-[17px] flex items-center justify-center text-white text-lg">
                          {/* <Twitter /> */}
                          <img src='/assets/twitter.svg' width='17' height='17' alt='twitter' /> 
                        </div>
                        <div className="w-[34px] h-[34px] bg-[#333333] rounded-[17px] flex items-center justify-center text-white text-lg">
                          {/* <Linkedin /> */}
                          <img src='/assets/linkedin.svg' width='16' height='17' alt='linkedin' /> 
                        </div>
                        <div className="w-[34px] h-[34px] bg-[#333333] rounded-[17px] flex items-center justify-center text-white text-lg">
                          {/* <Instagram /> */}
                          <img src='/assets/instagram.svg' width='17' height='17' alt='instagram' /> 
                        </div>
                        <div className="w-[34px] h-[34px] bg-[#333333] rounded-[17px] flex items-center justify-center text-white text-lg">
                          {/* <Facebook /> */}
                          <img src='/assets/facebook.svg' width='18' height='19' alt='facebook' /> 
                        </div>
                  </div>
                </div>
              </div>
            </div>
      </footer>
  );
}