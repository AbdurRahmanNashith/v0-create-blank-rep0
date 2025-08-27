"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(0)
  const [showMore, setShowMore] = useState(false)

  const colors = [
    { name: "Dark Brown / Off White / Gum", image: "/brown-cow-print-adidas-samba-shoes.png" },
    { name: "Black / White", image: "/black-white-adidas-samba-shoes.png" },
    { name: "White / Green", image: "/white-green-adidas-samba-shoes.png" },
    { name: "Navy / White", image: "/navy-white-adidas-samba-shoes.png" },
    { name: "Pink / White", image: "/pink-white-adidas-samba-shoes.png" },
    { name: "Brown / Cream", image: "/brown-cream-adidas-samba-shoes.png" },
    { name: "Burgundy / White", image: "/burgundy-white-adidas-samba-shoes.png" },
  ]

  const sizes = [
    { size: "3", available: true },
    { size: "3.5", available: false },
    { size: "4", available: true },
    { size: "4.5", available: false },
    { size: "5", available: true },
    { size: "5.5", available: false },
    { size: "6", available: true },
    { size: "6.5", available: false },
    { size: "7", available: true },
    { size: "7.5", available: false },
    { size: "8", available: true },
    { size: "8.5", available: false },
    { size: "9", available: true },
    { size: "9.5", available: false },
    { size: "10", available: true },
    { size: "10.5", available: false },
    { size: "11", available: true },
    { size: "11.5", available: false },
    { size: "12", available: true },
    { size: "12.5", available: false },
    { size: "13", available: false },
    { size: "13.5", available: false },
  ]

  const productImages = [
    "/brown-cow-print-adidas-samba-shoes-side-view.png",
    "/brown-cow-print-adidas-samba-shoes-top-view.png",
    "/brown-cow-print-adidas-samba-shoes-bottom-sole-vie.png",
    "/brown-cow-print-adidas-samba-shoes-back-view.png",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing */}
      <div className="pt-[120px] sm:pt-[140px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/" className="flex items-center gap-2 text-black hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/women" className="text-black hover:underline">
              Women
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-500">Shoes</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left side - Product Images (2/3 width on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              {/* Two main product images side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={colors[selectedColor].image || "/placeholder.svg"}
                    alt="Samba OG Shoes"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src="/brown-cow-print-adidas-samba-shoes-top-view.png"
                    alt="Samba OG Shoes Top View"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Show more button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-2 px-8 py-3 border-black text-black hover:bg-black hover:text-white"
                >
                  Show {showMore ? "less" : "more"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
                </Button>
              </div>

              {/* Additional images when "Show more" is clicked */}
              {showMore && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src="/brown-cow-print-adidas-samba-shoes-bottom-sole-vie.png"
                      alt="Samba OG Shoes Sole"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src="/brown-cow-print-adidas-samba-shoes-back-view.png"
                      alt="Samba OG Shoes Back View"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              )}

              {/* Product details sections - Desktop only (moved to bottom on mobile) */}
              <div className="hidden lg:block space-y-4 border-t pt-6 mt-8">
                {/* Reviews */}
                <div className="border-b pb-4">
                  <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto text-left">
                    <span className="text-lg font-medium">Reviews (19)</span>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-black">
                            ★
                          </span>
                        ))}
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </Button>
                </div>

                {/* Description */}
                <div className="border-b pb-4">
                  <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto text-left">
                    <span className="text-lg font-medium">Description</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>

                {/* Details */}
                <div className="border-b pb-4">
                  <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto text-left">
                    <span className="text-lg font-medium">Details</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Product Details (1/3 width on desktop, full width on mobile) */}
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-[140px] lg:self-start">
              {/* NEW badge */}
              <div className="flex justify-end lg:justify-start">
                <span className="bg-white text-black px-3 py-1 text-xs font-medium border border-gray-300">NEW</span>
              </div>

              {/* Product info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Women • Originals</span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-black text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm underline">12</span>
                  </div>
                </div>

                <h1 className="text-2xl font-bold">SAMBA OG SHOES</h1>

                <div className="space-y-1">
                  <p className="text-xl font-bold">₹13 999.00</p>
                  <p className="text-sm text-gray-600">MRP in Indian currency per pair</p>
                  <p className="text-sm text-gray-600">Inclusive of all taxes</p>
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <h3 className="text-base font-medium">Colours</h3>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`aspect-square border-2 overflow-hidden ${
                        selectedColor === index ? "border-black" : "border-gray-200"
                      }`}
                    >
                      <img
                        src={color.image || "/placeholder.svg"}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{colors[selectedColor].name}</p>
              </div>

              {/* Sizes */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">Sizes</h3>
                  <Button variant="link" className="text-sm underline p-0 h-auto">
                    📏 Size guide
                  </Button>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {sizes.map((sizeOption) => (
                    <button
                      key={sizeOption.size}
                      onClick={() => sizeOption.available && setSelectedSize(sizeOption.size)}
                      disabled={!sizeOption.available}
                      className={`aspect-square border text-sm font-medium ${
                        selectedSize === sizeOption.size
                          ? "border-black bg-black text-white"
                          : sizeOption.available
                            ? "border-gray-300 hover:border-black"
                            : "border-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {sizeOption.size}
                      {!sizeOption.available && <span className="block text-xs">🚫</span>}
                    </button>
                  ))}
                </div>

                {/* Size recommendation */}
                <div className="flex items-start gap-2 p-3 border border-gray-300">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">True to size.</span> We recommend ordering your usual size.
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base font-medium">
                  Add to bag
                  <span className="ml-2">🛍️</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-gray-50 py-3 text-base font-medium bg-transparent"
                >
                  Find alternatives
                  <span className="ml-auto">→</span>
                </Button>
              </div>

              {/* Delivery info */}
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🚚</span>
                  <span className="text-sm font-medium underline">Free Delivery, Free Returns</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-sm">📦</span>
                  <div className="text-sm">
                    <span className="font-medium underline">
                      Delivery: Delhi, Gurgaon: 1-2 Days, Metro cities:2-3 days , Others: 3-5 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden space-y-4 border-t pt-6 mt-8">
            {/* Reviews */}
            <div className="border-b pb-4">
              <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto text-left">
                <span className="text-lg font-medium">Reviews (19)</span>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-black">
                        ★
                      </span>
                    ))}
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </Button>
            </div>

            {/* Description */}
            <div className="border-b pb-4">
              <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto text-left">
                <span className="text-lg font-medium">Description</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>

            {/* Details */}
            <div className="border-b pb-4">
              <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto text-left">
                <span className="text-lg font-medium">Details</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16"></div>
    </div>
  )
}
