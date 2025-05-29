import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/company", label: "Company" },
    { href: "/services", label: "Products & Services" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact Us" },
    { href: "/candidates", label: "For Candidates" },
    { href: "/companies", label: "For Companies" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-black border-b-2 border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-3xl font-black text-white tracking-tight">TALENDY</span>
              <span className="text-xs text-gray-400 block -mt-1 font-semibold">Tech Talent Platform</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 font-bold text-lg ${
                    isActive(item.href)
                      ? "text-orange-500 border-b-3 border-orange-500"
                      : "text-white hover:text-orange-500"
                  } pb-2 whitespace-nowrap`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black border-l-2 border-gray-700">
                <div className="flex flex-col space-y-6 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-xl font-bold transition-colors ${
                        isActive(item.href)
                          ? "text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
