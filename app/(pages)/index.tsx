'use client';
import React, { useEffect, useState } from "react";
import { Tabs, Tabs as TabsPrimitive } from 'radix-ui';
import HubspotModal from '@/components/ContactForm/HubspotModal';
import Link from "next/link";
// import ContactForm from "@/components/ContactForm";
import {
       Accordion,
       AccordionContent,
       AccordionItem,
       AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Box } from "lucide-react";
import { Title } from "../../components/ui/title";

const AiSVG = () => (<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M2.79453 0.864556C2.83184 0.932351 2.91287 0.960727 2.97874 1.00133L3.57108 1.36647C3.60039 1.38534 3.62451 1.41127 3.64122 1.44188C3.65791 1.47248 3.66667 1.5068 3.66667 1.54167C3.66667 1.57654 3.65791 1.61085 3.64122 1.64146C3.62451 1.67206 3.60039 1.698 3.57108 1.71687L2.87976 2.09567C2.8435 2.11039 2.8134 2.13713 2.79453 2.17142L2.42519 2.86274C2.40632 2.89206 2.3804 2.91618 2.34979 2.93288C2.31918 2.94958 2.28487 2.95833 2.25 2.95833C2.21513 2.95833 2.18082 2.94958 2.15021 2.93288C2.1196 2.91618 2.09367 2.89206 2.0748 2.86274L1.69601 2.17142C1.67857 2.13941 1.65226 2.1131 1.62024 2.09567L0.928923 1.71687C0.899605 1.698 0.875486 1.67206 0.858784 1.64146C0.842081 1.61085 0.833333 1.57654 0.833333 1.54167C0.833333 1.5068 0.842081 1.47248 0.858784 1.44188C0.875486 1.41127 0.899605 1.38534 0.928923 1.36647L1.62024 0.987665C1.65226 0.970233 1.67857 0.943925 1.69601 0.911909L2.0748 0.22059C2.09367 0.191272 2.1196 0.167153 2.15021 0.15045C2.18082 0.133748 2.21513 0.125 2.25 0.125C2.28487 0.125 2.31918 0.133748 2.34979 0.15045C2.3804 0.167153 2.40632 0.191272 2.42519 0.22059L2.79453 0.864556ZM4.67749 7.01262L6.77165 8.12152C6.86798 8.17585 6.94767 8.25539 7.002 8.35165L8.11195 10.4439C8.15948 10.5361 8.23152 10.6134 8.3202 10.6674C8.40889 10.7215 8.51067 10.75 8.61452 10.75C8.71836 10.75 8.82022 10.7215 8.90883 10.6674C8.99751 10.6134 9.06955 10.5361 9.11715 10.4439L10.248 8.35165C10.269 8.29988 10.3003 8.25277 10.3399 8.21325C10.3794 8.17372 10.4265 8.14255 10.4784 8.12152L12.5725 7.01262C12.6641 6.96197 12.7406 6.88767 12.7938 6.7975C12.8469 6.7074 12.875 6.60462 12.875 6.5C12.875 6.39538 12.8469 6.2926 12.7938 6.2025C12.7406 6.11233 12.6641 6.0381 12.5725 5.98738L10.4784 4.8785C10.382 4.82418 10.3023 4.7446 10.248 4.64836L9.11715 2.55611C9.06955 2.4639 8.99751 2.38656 8.90883 2.33256C8.82022 2.27857 8.71836 2.25 8.61452 2.25C8.51067 2.25 8.40889 2.27857 8.3202 2.33256C8.23152 2.38656 8.15948 2.4639 8.11195 2.55611L7.07835 4.50449C7.02771 4.59987 6.96318 4.68716 6.88682 4.76346C6.81046 4.83973 6.7232 4.90418 6.62778 4.95467L4.67749 5.98738C4.58584 6.0381 4.50945 6.11233 4.45625 6.2025C4.40306 6.2926 4.375 6.39538 4.375 6.5C4.375 6.60462 4.40306 6.7074 4.45625 6.7975C4.50945 6.88767 4.58584 6.96197 4.67749 7.01262ZM3.34311 9.93953C3.2443 9.87861 3.12276 9.83604 3.06679 9.73432L2.51279 8.76837C2.48449 8.72438 2.4456 8.68825 2.39968 8.66318C2.35377 8.6381 2.3023 8.625 2.25 8.625C2.1977 8.625 2.14623 8.6381 2.10031 8.66318C2.0544 8.68825 2.01551 8.72438 1.9872 8.76837L1.419 9.80537C1.39285 9.85339 1.35338 9.89285 1.30536 9.91898L0.268388 10.4872C0.224408 10.5155 0.188226 10.5544 0.163172 10.6003C0.138125 10.6462 0.125 10.6977 0.125 10.75C0.125 10.8023 0.138125 10.8538 0.163172 10.8997C0.188226 10.9456 0.224408 10.9845 0.268388 11.0128L1.30536 11.581C1.35338 11.6072 1.39285 11.6466 1.419 11.6946L1.9872 12.7316C2.01551 12.7756 2.0544 12.8117 2.10031 12.8368C2.14623 12.8619 2.1977 12.875 2.25 12.875C2.3023 12.875 2.35377 12.8619 2.39968 12.8368C2.4456 12.8117 2.48449 12.7756 2.51279 12.7316L3.06679 11.6946C3.0951 11.6432 3.14024 11.603 3.19464 11.581L4.23161 11.0128C4.27559 10.9845 4.31177 10.9456 4.33682 10.8997C4.36187 10.8538 4.375 10.8023 4.375 10.75C4.375 10.6977 4.36187 10.6462 4.33682 10.6003C4.31177 10.5544 4.27559 10.5155 4.23161 10.4872L3.34311 9.93953Z" fill="url(#paint0_linear_253_4821)" />
       <path fillRule="evenodd" clipRule="evenodd" d="M2.79453 0.864556C2.83184 0.932351 2.91287 0.960727 2.97874 1.00133L3.57108 1.36647C3.60039 1.38534 3.62451 1.41127 3.64122 1.44188C3.65791 1.47248 3.66667 1.5068 3.66667 1.54167C3.66667 1.57654 3.65791 1.61085 3.64122 1.64146C3.62451 1.67206 3.60039 1.698 3.57108 1.71687L2.87976 2.09567C2.8435 2.11039 2.8134 2.13713 2.79453 2.17142L2.42519 2.86274C2.40632 2.89206 2.3804 2.91618 2.34979 2.93288C2.31918 2.94958 2.28487 2.95833 2.25 2.95833C2.21513 2.95833 2.18082 2.94958 2.15021 2.93288C2.1196 2.91618 2.09367 2.89206 2.0748 2.86274L1.69601 2.17142C1.67857 2.13941 1.65226 2.1131 1.62024 2.09567L0.928923 1.71687C0.899605 1.698 0.875486 1.67206 0.858784 1.64146C0.842081 1.61085 0.833333 1.57654 0.833333 1.54167C0.833333 1.5068 0.842081 1.47248 0.858784 1.44188C0.875486 1.41127 0.899605 1.38534 0.928923 1.36647L1.62024 0.987665C1.65226 0.970233 1.67857 0.943925 1.69601 0.911909L2.0748 0.22059C2.09367 0.191272 2.1196 0.167153 2.15021 0.15045C2.18082 0.133748 2.21513 0.125 2.25 0.125C2.28487 0.125 2.31918 0.133748 2.34979 0.15045C2.3804 0.167153 2.40632 0.191272 2.42519 0.22059L2.79453 0.864556ZM4.67749 7.01262L6.77165 8.12152C6.86798 8.17585 6.94767 8.25539 7.002 8.35165L8.11195 10.4439C8.15948 10.5361 8.23152 10.6134 8.3202 10.6674C8.40889 10.7215 8.51067 10.75 8.61452 10.75C8.71836 10.75 8.82022 10.7215 8.90883 10.6674C8.99751 10.6134 9.06955 10.5361 9.11715 10.4439L10.248 8.35165C10.269 8.29988 10.3003 8.25277 10.3399 8.21325C10.3794 8.17372 10.4265 8.14255 10.4784 8.12152L12.5725 7.01262C12.6641 6.96197 12.7406 6.88767 12.7938 6.7975C12.8469 6.7074 12.875 6.60462 12.875 6.5C12.875 6.39538 12.8469 6.2926 12.7938 6.2025C12.7406 6.11233 12.6641 6.0381 12.5725 5.98738L10.4784 4.8785C10.382 4.82418 10.3023 4.7446 10.248 4.64836L9.11715 2.55611C9.06955 2.4639 8.99751 2.38656 8.90883 2.33256C8.82022 2.27857 8.71836 2.25 8.61452 2.25C8.51067 2.25 8.40889 2.27857 8.3202 2.33256C8.23152 2.38656 8.15948 2.4639 8.11195 2.55611L7.07835 4.50449C7.02771 4.59987 6.96318 4.68716 6.88682 4.76346C6.81046 4.83973 6.7232 4.90418 6.62778 4.95467L4.67749 5.98738C4.58584 6.0381 4.50945 6.11233 4.45625 6.2025C4.40306 6.2926 4.375 6.39538 4.375 6.5C4.375 6.60462 4.40306 6.7074 4.45625 6.7975C4.50945 6.88767 4.58584 6.96197 4.67749 7.01262ZM3.34311 9.93953C3.2443 9.87861 3.12276 9.83604 3.06679 9.73432L2.51279 8.76837C2.48449 8.72438 2.4456 8.68825 2.39968 8.66318C2.35377 8.6381 2.3023 8.625 2.25 8.625C2.1977 8.625 2.14623 8.6381 2.10031 8.66318C2.0544 8.68825 2.01551 8.72438 1.9872 8.76837L1.419 9.80537C1.39285 9.85339 1.35338 9.89285 1.30536 9.91898L0.268388 10.4872C0.224408 10.5155 0.188226 10.5544 0.163172 10.6003C0.138125 10.6462 0.125 10.6977 0.125 10.75C0.125 10.8023 0.138125 10.8538 0.163172 10.8997C0.188226 10.9456 0.224408 10.9845 0.268388 11.0128L1.30536 11.581C1.35338 11.6072 1.39285 11.6466 1.419 11.6946L1.9872 12.7316C2.01551 12.7756 2.0544 12.8117 2.10031 12.8368C2.14623 12.8619 2.1977 12.875 2.25 12.875C2.3023 12.875 2.35377 12.8619 2.39968 12.8368C2.4456 12.8117 2.48449 12.7756 2.51279 12.7316L3.06679 11.6946C3.0951 11.6432 3.14024 11.603 3.19464 11.581L4.23161 11.0128C4.27559 10.9845 4.31177 10.9456 4.33682 10.8997C4.36187 10.8538 4.375 10.8023 4.375 10.75C4.375 10.6977 4.36187 10.6462 4.33682 10.6003C4.31177 10.5544 4.27559 10.5155 4.23161 10.4872L3.34311 9.93953Z" fill="white" />
       <defs>
              <linearGradient id="paint0_linear_253_4821" x1="6.5" y1="0.125" x2="6.5" y2="12.875" gradientUnits="userSpaceOnUse">
                     <stop offset="0.0279863" stopColor="#CCB2FF" />
                     <stop offset="0.281157" stopColor="#AA81FE" />
                     <stop offset="1" stopColor="#6419FF" />
              </linearGradient>
       </defs>
</svg>)

const heroSlider = [
       {
              name: "Samsung",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18034391620930634/453345669_1884468178733489_2107238922288479198_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18034391620930634/An-jVLn6ZjqwsH9XIrO7asjWAmRjoXjou9XWm6OG2QWVZ29W_OhHwA7Z--88g3TbvSoOlumAUoOKKs78x901fjo.mp4",
       },
       {
              name: "Camfed",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       {
              name: "Samsung",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18034391620930634/453345669_1884468178733489_2107238922288479198_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18034391620930634/An-jVLn6ZjqwsH9XIrO7asjWAmRjoXjou9XWm6OG2QWVZ29W_OhHwA7Z--88g3TbvSoOlumAUoOKKs78x901fjo.mp4",
       },
       {
              name: "Camfed",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       {
              name: "Samsung",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18034391620930634/453345669_1884468178733489_2107238922288479198_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18034391620930634/An-jVLn6ZjqwsH9XIrO7asjWAmRjoXjou9XWm6OG2QWVZ29W_OhHwA7Z--88g3TbvSoOlumAUoOKKs78x901fjo.mp4",
       },
       {
              name: "Camfed",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       {
              name: "Samsung",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18034391620930634/453345669_1884468178733489_2107238922288479198_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18034391620930634/An-jVLn6ZjqwsH9XIrO7asjWAmRjoXjou9XWm6OG2QWVZ29W_OhHwA7Z--88g3TbvSoOlumAUoOKKs78x901fjo.mp4",
       },
       {
              name: "Camfed",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       {
              name: "Samsung",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18034391620930634/453345669_1884468178733489_2107238922288479198_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18034391620930634/An-jVLn6ZjqwsH9XIrO7asjWAmRjoXjou9XWm6OG2QWVZ29W_OhHwA7Z--88g3TbvSoOlumAUoOKKs78x901fjo.mp4",
       },
       {
              name: "Camfed",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       {
              name: "Samsung",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18034391620930634/453345669_1884468178733489_2107238922288479198_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18034391620930634/An-jVLn6ZjqwsH9XIrO7asjWAmRjoXjou9XWm6OG2QWVZ29W_OhHwA7Z--88g3TbvSoOlumAUoOKKs78x901fjo.mp4",
       },
       {
              name: "Camfed",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
];


// Trusted companies logos
const trustedCompanies = [
       {
              name: "Samsung",
              src: "https://c.animaapp.com/m9cbyt0vQh6WLj/img/samsung.svg",
       },
       {
              name: "Camfed",
              src: "https://c.animaapp.com/m9cbyt0vQh6WLj/img/camfed.svg",
       },
       { name: "Sre", src: "https://c.animaapp.com/m9cbyt0vQh6WLj/img/sre.svg" },
];

// Benefit cards data
const benefitCards = [
       {
              value: "24hr",
              title: "Turnaround",
              description: "From brief to live ad in under 24 hours",
       },
       {
              value: "60%",
              title: "Cost Reduction",
              description: "Significantly lower production costs",
       },
       {
              value: "300%",
              title: "ROAS",
              description: "Average return on ad spend increase",
       },
];

// // Feature cards data
// const featureCards = [
//        {
//               title: "URL to Video",
//               description:
//                      "Reduce dependency on time-consuming manual inputting of product specifications each time you need a creative. Let AI analyze your product and collect all details accurately.",
//        },
//        {
//               title: "Library of Avatars",
//               description:
//                      "With a library of 100+ hyper-realistic AI Avatars, always have fresh, scalable content, and launch successful ad campaigns without even hiring influencers.",
//        },
//        {
//               title: "Bulk Creation",
//               description:
//                      "Generate video ads for dozens of products in minutes at a fraction of the cost and always stay ahead of the curve and in proximity with the latest trends - all with AI UGC.",
//        },
//        {
//               title: "AI Editor",
//               description:
//                      "Take full control of your video ads with an intuitive AI Editor. Make real-time edits, fine-tune messaging, and launch faster for more time to market.",
//        },
//        {
//               title: "AI Script Generator",
//               description:
//                      "Quickly test multiple messaging angles in performance ads without lifting a finger. Let AI analyze your products and generate conversion-oriented video scripts.",
//        },
//        {
//               title: "Advance Lip Sync",
//               description:
//                      "Deliver video ads with professional-grade precision. Our AI avatars align script and speech perfectly ensuring every word is clear, credible, and conversion-ready.",
//        },
// ];

// Process steps data
const processSteps = [
       {
              title: "Add Product URL",
              description:
                     "Manual entering product specs? That's vintage. Just add your product's URL and let us analyze and fetch details quickly.",
       },
       {
              title: "Select Avatar",
              description:
                     "Got a prefrence? We have a library of 100+ avatars or custom avatar creation to cater to your audience.",
       },
       {
              title: "Generate Video Script",
              description:
                     "Leave the boring to us. We do result-driven, ready-to-shoot video scripts that match your messaging 10/10.",
       },
       {
              title: "Export & Launch",
              description:
                     "Download your high-quality AI UGC video or directly push it to Meta & TikTok for high-converting ads.",
       },
];

// Pricing plans data
const pricingPlans = [
       {
              name: "Classic Plan",
              price: "$39",
              period: "/month",
              features: [
                     "5 Videos",
                     "AI Realistic Actors",
                     "Video Hooks",
                     "125 AI Avatar Images",
                     "Custom AI Video Hooks",
                     "Available In 29 Languages",
                     "Sound Effects & Background Music",
                     "Generate and save unlimited viral hooks",
                     "Export Without Watermark",
                     "AI Script Generation",
                     "Edit Videos",
              ],
              isPopular: false,
       },
       {
              name: "Pro Plan",
              price: "$149",
              period: "/month",
              features: [
                     "600 credits per month",
                     "120 videos included per month",
                     "0.08 dollars per credit beyond limit",
                     "Unlimited downloads",
                     "Premium Voices",
                     "Premium AI Images",
                     "Stock Videos & Images",
                     "AI Avatar Support",
                     "Priority Support Via Email",
                     "AI Script Generation",
                     "Edit Videos",
              ],
              isPopular: true,
       },
       {
              name: "Enterprise",
              price: "Let's Talk",
              period: "",
              features: [
                     "5 Videos",
                     "AI Realistic Actors",
                     "Video Hooks",
                     "125 AI Avatar Images",
                     "Custom AI Video Hooks",
                     "Available In 29 Languages",
                     "Sound Effects & Background Music",
                     "Generate and save unlimited viral hooks",
                     "Export Without Watermark",
                     "AI Script Generation",
                     "Edit Videos",
              ],
              isPopular: false,
       },
];

// FAQ data
const faqItems = [
       {
              question: "How long does a video take to generate?",
              answer:   "Generating AI UGC videos is a four-step process - inputting the product URL, generating a script, picking an avatar, and finally, generating the video, which can take up to 3 to 5 minutes.",
       },
       {
              question: "Is there a trial for Tagshop?",
              answer: "Currently, there is no free trial for Tagshop. But, you can easily book a demo to know about the tool and have any questions answered.",
       },
       {
              question: "What types of media can I upload?",
              answer: "Users can upload additional images and videos to integrate them into the final AI UGC video.",
       },
       {
              question: "Do I have full commercial rights to my generated ads?",
              answer: "Yes, you have full rights to the generated videos and can use them across any channel without restrictions even after your plan ends.",
       },
       {
              question: "What languages are supported?",
              answer: "Tagshop supports over 24+ languages so you can target and engage a global audience easily.",
       },
       {
              question: "Are the actors real or AI actors?",
              answer: "Tagshop offers hyper-realistic AI actors to generate AI UGC videos.",
       },
];

const painPoints = [
       { 
              id: 0,
              text: "Ad costs are rising",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       { 
              id: 1,
              text: "Rivals launch better ads faster",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       { 
              id: 2,
              text: "Manual work consumes time",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       { 
              id: 3,
              text: "Creative delays block campaigns",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       { 
              id: 4,
              text: "Don't know which ad drives sales",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
       { 
              id: 5,
              text: "Generic targeting underperforms",
              thumb: "https://cloud.tagshop.ai/media/140968/141232/236238/18093334591417390/456034380_1021335969203346_5386245784685829962_n.jpg",
              src: "https://cdn.tagshop.ai/media/140968/141232/236238/18093334591417390/An9FIGS4E43_G6iMufjnQOoCqZkaij509OASbqX7jY6mzikHfh9LbOUtaW5QXiGYPIKoHW_XiymyklSuKg2CfMk.mp4",
       },
];

const priceSvg = [
       <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" key="price-icon">
         <path d="M9.16675 2.08057C6.67651 2.08057 4.4187 3.40869 3.15698 5.53369C1.92847 7.69189 1.92847 10.3149 3.15698 12.4399C4.4187 14.5981 6.67651 15.8931 9.16675 15.8931C11.6238 15.8931 13.8816 14.5981 15.1433 12.4399C16.3718 10.3149 16.3718 7.69189 15.1433 5.53369C13.8816 3.40869 11.6238 2.08057 9.16675 2.08057ZM9.16675 17.4868C6.11206 17.4868 3.323 15.8931 1.79565 13.2368C0.268311 10.6138 0.268311 7.39307 1.79565 4.73682C3.323 2.11377 6.11206 0.486816 9.16675 0.486816C12.1882 0.486816 14.9773 2.11377 16.5046 4.73682C18.032 7.39307 18.032 10.6138 16.5046 13.2368C14.9773 15.8931 12.1882 17.4868 9.16675 17.4868ZM12.9187 7.42627L8.6687 11.6763C8.33667 12.0083 7.83862 12.0083 7.53979 11.6763L5.41479 9.55127C5.08276 9.25244 5.08276 8.75439 5.41479 8.45557C5.71362 8.12354 6.21167 8.12354 6.5437 8.45557L8.10425 10.0161L11.7898 6.33057C12.0886 5.99854 12.5867 5.99854 12.9187 6.33057C13.2175 6.62939 13.2175 7.12744 12.9187 7.42627Z" fill="#3E6FFF" />
       </svg>,
];



// Feature card data
const featureCards = [
       {
         id: 1,
         title: "URL to Video",
         description:
           "Reduce dependency on time-consuming manual inputting of product specifications each time you need a creative. Let AI analyze your product and collect all details accurately.",
         content: (
           <div className="relative w-full h-[265px]">
             <div className="relative w-[301px] h-[238px] mx-auto mt-3">
               <div className="absolute w-[254px] h-[68px] top-[132px] left-0">
                 <div className="absolute w-[250px] h-[47px] top-[21px] left-0 bg-[url(https://c.animaapp.com/m9gl9mgojJJwIu/img/rectangle-5941-2.svg)] bg-[100%_100%]">
                   <div className="top-[13px] left-[19px] text-[15px] leading-[19.8px] absolute w-[215px] [font-family:'Inter_Tight',Helvetica] font-normal text-white tracking-[0]">
                     https://www.amazon.in/SYNERGY-Electric-Pre-Assembled-Throttle-Indicator/dp/B0CQJM3492/ref=pd_rhf_gw_s_pd_sbs_rvi_d_sccl_1_5/261-2765400-7122467?pd_rd_w=yAQ3G&amp;content-id=amzn1.sym.ed04a9b6-f1e8-467f-8e81-e050db1b5151&amp;pf_rd_p=ed04a9b6-f1e8-467f-8e81-e050db1b5151&amp;pf_rd_r=7CXD01PT19RK7FFKFAJV&amp;pd_rd_wg=L3iDM&amp;pd_rd_r=514f8596-182a-488e-bb7c-68bb50ec9da6&amp;pd_rd_i=B0CQJM3492&amp;th=1
                   </div>
                 </div>
                 <div className="top-0 left-1 font-bold text-[15px] leading-[19.8px] absolute [font-family:'Inter_Tight',Helvetica] text-white tracking-[0] whitespace-nowrap">
                   URL
                 </div>
               </div>
             </div>
           </div>
         ),
       },
       {
         id: 2,
         title: "Library of Avatars",
         description:
           "With a library of 100+ hyper-realistic AI Avatars, always have fresh, scalable content, and launch successful ad campaigns without even hiring influencers.",
         content: (
           <div className="relative w-full h-[306px] overflow-hidden">
             <div className="inline-flex items-center gap-[17.87px] absolute top-[27px] left-[45px]">
               {[1, 2, 3, 4].map((i) => (
                 <div
                   key={`avatar-row1-${i}`}
                   className="relative w-[160px] h-[150px]"
                 >
                   <div className="relative w-[146px] h-9 top-[109px] left-[7px]">
                     <div className="relative w-[146px] h-9 bg-[#ffffff0d] rounded-[7.71px] border-[0.64px] border-solid border-[#ffffff17] backdrop-blur-[5.46px]">
                       <div className="absolute top-2 left-2.5 font-bold text-[12.8px] leading-[19.3px] whitespace-nowrap [font-family:'Inter_Tight',Helvetica] text-white tracking-[0]">
                         {i === 1
                           ? "Olivia"
                           : i === 2
                             ? "Leslie"
                             : i === 3
                               ? "Todd"
                               : "Norah"}
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             <div className="inline-flex items-center gap-[17.87px] absolute top-[195px] left-[45px]">
               {[1, 2, 3, 4].map((i) => (
                 <div
                   key={`avatar-row2-${i}`}
                   className="relative w-[160px] h-[150px]"
                 >
                   <div className="relative w-40 h-[145px]">
                     <div className="absolute w-[148px] h-9 top-[109px] left-[7px]">
                       <div className="relative w-[146px] h-9 bg-[#ffffff0d] rounded-[7.71px] border-[0.64px] border-solid border-[#ffffff17] backdrop-blur-[5.46px]">
                         <div className="absolute top-2 left-2.5 font-bold text-[12.8px] leading-[19.3px] whitespace-nowrap [font-family:'Inter_Tight',Helvetica] text-white tracking-[0]">
                           {i === 1
                             ? "Kristin Watson"
                             : i === 2
                               ? "Jane Cooper"
                               : "Leslie Alexander"}
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         ),
       },
       {
         id: 3,
         title: "Bulk Creation",
         description:
           "Generate video ads for dozens of products in minutes at a fraction of the cost and always stay ahead of the curve and in proximity with the latest trends - all with AI UGC.",
         content: (
           <div className="relative w-full h-[266px] overflow-hidden">
             <div className="absolute w-[334px] h-64 top-0 left-0">
               <div className="absolute w-[189px] h-[244px] top-3 left-0 [background:linear-gradient(270deg,rgba(29,29,29,0)_0%,rgba(25,25,25,1)_100%)]" />
             </div>
             <div className="absolute w-[334px] h-[254px] top-3 left-[521px]">
               <div className="absolute w-[189px] h-[232px] top-0 left-[145px] rotate-180 [background:linear-gradient(270deg,rgba(29,29,29,0)_0%,rgba(32,32,32,1)_100%)]" />
             </div>
           </div>
         ),
       },
       {
         id: 4,
         title: "AI Editor",
         description:
           "Take full control of your video ads with an intuitive AI Editor. Make real-time edits, fine-tune messaging, and launch faster for more time to market.",
         content: (
           <div className="relative w-[360px] h-[265px] mx-auto">
             <div className="relative w-[348px] h-60 left-1.5">
               <div className="relative w-[354px] h-[244px] -left-1.5">
                 <div className="absolute w-[50px] h-[50px] top-[65px] left-[30px] bg-white rounded-[25.07px]">
                   <div className="relative w-[31px] h-[31px] top-[9px] left-2.5" />
                 </div>
                 <div className="absolute w-[41px] h-[41px] top-[59px] left-[313px] bg-white rounded-[20.6px]">
                   <img
                     className="absolute w-7 h-7 top-[7px] left-[7px]"
                     alt="Frame"
                     src="https://c.animaapp.com/m9gl9mgojJJwIu/img/frame-1.svg"
                   />
                 </div>
                 <img
                   className="absolute w-[352px] h-[101px] top-[143px] left-0"
                   alt="Group"
                 />
               </div>
             </div>
           </div>
         ),
       },
       {
         id: 5,
         title: "AI Script Generator",
         description:
           "Quickly test multiple messaging angles in performance ads without lifting a finger. Let AI analyze your products and generate conversion-oriented video scripts.",
         content: (
           <div className="relative w-full h-[265px]">
             <div className="relative w-[502px] h-[264px] mx-auto">
               <div className="absolute w-[502px] h-[258px] top-1.5 left-0">
                 <img
                   className="absolute w-[338px] h-[211px] top-[19px] left-0"
                   alt="Rectangle"
                   src="https://c.animaapp.com/m9gl9mgojJJwIu/img/rectangle-5941.svg"
                 />
                 <div className="px-3 py-1.5 absolute top-[191px] left-[190px] border-[#8f5bfe] inline-flex items-start gap-[5px] rounded-[94px] border border-solid [background:linear-gradient(90deg,rgba(10,6,21,0.4)_0%,rgba(33,29,43,0.4)_100%)]">
                   <div className="relative w-[15px] h-[15px]">
                     <div className="relative w-[11px] h-[11px] top-0.5 left-0.5" />
                   </div>
                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[15.6px] whitespace-nowrap">
                     Generate with AI
                   </div>
                 </div>
                 <div className="absolute w-[307px] top-[37px] left-4 opacity-60 [font-family:'Inter_Tight',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[15.9px]">
                   "Hi, ladies! I just had to share this little beauty gem I found
                   recently…"
                   <br />
                   <br />
                   This is the beauty by brand. It's honestly been a game-changer for
                   my daily routine."
                   <br />
                   <br />
                   It feels so light on the skin, blends beautifully, and gives me.
                 </div>
               </div>
               <div className="absolute top-0 left-1 [font-family:'Inter_Tight',Helvetica] font-bold text-white text-sm tracking-[0] leading-[18.5px] whitespace-nowrap">
                 Script
               </div>
             </div>
           </div>
         ),
       },
       {
         id: 6,
         title: "Advance Lip Sync",
         description:
           "Quickly test multiple messaging angles in performance ads without lifting a finger. Let AI analyze your products and generate conversion-oriented video scripts.",
         content: (
           <div className="relative w-full h-[265px] overflow-hidden">
             <div className="relative w-[509px] h-[272px] top-[5px] left-9">
               <div className="relative h-[260px]">
                 <div className="absolute w-[204px] h-[101px] top-[130px] left-0">
                   <div className="relative w-[202px] h-[101px] bg-[url(https://c.animaapp.com/m9gl9mgojJJwIu/img/rectangle-5951.svg)] bg-[100%_100%]">
                     <img
                       className="absolute w-[200px] h-px top-[43px] left-px"
                       alt="Rectangle"
                       src="https://c.animaapp.com/m9gl9mgojJJwIu/img/rectangle-3286.svg"
                     />
                     <img
                       className="absolute w-[19px] h-[19px] top-[11px] left-3"
                       alt="Frame"
                       src="https://c.animaapp.com/m9gl9mgojJJwIu/img/frame.svg"
                     />
                     <div className="inline-flex items-center gap-[9px] absolute top-14 left-3">
                       <div className="flex flex-col w-[119px] items-start gap-px relative">
                         <div className="relative self-stretch mt-[-1.00px] font-semibold text-[9px] leading-[10.8px] [font-family:'Inter_Tight',Helvetica] text-white tracking-[0]">
                           Eddie
                         </div>
                         <div className="relative self-stretch [font-family:'Inter_Tight',Helvetica] font-medium text-[#7a7a7a] text-[8px] tracking-[0] leading-[9.6px]">
                           Commanding yet soothing quality
                         </div>
                       </div>
                     </div>
                     <div className="absolute w-[119px] top-[13px] left-[37px] [font-family:'Inter_Tight',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[16.8px]">
                       Voice library
                     </div>
                   </div>
                 </div>
                 <div className="absolute w-[227px] h-[45px] top-[132px] left-[282px] bg-[url(https://c.animaapp.com/m9gl9mgojJJwIu/img/rectangle-5951-1.svg)] bg-[100%_100%]">
                   <div className="absolute w-[174px] h-3.5 top-[15px] left-[47px]">
                     <div className="absolute w-[99px] h-1 top-1.5 left-[23px] bg-[#d9d9d9] rounded-[10px]">
                       <img
                         className="absolute w-9 h-1 top-0 left-0"
                         alt="Rectangle"
                         src="https://c.animaapp.com/m9gl9mgojJJwIu/img/rectangle-5964.svg"
                       />
                     </div>
                     <div className="absolute top-0.5 left-0 [font-family:'Inter_Tight',Helvetica] font-semibold text-white text-[9px] tracking-[0] leading-[10.8px] whitespace-nowrap">
                       1:32
                     </div>
                     <div className="absolute top-0.5 left-32 [font-family:'Inter_Tight',Helvetica] font-semibold text-white text-[9px] tracking-[0] leading-[10.8px] whitespace-nowrap">
                       06:25
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         ),
       },
     ];

export const Homes = (): JSX.Element => {
       const [slidesPerView, setSlidesPerView] = useState(1);
       const [isMounted, setIsMounted] = useState(false);
       const [selectedPainPoint, setSelectedPainPoint] = useState(0);
       const [showForm, setShowForm] = useState(false);
       const [isOpen, setIsOpen] = useState(false);

       useEffect(() => {
              setIsMounted(true);

              const calculateSlides = () => {
                     if (typeof window !== 'undefined') {
                            setSlidesPerView(Math.max(1, Math.floor(window.innerWidth / 250)));
                     }
              };

              // Calculate initial value
              calculateSlides();

              // Add event listener for resize
              window.addEventListener('resize', calculateSlides);

              // Cleanup function
              return () => {
                     window.removeEventListener('resize', calculateSlides);
              };
       }, []);

       if (!isMounted) {
              // Return null or a loader during SSR
              return <></>;
       }

       return (<>
              <section className="hero-section w-full bg-cover bg-top bg-no-repeat overflow-hidden">
                     <div className="container relative">
                            <div className="absolute bg-center bg-no-repeat blurBg" style={{ backgroundImage: "url(/assets/pages/home/home-hero-bg.svg)" }}></div>
                            <div className="w-full flex-center flex-col pt-40 relative z-2">
                                   <div className="flex flex-col items-center gap-[18px] w-full py-10">
                                          <div className="flex items-center justify-center gap-2.5">
                                                 <div className="text-white text-xl text-center whitespace-nowrap font-text-xl-font-regular">
                                                        Create AI videos for your
                                                 </div>
                                                 <Badge className="inline-flex items-start gap-[5px] px-4 py-1.5 bg-transparent text-white rounded-[94px] border border-solid border-[#8f5bfe] bg-gradient-to-r from-[rgba(10,6,21,0.4)] to-[rgba(33,29,43,0.4)]">
                                                        <div className="relative w-[17px] h-[17px]">
                                                               <AiSVG />
                                                        </div>
                                                        Agency
                                                 </Badge>
                                          </div>
                                          <div className="gap-3 w-full flex flex-col items-center mb-10">
                                                 <div className="relative w-full max-w-[668px] text-white text-center text-7xl font-bold">
                                                        <span className="text-white">Make </span>
                                                        <span className="bg-gradient-to-b from-[#6C43FF] to-[#A0CBFE] text-transparent bg-clip-text text-[length:var(--text-7xl-font-bold-font-size)] text-center leading-[var(--text-7xl-font-bold-line-height)] whitespace-nowrap font-text-7xl-font-bold">
                                                               AI UGC
                                                        </span>
                                                        <div className="text-white"> Videos in Minutes</div>
                                                 </div>

                                                 <div className="w-full max-w-[700px] text-white text-xl text-center font-text-xl-font-regular mb-4">
                                                        Generate high-quality, scalable AI UGC videos that look real,
                                                        speak your script, and sell your products like pros.
                                                 </div>
                                                 <Button variant="default" size="lg">
                                                        <Link href="/sign-up">Get Started</Link>
                                                 </Button>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <Swiper
                            spaceBetween={0}
                            style={{ width: '100%' }}
                            speed={4000} // Adjust speed for slower animation
                            edgeSwipeDetection={true}
                            slidesPerView={slidesPerView}
                            freeMode={false}
                            touchRatio={.5} // Reduce touch ratio for slower dragging
                            cssMode={false}
                            passiveListeners={true}
                            // autoplay={{
                            //        delay: 1000,
                            //        pauseOnMouseEnter: true,
                            //        disableOnInteraction: false,
                            // }}
                            loop={true}
                            watchSlidesProgress={true}
                            loopAdditionalSlides={2}
                            modules={[Autoplay, FreeMode]}
                            className="relative z-2"
                     >
                            {heroSlider.map((item, index) => (
                                   <SwiperSlide key={index} className="p-3">
                                          <div className="rounded-[30px] border border-[0.871px] border-white/10 p-2 bg-[#898989]/20 backdrop-blur-[65.32967376708984px]">
                                                 <div className="overflow-hidden rounded-[20px]">
                                                        <video className="w-full h-full" src={item.src} preload="metadata" autoPlay={true} loop poster={item.thumb} playsInline muted></video>
                                                 </div>
                                          </div>
                                   </SwiperSlide>
                            ))}
                     </Swiper>
              </section>
              <section className="text-center static relative bottom-0 w-full 2xl:mt-[100px] lg:mt-0 pb-[20px] lg:pb-[10px] xl:pb-0">
                     <p className="text-white text-lg mb-4">
                            Trusted by individuals and teams at the world's boldest companies
                     </p>
                     <div className="relative h-[60px] md:h-[55px] lg:h-[65] xl:h-[85px] 2xl:h-[105px] mx-auto bg-auto bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/brand-strip.svg)" }}>
                     </div>
              </section>

              <section className="pt-[100px] pb-[50px]">
                     <div className="warpper mx-auto max-w-[1170px]" >
                            <div className="md:grid md:grid-cols-3 gap-[24px] pb-[10px] mx-auto max-w-full sm:max-w-[540px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1200px] items-center">
                                   <div className="bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10">
                                          <div className="text-[48px] font-bold mb-[10px] text-transparent bg-gradient-to-b from-[rgba(114,74,255,1)] to-[rgba(195,223,255,1)] bg-clip-text font-text-5xl-font-bold text-center">
                                                 24hr
                                          </div>
                                          <span className="block text-white text-center text-[20px] font-bold leading-6 mb-[12px] mx-auto max-w-[950px]">
                                                 Turnaround
                                          </span>
                                          <p className="text-white text-center text-[18px] font-normal leading-6">
                                                 From brief to live ad in under 24 hours
                                          </p>
                                   </div>
                                   <div className="bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10">
                                          <div className="text-[48px] font-bold mb-[10px] text-transparent bg-gradient-to-b from-[rgba(114,74,255,1)] to-[rgba(195,223,255,1)] bg-clip-text font-text-5xl-font-bold text-center">
                                                 60%
                                          </div>
                                          <span className="block text-white text-center text-[20px] font-bold leading-6 mb-[12px] mx-auto max-w-[950px]">
                                                 Cost Reduction
                                          </span>
                                          <p className="text-white text-center text-[18px] font-normal leading-6">
                                                 Significantly lower production costs
                                          </p>
                                   </div>
                                   <div className="bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10">
                                          <div className="text-[48px] font-bold mb-[10px] text-transparent bg-gradient-to-b from-[rgba(114,74,255,1)] to-[rgba(195,223,255,1)] bg-clip-text text-center">
                                                 300%
                                          </div>
                                          <span className="block text-white text-center text-[20px] font-bold leading-6 mb-[12px] mx-auto max-w-[950px]">
                                                 ROAS
                                          </span>
                                          <p className="text-white text-center text-[18px] font-normal leading-6">
                                                 Average return on ad spend increase
                                          </p>
                                   </div>
                            </div>
                     </div>
              </section>

              {/* <section className="flex flex-col items-center gap-[68px] px-[70px] py-12 w-full bg-black">
                     <div className="flex flex-col items-center gap-5 w-full">
                            <Title tag="h2">Pain Points that Keep You Up at Night, Handled.</Title>
                            <p className='text-[20px] text-white text-center mx-auto max-w-[726px]'>
                                   Managing paid ads shouldn't feel this exhausting. Make AI UGC videos with Tagshop.ai, it's fast, simple, and stress-free
                            </p>
                     </div>
                     <div className="container">
                            <Tabs.Root defaultValue="1" className="w-full flex items-start gap-8 w-50">
                                   <Tabs.List className="flex flex-col w-full items-start gap-8">
                                   {painPoints.map((item) => (
                                          <Tabs.Trigger value={item.id.toString()} key={item.id} className={`text-left w-full transition-colors ${
                                                 selectedPainPoint === item.id ? "text-white" : "text-gray-500 hover:text-gray-400"
                                                 }`}>
                                          <div className="font-text-3xl-font-regular font-[number:var(--text-3xl-font-regular-font-weight)] text-[length:var(--text-3xl-font-regular-font-size)] tracking-[var(--text-3xl-font-regular-letter-spacing)] leading-[var(--text-3xl-font-regular-line-height)] [font-style:var(--text-3xl-font-regular-font-style)]">
                                          {item.text}
                                          </div>
                                          </Tabs.Trigger>
                                          ))}
                                   </Tabs.List>

                                   <Box className="mt-4 flex flex-col w-50">
                                          {painPoints.map((item, index) => (
                                                 <Tabs.Content value={item.id.toString()} key={index} className="p-3">
                                                        <div className="w-full flex justify-center items-center">
                                                               <video className="w-full h-full" src={item.src} preload="metadata" autoPlay={true} loop poster={item.thumb} playsInline></video>
                                                        </div>
                                                 </Tabs.Content>
                                          ))}
                                   </Box>
                            </Tabs.Root>
                     </div>
              </section> */}

              <section className="flex flex-col items-center gap-11 py-12 w-full bg-black">
                     <div className="flex flex-col items-center gap-3">
                            <Badge
                            className="px-4 py-1.5 border-[#3e6eff] rounded-[94px] [background:linear-gradient(90deg,rgba(10,6,21,0.4)_0%,rgba(33,29,43,0.4)_100%)] text-white text-[15px] font-normal [font-family:'Inter_Tight',Helvetica]"
                            variant="outline"
                            >
                            AI-Powered Features ✨
                            </Badge>
                            <Title tag="h2">Smarter Features. Stronger Ads. Simple as That.</Title>
                     </div>

                     <div className="container">
                            <div className="grid grid-cols-6 gap-[24px] mb-[44px]">
                                   <div className="xl:col-span-2 md:col-span-3 col-span-6 bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-[40px] md:mb-0">
                                          <h3 className="text-[24px] text-white font-bold mb-2">URL to Video</h3>
                                          <p className="text-white leading-6">
                                                 Let AI eliminate manual inputting of product specs each time you need a creative.
                                          </p>
                                          <div className="mt-5">
                                                 <video className="w-full h-auto" poster="/assets/pages/home/url-to-video.jpg" playsInline autoPlay loop muted width="800" height="800" preload="none">
                                                        <source src="/assets/pages/home/url-to-video.mp4" type="video/mp4" />
                                                 </video>
                                          </div>
                                   </div>
                                   <div className="xl:col-span-4 md:col-span-3 col-span-6 [background:linear-gradient(145deg,rgba(0,0,0,0)_0%,rgba(78,105,237,.5)_100%)] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[175px] p-6 py-10 mb-[40px] md:mb-0">
                                          <h3 className="text-[24px] text-white font-bold mb-2">Library of Avatars</h3>
                                          <p className="text-white leading-6">
                                                 With a library of 100+ hyper-realistic AI Avatars, always have fresh, scalable content, and launch successful ad campaigns without even hiring influencers.
                                          </p>
                                          <div className="mt-5">
                                                 <img className="w-full h-auto" src='/assets/pages/home/library-avatars-min.png' width='1616' height='613' alt='Library of Avatars' />
                                          </div>
                                   </div>
                            </div>
                            <div className="grid grid-cols-6 gap-[24px] mb-[44px]">
                                   <div className="xl:col-span-4 md:col-span-3 col-span-6 bg-[rgba(137,137,137,0.17)] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-[40px] md:mb-0">
                                          <h3 className="text-[24px] text-white font-bold mb-2">Bulk Creation</h3>
                                          <p className="text-white leading-6">Generate video ads for dozens of products in minutes at a fraction of the cost and always stay ahead of the curve and in proximity with the latest trends - all with AI UGC.</p>
                                          <div className="mt-5">
                                                 <img className="w-full h-auto" src='/assets/pages/home/bulk-creation-min.png' width='1620' height='830' alt='Bulk Creation' />
                                          </div>
                                   </div>
                                   <div className="xl:col-span-2 md:col-span-3 col-span-6 bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-[40px] md:mb-0">
                                          <h3 className="text-[24px] text-white font-bold mb-2">AI Editor</h3>
                                          <p className="text-white leading-6">Take full control of your video ads with an intuitive AI Editor. Make real-time edits, fine-tune messaging, and launch faster for more time to market.</p>
                                          <div className="mt-5">
                                                 <video className="w-full h-auto" poster="/assets/pages/home/ai-editor.jpg" playsInline autoPlay loop muted width="828" height="572" preload="none">
                                                        <source src="/assets/pages/home/ai-editor.mp4" type="video/mp4" />
                                                 </video>
                                          </div>
                                   </div>
                            </div>
                            <div className="grid grid-cols-6 gap-[24px] mb-[24px]">
                                   <div className="md:col-span-3 col-span-6 bg-[rgba(137,137,137,0.17)] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-[40px] md:mb-0">
                                          <h3 className="text-[24px] text-white font-bold mb-2">AI Script Generator</h3>
                                          <p className="text-white leading-6">Quickly test multiple messaging angles in performance ads without lifting a finger. Let AI analyze your products and generate conversion-oriented video scripts.</p>
                                          <div className="mt-5">
                                                 <video className="w-full h-auto" poster="/assets/pages/home/ai-script-generator.jpg" playsInline autoPlay loop muted width="828" height="572" preload="none">
                                                        <source src="/assets/pages/home/ai-script-generator.mp4" type="video/mp4" />
                                                 </video>
                                          </div>
                                   </div>
                                   <div className="md:col-span-3 col-span-6 bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-[40px] md:mb-0">
                                          <h3 className="text-[24px] text-white font-bold mb-2">Advance Lip Sync</h3>
                                          <p className="text-white leading-6">Deliver video ads with professional-grade precision. Our AI avatars align script and speech perfectly ensuring every word is clear, credible, and conversion-ready.</p>
                                          <div className="mt-5">
                                                 <img className="w-full h-auto" src='assets/pages/home/advance-lip-sync-min.png' width='1170' height='531' alt='Add Product URL' />
                                          </div>
                                   </div>
                            </div>
                     </div>
              </section>

              <section className="flex flex-col items-center gap-11 py-[100px] w-full bg-black bg-top bg-no-repeat" style={{ backgroundImage: "url(/assets/pages/home/section-bg.svg)" }}>
                     <div className="container">
                            <div className="flex flex-col items-center gap-3 mb-[60px]">
                                   <Badge
                                   className="px-4 py-1.5 border-[#3e6eff] rounded-[94px] [background:linear-gradient(90deg,rgba(10,6,21,0.4)_0%,rgba(33,29,43,0.4)_100%)] text-white text-[15px] font-normal [font-family:'Inter_Tight',Helvetica]"
                                   variant="outline"
                                   >
                                   Easy Process ⚡
                                   </Badge>
                                   <Title tag="h2">Video Creation So Fast You'll Swear You Felt a Breeze</Title>
                            </div>
                            <div className="grid grid-cols-12 gap-[24px] mb-[44px]">
                                   <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 bg-[#0000000d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] p-6 py-10 mb-[40px] md:mb-0">
                                          <video className="w-full h-auto" poster="/assets/pages/home/add-product-url.jpg" playsInline autoPlay loop muted width="828" height="572" preload="none">
                                                 <source src="/assets/pages/home/add-product-url.mp4" type="video/mp4" />
                                          </video>
                                          <span className='inline-block text-white text-[13px] px-[13px] py-[4px] bg-[#3E6FFF] rounded-[36px] mb-[8px] mt-[30px]'>Step 01</span>
                                          <h3 className="text-[20px] text-white font-bold mb-[5px]">Add Product URL</h3>
                                          <p className="text-gray-300 leading-6">
                                                 Manual entering product specs? That's vintage. Just add your product's URL and let us analyze and fetch details quickly.
                                          </p>
                                   </div>
                                   <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 [background:linear-gradient(145deg,rgba(0,0,0,0)_0%,rgba(78,105,237,.5)_100%)] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[175px] p-6 py-10 mb-[40px] md:mb-0">
                                          <video className="w-full h-auto" poster="/assets/pages/home/select-avatar.jpg" playsInline autoPlay loop muted width="800" height="800" preload="none">
                                                 <source src="/assets/pages/home/select-avatar.mp4" type="video/mp4" />
                                          </video>
                                          <span className='inline-block text-white text-[13px] px-[13px] py-[4px] bg-[#3E6FFF] rounded-[36px] mb-[8px] mt-[30px]'>Step 02</span>
                                          <h3 className="text-[20px] text-white font-bold mb-[5px]">Select Avatar</h3>
                                          <p className="text-gray-300 leading-6">
                                                 Got a prefrence? We have a library of 100+ avatars or custom avatar creation to cater to your audience.
                                          </p>
                                   </div>
                                   <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 [background:linear-gradient(145deg,rgba(0,0,0,0)_0%,rgba(78,105,237,.5)_100%)] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[175px] p-6 py-10 mb-[40px] md:mb-0">
                                          <video className="w-full h-auto" poster="/assets/pages/home/generate-video-script.jpg" playsInline autoPlay loop muted width="800" height="800" preload="none">
                                                 <source src="/assets/pages/home/generate-video-script.mp4" type="video/mp4" />
                                          </video>
                                          <span className='inline-block text-white text-[13px] px-[13px] py-[4px] bg-[#3E6FFF] rounded-[36px] mb-[8px] mt-[30px]'>Step 03</span>
                                          <h3 className="text-[20px] text-white font-bold mb-[5px]">Generate Video Script</h3>
                                          <p className="text-gray-300 leading-6">
                                                 Leave the boring to us. We do result-driven, ready-to-shoot video scripts that match your messaging 10/10. 
                                          </p>
                                   </div>
                                   <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 [background:linear-gradient(145deg,rgba(0,0,0,0)_0%,rgba(78,105,237,.5)_100%)] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[175px] p-6 py-10 mb-[40px] md:mb-0">
                                          <video className="w-full h-auto" poster="/assets/pages/home/export-launch.jpg" playsInline autoPlay loop muted width="800" height="800" preload="none">
                                                 <source src="/assets/pages/home/export-launch.mp4" type="video/mp4" />
                                          </video>
                                          <span className='inline-block text-white text-[13px] px-[13px] py-[4px] bg-[#3E6FFF] rounded-[36px] mb-[8px] mt-[30px]'>Step 04</span>
                                          <h3 className="text-[24px] text-white font-bold mb-2">Export & Launch</h3>
                                          <p className="text-gray-300 leading-6">
                                                 Download your high-quality AI UGC video or directly push it to Meta & TikTok for high-converting ads. 
                                          </p>
                                   </div>  
                            </div>
                     </div>
              </section>

              <section className="flex flex-col items-center gap-11 py-12 w-full bg-black">
                     <div className="flex flex-col items-center gap-3">
                            <Title tag="h2">Create Ads For</Title>
                     </div>
                     <div className="container">
                            <div className="grid grid-cols-5 gap-[24px] mb-[24px]">
                                   <div className="col-span-1">
                                          <img src="/assets/logo/social/pintrest.svg" alt="" />
                                   </div>
                                   <div className="col-span-1">
                                          <img src="/assets/logo/social/youTube.svg" alt="" />
                                   </div>
                                   <div className="col-span-1">
                                          <img src="/assets/logo/social/meta.svg" alt="" />
                                   </div>
                                   <div className="col-span-1">
                                          <img src="/assets/logo/social/tikTok.svg" alt="" />
                                   </div>
                                   <div className="col-span-1">
                                          <img src="/assets/logo/social/linkedIn.svg" alt="" />
                                   </div>
                            </div>
                     </div>
              </section>
              <section className="flex flex-col items-center gap-11 py-12 w-full bg-black">
                     <div className="flex flex-col items-center gap-3">
                            <Badge
                            className="px-4 py-1.5 border-[#3e6eff] rounded-[94px] [background:linear-gradient(90deg,rgba(10,6,21,0.4)_0%,rgba(33,29,43,0.4)_100%)] text-white text-[15px] font-normal [font-family:'Inter_Tight',Helvetica]"
                            variant="outline"
                            >
                            Built to Scale 🚀
                            </Badge>
                            <Title tag="h2">The Only Creative AI UGC Video Tool You Need </Title>
                     </div>
                     <div className="container">
                            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                                   {/* Pricing Card */}
                                   <div className="flex flex-col w-full p-6 mx-auto max-w-lg text-start text-white bg-black rounded-lg border-solid border-[#ffffff17] border">
                                          <div className='border-b border-solid pb-[23px] mb-[23px] border-bottom border-[#ffffff17]'>
                                                 <span className="block text-start mb-[3px] text-2xl font-semibold">AI Avatars</span>
                                                 <div className="flex justify-start items-baseline mb-[23px]">
                                                        <span className="mr-2 text-[36px] font-semibold">$29</span>
                                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                                 </div>
                                                 <Button className='w-full' variant="outline" size="default" onClick={() => setIsOpen(true)}>Get Started</Button>
                                          </div>
                                          <div className='text-white text-start text-[14px] font-bold mb-[12px]'>
                                                 Includes
                                          </div>
                                          {/* List */}
                                          <ul role="list" className="mb-8 space-y-4 text-left">
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>5 Videos</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>URL to Video</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Export without watermark</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>AI-Assisted Script Generation</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Sound Effects & Background Music</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Video Editing Interface</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Custom AI Video Hooks</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Languages (UK & US eng)</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>5 templates</span>
                                                 </li>
                                          </ul>
                                   </div>
                                   <div className="flex flex-col w-full p-6 mx-auto max-w-lg text-center text-white bg-black rounded-lg border-solid border-[#ffffff17] border">
                                          <div className='border-b border-solid pb-[23px] mb-[23px] border-bottom border-[#ffffff17]'>
                                                 <span className="block text-start mb-[3px] text-2xl font-semibold">Premium AI Avatars </span>
                                                 <div className="flex justify-start items-baseline mb-[23px]">
                                                        <span className="mr-2 text-[36px] font-semibold">$99</span>
                                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                                 </div>
                                                 <Button className='w-full' variant="default" size="default" onClick={() => setIsOpen(true)}>Get Started</Button>
                                          </div>
                                          <div className='text-white text-start text-[14px] font-bold mb-[12px]'>
                                                 Includes
                                          </div>
                                          <ul role="list" className="mb-8 space-y-4 text-left">
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>20 Videos</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>URL to Video</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Export without watermark</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>AI-Assisted Script Generation</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Sound Effects & Background Music</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Custom AI Video Hooks</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Languages 15+</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>10 templates</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Tailored script editing</span>
                                                 </li>
                                          </ul>
                                   </div>
                                   <div className="flex flex-col w-full p-6 mx-auto max-w-lg text-center text-white bg-black rounded-lg border-solid border-[#ffffff17] border">
                                          <div className='border-b border-solid pb-[23px] mb-[23px] border-bottom border-[#ffffff17]'>
                                                 <span className="block text-start mb-[3px] text-2xl font-semibold">Custom creators</span>
                                                 <div className="flex justify-start items-baseline mb-[23px]">
                                                        <span className="mr-2 text-[36px] font-semibold">$249</span>
                                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                                 </div>
                                                 <Button className='w-full' variant="outline" size="default" onClick={() => setIsOpen(true)}>Get Started</Button>
                                          </div>
                                          <div className='text-white text-start text-[14px] font-bold mb-[12px]'>
                                                 Includes
                                          </div>
                                          <ul role="list" className="mb-8 space-y-4 text-left">
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>50 Videos</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>URL to Video</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Export without watermark</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>AI-Assisted Script Generation</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Sound Effects & Background Music</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Video Editing Interface</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Custom AI Video Hooks</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Languages 25+</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>15 templates</span>
                                                 </li>
                                                 <li className="flex items-center space-x-3">
                                                        {priceSvg}
                                                        <span>Campaign Management</span>
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </div>
              </section>

              <section className="flex flex-col items-center gap-11 py-12 w-full bg-black">
                     <div className="flex flex-col items-center gap-3">
                            <Badge className="px-4 py-1.5 border-[#3e6eff] rounded-[94px] [background:linear-gradient(90deg,rgba(10,6,21,0.4)_0%,rgba(33,29,43,0.4)_100%)] text-white text-[15px] font-normal [font-family:'Inter_Tight',Helvetica]" variant="outline" >
                                   Testimonials 🚀
                            </Badge>
                            <Title tag="h2">Testimonials</Title>
                     </div>
                     <div className="container">
                            <div className=''>
                                   <div className='md:flex md:flex-row border rounded-[36px] p-[10px] items-center'>
                                          <div className='author-image'>
                                                 <img src='/assets/pages/home/chris-mahar-min.png' width='661' height='775' />
                                          </div>
                                          <div className='ps-[44px] pe-[31px] mt-[40px] md:mt-0'>
                                                 <img src='/assets/pages/home/rating.svg' width='150' height='25' />
                                                 <span className='block bg-contain bg-start bg-no-repeat text-[24px] font-bold py-3 mt-[19px] mb-[12px]' style={{ backgroundImage: "url(/assets/pages/home/testi-quote.svg)" }}>
                                                        "Great driver of social traffic"
                                                 </span>
                                                 <p className='text-white text-[16px] forn-semibold italic'>
                                                        Ability to aggregate user generated content to drive traffic to our website and convert to tour bookings. Support provided by Prakhar is exceptional.
                                                 </p>
                                                 <p className='text-white text-[16px] forn-semibold italic mt-[25px]'>
                                                        Generating relevant content for our social media to drive traffic.
                                                 </p>
                                                 <div className='flex lg:flex-row justify-between mt-[32px] md:mt-[22px] lg:mt-[42px] xl:mt-[52px]'>
                                                        <div className='flex flex-col'>
                                                               <span className='block text-[20px] font-bold'>-Chris Maher</span>
                                                               <p className='inline-block text-white text-[13px] font-semibold ps-[10px]'>CEO and Founder</p>
                                                        </div>
                                                        <img src='/assets/pages/home/sobroome-logo.svg' width='105' height='51' />
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </section>

              <section className="flex flex-col items-center gap-16 px-8 xl:px-40 py-12 bg-black w-full pb-[60] md:[pb-80] lg:pb-[100] xl:pb-[150px]  2xl:pb-[200px]">
                     <div className='container'>
                            <div className="flex flex-col items-center gap-[13px] w-full mb-[40px]">
                                   <Title tag="h2" className='mb-0'>Quick answers</Title>
                                   <p className="text-white font-text-xl-font-regular text-[length:var(--text-xl-font-regular-font-size)] text-center tracking-[var(--text-xl-font-regular-letter-spacing)] leading-[var(--text-xl-font-regular-line-height)] [font-style:var(--text-xl-font-regular-font-style)]">
                                          If you can&#39;t find answers there, feel free to reach out anytime
                                   </p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-[29px] mx-auto max-w-[950px]">
                                   {faqItems.map((item, index) => (
                                          <AccordionItem key={index} value={`item-${index}`} className="bg-[#8989890d] rounded-[20px] border border-solid border-[#ffffff17] backdrop-blur-[75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(75px)_brightness(100%)] overflow-hidden" >
                                                 <AccordionTrigger className="px-10 pt-[30px] pb-5 hover:no-underline">
                                                        <div className="text-left text-white text-[24px] font-semibold leading-[1.2]">
                                                        {item.question}
                                                        </div>
                                                 </AccordionTrigger>
                                                 <AccordionContent className="px-10 pb-5">
                                                        <div className="text-[16px] font-regular text-white">
                                                        {item.answer}
                                                        </div>
                                                 </AccordionContent>
                                          </AccordionItem>
                                   ))}
                            </Accordion>
                     </div>
              </section>

              <section className='mb-[116px]' >
                     <div className='container'>
                            <div className="flex flex-col items-center gap-[13px] w-full rounded-[20px] py-[50px] px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/pages/home/footer-bg.svg)" }}>
                                   <Title tag="h2" className='mb-0 2xl:text-[60px] leading-[1.2]'>Ready to Scale Your Ad Performance?</Title>
                                   <p className='text-[20px] text-white text-center mx-auto max-w-[480px] md:max-w-[726px]'>
                                          Join thousands of marketers creating high-converting video ads at scale
                                   </p>
                                   <Button variant="secondary" size="lg" className='mt-[22px] xl:mt-[32px]'>Talk to Us</Button>
                            </div>
                     </div>
              </section>

              {/* <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Open Contact Form</button>
              {showForm && <ContactForm onClose={() => setShowForm(false)} />} */}

              <HubspotModal formId="95e4e18a-9b32-4af0-a55f-105f4c31ebbd" isOpen={isOpen} setIsOpen={setIsOpen} />
              
       </>
       );
};
