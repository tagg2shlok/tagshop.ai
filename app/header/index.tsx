'use client'; // Required for client-side interactivity
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MobileNav } from '@/components/nav/mobile-nav';
import Link from 'next/link'
export default function Header() {
      return <header className="fixed w-full max-w-[1400px] mx-auto left-0 right-0 z-10 top-2 px-3 px-md-4">
                  <Card className="bg-[#0000000] rounded-[50px] border border-solid border-[#ffffff17] backdrop-blur-[75px]">
                        <CardContent className="sm:px-4 sm:py-4 px-3 py-3 flex items-center justify-between">
                              <div className="w-[154px] sm:h-[52px] h-[42px] flex items-center">
                                    <Image src="/assets/tagshop-logo.svg" alt="Tagshop Logo" width={152} height={30} />
                              </div>

                              <div className="flex items-center gap-3">
                                    <nav className="mx-2 hidden lg:flex gap-6">
                                          <Link href="/solutions" className="font-semibold text-white text-[15px] tracking-[0] leading-[19.7px]">
                                                Solutions
                                          </Link>
                                          <Link href="/industries" className="font-semibold text-white text-[15px] tracking-[0] leading-[19.7px]">
                                                Industries
                                          </Link>
                                          <Link href="/resources" className="font-semibold text-white text-[15px] tracking-[0] leading-[19.7px]">
                                                Resources
                                          </Link>
                                          <Link href="/pricing" className="font-semibold text-white text-[15px] tracking-[0] leading-[19.7px]">
                                                Pricing
                                          </Link>
                                    </nav>
                                    <div className="flex items-center gap-3">
                                          <Button asChild variant="outline" size="default">
                                                <Link href="/sign-in">Sign-In</Link>
                                          </Button>
                                          <Button asChild variant="default" size="default" className="hidden sm:block">
                                                <Link href="/sign-up">Sign Up For Free</Link>
                                          </Button>
                                    </div>
                                    <MobileNav />
                              </div>
                        </CardContent>
                  </Card>
            </header>
}