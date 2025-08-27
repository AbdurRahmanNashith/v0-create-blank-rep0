"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import { useState, useRef } from "react"
import ProductCard from "@/components/ui/productCard"

export default function page() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselApiRef = useRef<any>(null)

  const products = [
    {
      id: 1,
      image: "/black-and-white-adidas-superstar.png",
      price: "₹11 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 2,
      image: "/all-black-adidas-superstar.png",
      price: "₹9 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 3,
      image: "/beige-tan-superstar.png",
      price: "₹11 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 4,
      image: "/purple-adidas-superstar.png",
      price: "₹11 999.00",
      name: "Superstar II Shoes",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 5,
      image: "/white-adidas-superstar-side.png",
      price: "₹12 999.00",
      name: "Superstar Classic",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 6,
      image: "/black-and-white-adidas-superstar.png",
      price: "₹10 999.00",
      name: "Superstar Retro",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 7,
      image: "/all-black-adidas-superstar.png",
      price: "₹13 999.00",
      name: "Superstar Premium",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
    {
      id: 8,
      image: "/beige-tan-superstar.png",
      price: "₹11 499.00",
      name: "Superstar Limited",
      category: "Originals",
      colors: null,
      badge: null,
      isNew: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Added top padding to account for fixed navbar */}
      <main className="relative pt-[88px] sm:pt-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px] sm:min-h-[600px]">
          {/* Left Section */}
          <div className="relative bg-black text-white flex flex-col justify-between p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src="/thoughtful-portrait.png"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 mt-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight">SUPERSTAR</h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-sm">Because icons wear the original icon.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                >
                  <Link href={"/women"}>Shop Women →</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                >
                  <Link href={"/men"}>Shop Men →</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Center Section - Product */}
          <div className="relative bg-gray-100 flex items-center justify-center p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src="/white-adidas-superstar-side.png"
                alt="Adidas Superstar Shoe"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                  Explore Superstar →
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white flex flex-col justify-between p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
              <svg
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-black"
                viewBox="0 0 69 69"
                fill="currentColor"
              >
                <path d="M69 13.2L56.4 35.8L69 58.4L56.4 69L43.8 46.4L31.2 69L18.6 58.4L31.2 35.8L18.6 13.2L31.2 2.6L43.8 25.2L56.4 2.6L69 13.2Z" />
              </svg>
            </div>

            <img
              src="/person-adidas-tracksuit-bw.png"
              alt="Person in Adidas tracksuit"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 mt-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black tracking-tight">
                SUPERSTAR
              </h1>
            </div>
          </div>
        </div>

        {/* Large SUPERSTAR text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white/10 tracking-tighter whitespace-nowrap px-4">
            SUPERSTAR
          </h1>
        </div>
      </main>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-0">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">Originals</button>
              {/* Updated shoe categories */}
              <button className="border border-gray-300 text-black px-6 py-2 text-sm font-medium hover:bg-gray-50">
                Oxford
              </button>
              <button className="border border-gray-300 text-black px-6 py-2 text-sm font-medium hover:bg-gray-50">
                Sneakers
              </button>
              <button className="border border-gray-300 text-black px-6 py-2 text-sm font-medium hover:bg-gray-50">
                Loafers
              </button>
            </div>
            <button className="text-black font-medium underline text-sm">Shop all</button>
          </div>

          <div className="mb-16">
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: true,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
                setApi={(api) => {
                  carouselApiRef.current = api
                  if (api) {
                    api.on("select", () => {
                      setActiveIndex(api.selectedScrollSnap())
                    })
                  }
                }}
              >
                <CarouselContent className="gap-4">
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="basis-1/4 min-w-0">
                      <ProductCard product={product} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 w-12 h-12" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 w-12 h-12" />
              </Carousel>
            </div>

            <div className="relative w-full h-1 mt-8">
              <div
                className="absolute h-1 bg-black transition-all duration-300 ease-out"
                style={{
                  width: "25%", // Each card takes 1/4 of the width
                  left: `${activeIndex * 25}%`,
                }}
              />
            </div>
          </div>

          {/* What's Hot Section */}
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-12 tracking-tight">
              WHAT'S HOT?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
              {/* Y-3 Tennis Card */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-black overflow-hidden mb-4">
                  <img
                    src="/urban-adidas-style.png"
                    alt="Y-3 Tennis"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Y-3 Tennis</h3>
                  <p className="text-sm text-gray-600">As worn by Sascha Zverev.</p>
                  <Button variant="link" className="p-0 h-auto text-black font-medium underline">
                    Shop Now
                  </Button>
                </div>
              </div>

              {/* Liverpool FC Jersey Card */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-4">
                  <img
                    src="/adidas-lifestyle.png"
                    alt="Liverpool FC Jersey"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">WIN A SIGNED LIVERPOOL FC AWAY JERSEY</h3>
                  <p className="text-sm text-gray-600">
                    Stand a chance to own a one-of-a-kind piece of Liverpool FC memorabilia with your adiClub points.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-black font-medium underline">
                    Redeem now
                  </Button>
                </div>
              </div>

              {/* Explore Beyond Limits Card */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-gray-800 overflow-hidden mb-4">
                  <img
                    src="/adidas-street-style.png"
                    alt="Explore Beyond Limits"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">EXPLORE BEYOND LIMITS</h3>
                  <p className="text-sm text-gray-600">adidas TERREX | National Geographic</p>
                  <Button variant="link" className="p-0 h-auto text-black font-medium underline">
                    SHOP NOW
                  </Button>
                </div>
              </div>

              {/* Never Out Of Style Card */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-gray-300 overflow-hidden mb-4">
                  <img
                    src="/adidas-lifestyle-portrait.png"
                    alt="Never Out Of Style"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Never Out Of Style</h3>
                  <p className="text-sm text-gray-600">Shop the best of adidas</p>
                  <Button variant="link" className="p-0 h-auto text-black font-medium underline">
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Shoe Category Section */}
          <div className="pt-12 sm:pt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 tracking-tight text-center">
              PICK YOUR LOOK, FIND YOUR FIT, AND WALK WITH CONFIDENCE!
            </h2>

            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: true,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
              >
                <CarouselContent className="gap-4">
                  <CarouselItem className="basis-1/5 min-w-0">
                    <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                      <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                        <img
                          src="/elegant-brown-oxfords.png"
                          alt="Oxford"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-center border-b-2 border-black pb-1">OXFORD</h3>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/5 min-w-0">
                    <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                      <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                        <img
                          src="/modern-white-sneakers.png"
                          alt="Sneakers"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-center border-b-2 border-black pb-1">SNEAKERS</h3>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/5 min-w-0">
                    <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                      <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                        <img
                          src="/placeholder-6czw9.png"
                          alt="Loafers"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-center border-b-2 border-black pb-1">LOAFERS</h3>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/5 min-w-0">
                    <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                      <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                        <img
                          src="/rugged-brown-hiking-boots.png"
                          alt="Boots"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-center border-b-2 border-black pb-1">BOOTS</h3>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/5 min-w-0">
                    <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                      <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                        <img
                          src="/elegant-black-high-heels.png"
                          alt="Heels"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-center border-b-2 border-black pb-1">HEELS</h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 w-12 h-12" />
              </Carousel>
            </div>
          </div>

          {/* Our Stores Section */}
          <div className="pt-12 sm:pt-16 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 tracking-tight text-center">
              OUR STORES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Store 1 */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st%20store-ztktjDzNHUodAHmdSjVDizv0qkriKU.jpeg"
                    alt="Shoe Style Store 1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">S4</h3>
                  <p className="text-sm text-gray-600">
                    #20/16, 1st Lane, Nethaji Road,
                    <br />
                    (Near Railway Station)
                    <br />
                    Ambur – 635 802
                  </p>
                </div>
              </div>

              {/* Store 2 */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd%20Store-E0EUxvVujHFWagOIv8ZGXVjU3k7lbi.jpeg"
                    alt="Shoe Style Store 2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">S6</h3>
                  <p className="text-sm text-gray-600">
                    #20A/69, Nethaji Road,
                    <br />
                    (Near Railway Station)
                    <br />
                    Ambur – 635 802
                  </p>
                </div>
              </div>

              {/* Store 3 */}
              <div className="group cursor-pointer transition-all duration-300 hover:border-2 hover:border-black p-3 hover:p-1">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20Store-0ANuYciSWPZJuE54s9Be6ZDamO3WdK.png"
                    alt="Shoe Style Store 3"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">S3</h3>
                  <p className="text-sm text-gray-600">
                    #2/1, Kannigapuram, NH-46,
                    <br />
                    (Next to Star Briyani)
                    <br />
                    Ambur – 635 802
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width black section outside of container */}
      <section className="bg-black text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-12 tracking-tight leading-tight"
            style={{ fontFamily: "ITC Avant Garde Gothic, sans-serif" }}
          >
            SHOE STYLE AMBUR FOR QUALITY, COMFORT & STYLE - SINCE 1997
          </h2>

          <div
            className="space-y-6 sm:space-y-8 text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "ITC Avant Garde Gothic, sans-serif" }}
          >
            <p>
              With over 28 years of experience in the footwear and leather industry, Shoe Style Ambur has grown into a
              trusted name for quality, comfort, and style. Since our establishment in 1997, we have been committed to
              crafting and curating an exclusive collection of shoes and leather products that cater to every need —
              from everyday wear to special occasions.
            </p>

            <p>
              Our wide range includes stylish and durable footwear for men, women, and kids, along with premium leather
              goods that reflect timeless craftsmanship. Each product is carefully selected to ensure the perfect blend
              of design, comfort, and durability, making sure our customers always step out in confidence.
            </p>

            <p>
              Over the years, we have built long-lasting relationships with our customers by delivering not just
              products, but also an experience rooted in trust, value, and authenticity. Whether you are looking for
              classic formals, trendy casuals, or comfortable everyday wear, Shoe Style Ambur is your one-stop
              destination for footwear and leather essentials.
            </p>

            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Step in today and discover why we've been the choice of generations since 1997.
            </p>
          </div>
        </div>
      </section>

      {/* SHOE STYLE branding section with promotional banner */}
      <section className="bg-black text-white py-8 sm:py-12">
        <div className="text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 tracking-tight"
            style={{ fontFamily: "BRADHI, sans-serif" }}
          >
            SHOE STYLE
          </h2>
          <p className="text-sm sm:text-base text-gray-300" style={{ fontFamily: "Calibri, sans-serif" }}>
            Since 1997
          </p>
        </div>
      </section>
    </div>
  )
}
