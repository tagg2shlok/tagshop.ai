'use client';
import { PlayIcon, CircleDollarSign, Move, ChartLine } from "lucide-react";
import React, { useEffect } from "react";

import { Button } from "../../../components/ui/button";

export default function HomeDecor(): JSX.Element {

       useEffect(() => {
              // This code will run only on the client side
              const script = document.createElement('script');
              script.src = "https://widget.tagshop.ai/embed-lite.min.js";
              script.type = "text/javascript";
              document.body.appendChild(script);

              return () => {
                     document.body.removeChild(script);
              };
       }, []);
       return (<>
              <section className="hero-section relative pt-[130px] md:pb-[0px] lg:py-[100px] lg:pb-[120px] bg-auto bg-center bg-no-repeat h-auto lg:h-screen" style={{ backgroundImage: "url(/assets/hero-bg.png)" }}>
                     <div className="sm:grid lg:grid-cols-2 items-center h-auto lg:h-full mx-auto max-w-100 sm:max-w-[540px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1260px] 2xl:max-w-[1420px]">
                            <div className="flex basis-1/2 items-center justify-center px-4 h-full order-first lg:order-last mb-[40px] lg:mb-0">
                                   <video className="rounded-xl max-w-[90%] md:max-w-[85%] lg:max-w-[100%] xl:max-w-[85%] 2xl:max-w-[95%]" poster="https://cdn.taggbox.com/v7/https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/hero_thumb-min.jpg?w=630" playsInline autoPlay loop muted width="612" height="383" preload="none">
                                          <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/hero-video-new.mp4" type="video/mp4" />
                                   </video>
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 w-full text-center lg:text-start order-last lg:order-first">
                                   <h1 className="text-white text-[30px] sm:text-[46px] md:text-[45px] xl:text-[50px] leading-[1.4] font-bold text-center lg:text-start ">
                                          AI UGC Videos for Beauty & Cosmetics Brands
                                   </h1>
                                   <p className="text-white text-[18px] xl:text-[20px] font-normal text-center lg:text-start mt-[10px]">
                                          Showcase your beauty products with high-quality, AI-generated UGC-style videos
                                          created in minutes. Cut costs by 75% and scale production effortlessly.
                                   </p>
                                   <div className="text-center lg:text-start w-full mt-[18px]">
                                          <Button className="px-7 py-3 justify-start rounded-[30px] bg-gradient-to-b from-[rgba(151,104,254,1)] to-[rgba(127,66,254,1)] text-white font-bold text-lg">
                                                 Start Your AI UGC Video Creation
                                          </Button>
                                   </div>
                            </div>
                     </div>

                     <div className="text-center static lg:absolute bottom-0 w-full mt-[40px] lg:mt-0 pb-[20px] lg:pb-[10px] xl:pb-0">
                            <p className="text-white text-lg mb-4">
                                   Trusted by individuals and teams at the world's boldest companies
                            </p>
                            <div className="relative h-[60px] md:h-[55px] lg:h-[65] xl:h-[85px] 2xl:h-[105px] mx-auto bg-auto bg-center bg-repeat-x" style={{ backgroundImage: "url(/assets/brand-strip.svg)" }}>
                            </div>
                     </div>
              </section>

              <section className="hyper-personalised">
                     <div className="px-4 py-[40px] md:py-[50px] xl:py-[60px] 2xl:pt-[78px] 2xl:pb-[68px]">
                            <h2 className="text-white font-bold text-center leading-[1.2] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.4] mb-[16px] mx-auto max-w-[450px] sm:max-w-[650px] lg:max-w-[650px] xl:max-w-[950px]">
                                   Hyper-personalised, UGC-like Videos in Almost Zero Effort
                            </h2>
                            <p className="text-white text-[20px] font-normal text-center mx-auto max-w-[850px]">Enjoy freedom and experience an increase in CTR by 21% by swapping polished studio creatives for UGC style videos.</p>
                     </div>
                     <div className="sm:grid sm:grid-cols-3 md:gap-[18px] lg:gap-[24px] xl:gap-[30px] 2xl:gap-[38px] mx-auto max-w-full sm:max-w-[540px] md:max-w-[750px] lg:max-w-[1000px] items-center h-full" >
                            <div className="px-4 flex items-center justify-center mb-[40px] mb-md-0">
                                   <video className="w-full h-auto rounded-xl max-w-[85%] md:max-w-[100%]" width="360" height="640" poster="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-1-min.jpg" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0">
                                          <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-1.mp4" type="video/mp4" />
                                   </video>
                            </div>
                            <div className="flex justify-center px-4 md:px-0 mb-[40px] mb-md-0">
                                   <video className="w-full h-auto rounded-xl max-w-[85%] md:max-w-[100%]" width="360" height="640" poster="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-2-min.jpg" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0">
                                          <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-2.mp4" type="video/mp4" />
                                   </video>
                            </div>
                            <div className="px-4 flex items-center justify-center mb-[40px] mb-md-0">
                                   <video className="w-full h-auto rounded-xl max-w-[85%] md:max-w-[100%]" width="360" height="640" poster="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-3-min.jpg" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0">
                                          <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-3.mp4" type="video/mp4" />
                                   </video>
                            </div>
                     </div>
              </section>

              <section className="aiUGC-videos py-[40px] sm:py-[50px] lg:py-[60px] xl:py-[70px] 2xl:pt-[104px] 2xl:pb-[93px]">
                     <div className="flex flex-col mb-[60px]">
                            <h2 className="text-white font-bold text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.4] max-w-[950px] mx-auto">
                                   AI UGC Videos That Maximize Impact
                            </h2>
                     </div>
                     <div className='wrapper px-4'>
                            <div className="md:grid md:grid-cols-2 md:gap-[38px] items-center max-w-full max-w-full sm:max-w-[540px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1170px] mx-auto px-[20px] py-[30px] md:p-[38px] md:p-[38px] bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px]">
                                   <div className="order-first md:order-last mb-[40px] mb:md-0">
                                          <video className="w-full h-auto rounded-xl" width="572" height="424" poster="https://cdn.taggbox.com/v7/https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/paid-ads-min.jpg?w=1144" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0">
                                                 <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/paid-ads.mp4" type="video/mp4" />
                                          </video>
                                   </div>
                                   <div className="order-last md:order-first">
                                          <h3 className="text-white text-[26px] md:text-[36px] font-bold text-start mb-[10px] mx-auto max-w-[950px]">Run Ads</h3>
                                          <p className="text-white text-[18px] font-normal text-start">
                                                 Ad fatigue is real, and generic ads no longer cut it—especially in beauty and cosmetics.
                                                 AI UGC videos showcase product results in action, boosting confidence and driving higher ROAS.
                                          </p>
                                   </div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-[38px] items-center max-w-full sm:max-w-[540px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1170px] mx-auto mt-[40px] px-[20px] py-[30px] md:p-[38px] md:p-[38px] bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px]">
                                   <div className="mb-[40px] mb:md-0">
                                          <video className="w-full h-auto rounded-xl" width="572" height="424" poster="https://cdn.taggbox.com/v7/https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/publish-social-min.jpg?w=1144" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0">
                                                 <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/publish-soical-n.mp4" type="video/mp4" />
                                          </video>
                                   </div>
                                   <div className="">
                                          <h3 className="text-white text-[26px] md:text-[36px] font-bold text-start mb-[10px] mx-auto max-w-[950px]">Publish on Socials</h3>
                                          <p className="text-white text-[18px] font-normal text-start">
                                                 Struggling with engagement? AI-generated UGC videos bring beauty products to life—whether it's a new
                                                 product launch, brand testimonials or new collection reveal. Sell experiences, not just products.
                                          </p>
                                   </div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-[38px] items-center max-w-full sm:max-w-[540px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1200px] mx-auto mt-[40px] px-[20px] py-[30px] md:p-[38px] md:p-[38px] bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px]">
                                   <div className="order-first md:order-last mb-[40px] mb:md-0">
                                          <video className="w-full h-auto rounded-xl" width="572" height="424" poster="https://cdn.taggbox.com/v7/https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/display-website-min.jpg?w=1144" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0">
                                                 <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/display-website.mp4" type="video/mp4" />
                                          </video>
                                   </div>
                                   <div className="order-last md:order-first">
                                          <h3 className="text-white text-[26px] md:text-[36px] font-bold text-start mb-[10px] mx-auto max-w-[950px]">Display on Website</h3>
                                          <p className="text-white text-[18px] font-normal text-start">
                                                 No more passive browsing—embed AI creator videos on PDPs to showcase skincare results,
                                                 flawless makeup, or hair videos. Seeing is believing, and that belief drives conversions.
                                          </p>
                                   </div>
                            </div>
                     </div>
              </section>

              <section className="py-[40px] md:py-[50px] xl:py-[60px] 2xl:pt-[62px] 2xl:pb-[116px]">
                     <div className="wrapper">
                            <div className="mb-[60px] px-4">
                                   <h2 className="text-white font-bold text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.4] max-w-[1050px] mb-[30px] sm:mb-[50px] lg:mb-[60px] mx-auto">
                                          Hire a Perfect UGC Creator for Your Brand
                                   </h2>
                            </div>
                            <div className="tagshop" style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                                   <div className="tagshop-socialwall" data-wall-id="22345" data-source="website"></div>
                            </div>
                     </div>
              </section>

              <section className="pt-[20px] py-[60px] md:py-[70px] xl:py-[90px] 2xl:py-[110px] 2xl:py-[110px] px-4">
                     <div className="warpper mx-auto max-w-[1170px]" >
                            <div className="flex flex-col mb-[50px]">
                                   <h2 className="text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.4] font-bold text-center mx-auto max-w-[850px]">
                                          AI-Powered Beauty Videos—Made for Scrolls & Sales
                                   </h2>
                            </div>
                            <div className="md:grid md:grid-cols-3 gap-[24px] pb-[10px] md:pb-[50px] lg:pb-[70px] xl:pb-[90px]  2xl:pb-[110px] mx-auto max-w-full sm:max-w-[540px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1200px] items-center">
                                   <div className="bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-md-0 mb-[40px]">
                                          <div className='icon mb-[22px]'>
                                                 <CircleDollarSign className='w-[38px] h-[38px]' />
                                          </div>
                                          <h4 className="text-white text-[24px] font-bold text-start mb-[12px] mx-auto max-w-[950px]">
                                                 Faster & More Cost-Effective Production
                                          </h4>
                                          <p className="text-white text-[18px] font-normal text-start leading-6">
                                                 Skip expensive shoots and unreliable creators. AI UGC videos showcase skincare routines,
                                                 flawless makeup applications, and hair changes—delivering high-impact content at scale, in minutes.
                                          </p>
                                   </div>
                                   <div className="bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-md-0 mb-[40px]">
                                          <div className='icon mb-[22px]'>
                                                 <Move className='w-[38px] h-[38px] rotate-45' />
                                          </div>
                                          <h4 className="text-white text-[24px] font-bold text-start mb-[12px] mx-auto max-w-[950px]">
                                                 Scalable Content Across Platforms
                                          </h4>
                                          <p className="text-white text-[18px] font-normal text-start leading-6">
                                                 Effortlessly create AI-generated beauty tutorials, product demos, and videos in bulk—perfect
                                                 for ads, reels, shorts, stories and websites—without the limitations of traditional production.
                                          </p>
                                   </div>
                                   <div className="bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-md-0 mb-[40px]">
                                          <div className='icon mb-[22px]'>
                                                 <ChartLine className='w-[38px] h-[38px]' />
                                          </div>
                                          <h4 className="text-white text-[24px] font-bold text-start mb-[12px] mx-auto max-w-[950px]">
                                                 Higher Conversions, Better ROAS
                                          </h4>
                                          <p className="text-white text-[18px] font-normal text-start leading-6 xl:min-h-[128px] 2xl:min-h-[144px] ">
                                                 AI UGC videos grab attention, show your products in action, and help you sell
                                                 more—without blowing your budget. Smart content = better results, faster growth.
                                          </p>
                                   </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center justify-between gap-[25px] md:gap-[38px] mx-auto max-w-[1200px] items-center px-[20px] py-[30px] md:p-[38px] bg-[#4E69ED] rounded-[8px] mt-[34px]'>
                                   <span className='d-block text-white text-center md:text-start text-[24px] md:text-[24px] lg:text-[30px] font-bold mx-auto max-w-[950px] md:px-4'>
                                          Join us in revolutionizing beauty and cosmetics marketing with the power of AI-driven UGC videos.
                                   </span>
                                   <Button className="px-7 py-3 justify-start rounded-[6px] text-black bg-white font-bold text-lg">
                                          Book Demo
                                   </Button>
                            </div>
                     </div>
              </section>


              <section className="success-stories pt-[20px] py-[40px] md:py-[60px] xl:py-[80px] 2xl:pt-[78px] 2xl:pb-[100px] px-4">
                     <div className="wrapper mx-auto max-w-[1170px]">
                            <div className="mb-[30px] md:mb-[60px] text-center">
                                   <h2 className="text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.4] font-bold text-center mb-[8px] mx-auto max-w-[1050px]">
                                          Success Stories
                                   </h2>
                                   <p className='text-white text-[20px] font-normal'>
                                          We are here at every step of your product lifecycle- from product sampling to product reviews.
                                   </p>
                            </div>
                            <div className="lg:flex mx-auto max-w-[1200px] items-center px-[34px] pb-[40px] pt-[24px] bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px]">
                                   <div className="sm:flex w-full lg:w-[80%] gap-[11px] mx-auto max-w-[1000px] items-center h-full lg:pe-[42px]">
                                          <div className="flex items-center justify-center">
                                                 <video className="sm:w-full  sm:max-w-[100%] h-auto rounded-xl" width="360" height="640" poster="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-1-min.jpg" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0" >
                                                        <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-1.mp4" type="video/mp4" />
                                                 </video>
                                          </div>
                                          <div className="flex items-center justify-center sm:px-4 mt-[60px] sm:mt-8">
                                                 <video className="sm:w-full  sm:max-w-[100%] h-auto rounded-xl" width="360" height="640" poster="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-2-min.jpg" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0" >
                                                        <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-2.mp4" type="video/mp4" />
                                                 </video>
                                          </div>
                                          <div className="flex items-center justify-center mt-[60px] sm:mt-0">
                                                 <video className="sm:w-full  sm:max-w-[100%] h-auto rounded-xl" width="360" height="640" poster="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-3-min.jpg" playsInline autoPlay loop muted data-origwidth="0" data-origheight="0" >
                                                        <source src="https://cloud.tagshop.ai/frontend/tagshop/assets/images/ugc-creator-for-home-interiors/inspire-video-3.mp4" type="video/mp4" />
                                                 </video>
                                          </div>
                                   </div>
                                   <div className='sm:flex lg:flex-col gap-[40px] lg:gap-0 w-full lg:w-[20%] items-center justify-center h-full mt-[80px] lg:mt-0'>
                                          <div className="bg-[#4E69ED] rounded-[10px] ps-[30px] pe-[14px] pt-[20px] pb-[18px] mb-[40px] sm:mb-0 lg:mb-[35px]">
                                                 <p className="text-white text-[16px]">
                                                        Overall the campaign increased website visitors by
                                                 </p>
                                                 <span className="d-block text-white text-[50px] font-semibold text-start mb-[35px]">
                                                        57%
                                                 </span>
                                          </div>
                                          <div className="bg-[#4E69ED] rounded-[10px] ps-[30px] pe-[14px] pt-[20px] pb-[18px]">
                                                 <p className="text-white text-[16px]">
                                                        Overall the campaign increased website visitors by
                                                 </p>
                                                 <span className="d-block text-white text-[50px] font-semibold text-start mb-[35px]">
                                                        57%
                                                 </span>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </section>
       </>
       );
};
