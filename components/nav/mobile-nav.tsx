"use client";

// React and Next Imports
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

// Utility Imports
import { Menu, ArrowRightSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="default" className="lg:hidden px-2">
          <Menu className="h-4 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader>
          <SheetTitle className="text-left">
            <MobileLink
              href="/"
              className="flex items-center text-white"
              onOpenChange={setOpen}
            >
              <ArrowRightSquare className="mr-2 h-4 w-4" />
              <span>{siteConfig.site_name}</span>
            </MobileLink>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col">
            {mainMenu.map((item, index) => (
              <div key={index} className="flex flex-col py-2 border-b border-solid border-[#ffffff17]">
                {item.subMenu ? (
                  <>
                    <button onClick={() => toggleSubmenu(index)} className="flex items-center justify-between text-lg w-full text-white">
                      {item.menu}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform mr-4 ${
                          openSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === index && (
                      <div className="flex flex-col pl-3 py-3">
                        {item.subMenu.map((subItem, subIndex) => (
                          <MobileLink
                            key={subIndex}
                            href={subItem.link}
                            onOpenChange={setOpen}
                            className="text-base py-2 text-white"
                          >
                            {subItem.menu}
                          </MobileLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <MobileLink
                    href={item.link}
                    onOpenChange={setOpen}
                    className="text-lg text-white"
                  >
                    {item.menu}
                  </MobileLink>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}