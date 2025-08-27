"use client"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        // Show navbar when scrolling up or at top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true)
        } else {
          // Hide navbar when scrolling down
          setIsVisible(false)
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-xs sm:text-sm font-medium">
        <div className="flex items-center justify-center gap-2 px-4">
          <span className="truncate">GET 10% OFF ON YOUR FIRST ORDER</span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <h1
                  className="text-black text-lg font-extrabold leading-5 sm:text-xl hover:text-gray-600 transition-colors"
                  style={{ fontFamily: "BRADHI, sans-serif" }}
                >
                  SHOE STYLE
                </h1>
              </a>
            </div>

            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-6 xl:space-x-8">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-medium px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      MEN
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[200px] gap-3 p-4">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/men/casual"
                        >
                          <div className="text-sm font-medium leading-none">Casual</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/men/formal"
                        >
                          <div className="text-sm font-medium leading-none">Formal</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/men/boots"
                        >
                          <div className="text-sm font-medium leading-none">Boots</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/men/belt"
                        >
                          <div className="text-sm font-medium leading-none">Belt</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/men/wallets"
                        >
                          <div className="text-sm font-medium leading-none">Wallets</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/men/jerkins"
                        >
                          <div className="text-sm font-medium leading-none">Jerkins</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-medium px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      WOMEN
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[200px] gap-3 p-4">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/formals"
                        >
                          <div className="text-sm font-medium leading-none">Formals</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/casuals"
                        >
                          <div className="text-sm font-medium leading-none">Casuals</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/heel"
                        >
                          <div className="text-sm font-medium leading-none">Heel</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/handbags"
                        >
                          <div className="text-sm font-medium leading-none">Handbags</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/wallets"
                        >
                          <div className="text-sm font-medium leading-none">Wallets</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/belt"
                        >
                          <div className="text-sm font-medium leading-none">Belt</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/women/jerkin"
                        >
                          <div className="text-sm font-medium leading-none">Jerkin</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-medium px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      KIDS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[200px] gap-3 p-4">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/kids/boys"
                        >
                          <div className="text-sm font-medium leading-none">Boys</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/kids/girls"
                        >
                          <div className="text-sm font-medium leading-none">Girls</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-gray-600 text-sm font-bold px-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      ACCESSORIES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[200px] gap-3 p-4">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/bagpack"
                        >
                          <div className="text-sm font-medium leading-none">Bagpack</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/laptop-bag"
                        >
                          <div className="text-sm font-medium leading-none">Laptop Bag</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/sling-bag"
                        >
                          <div className="text-sm font-medium leading-none">Sling Bag</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/gloves"
                        >
                          <div className="text-sm font-medium leading-none">Gloves</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/passport-holder"
                        >
                          <div className="text-sm font-medium leading-none">Passport Holder</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/keychain"
                        >
                          <div className="text-sm font-medium leading-none">Keychain</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/accessories/shoe-horn"
                        >
                          <div className="text-sm font-medium leading-none">Shoe Horn</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="text-black hover:text-gray-600 text-sm font-medium px-0"
                      href="/outlet"
                    >
                      OUTLET
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <button
              className="lg:hidden p-2 text-black hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a
                href="/men"
                className="block px-3 py-2 text-sm font-medium text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                MEN
              </a>
              <a
                href="/women"
                className="block px-3 py-2 text-sm font-medium text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                WOMEN
              </a>
              <a
                href="/kids"
                className="block px-3 py-2 text-sm font-medium text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                KIDS
              </a>
              <a
                href="/accessories"
                className="block px-3 py-2 text-sm font-bold text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                ACCESSORIES
              </a>
              <a
                href="/outlet"
                className="block px-3 py-2 text-sm font-medium text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                OUTLET
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
