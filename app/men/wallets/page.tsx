import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CategoryCardItem from "@/components/ui/categoryCardItem"
import FilterDrawer from "@/components/ui/filterDrawer"
import ProductGrid from "@/components/ui/productGrid"

type Props = {}

const MenWalletsPage = (props: Props) => {
  const categories = [
    {
      name: "bi-fold wallets",
      imageLink:
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/men_accessories_iwp_Copy_2_a1753e59ce.jpg",
      link: "#",
    },
    {
      name: "tri-fold wallets",
      imageLink:
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/men_clothing_iwp_Copy_2_632bbe86dd.jpg",
      link: "#",
    },
    {
      name: "card holders",
      imageLink:
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/men_shoes_iwp_ddcd3d7872.jpg",
      link: "#",
    },
  ]

  return (
    <div>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <main className="relative pt-[120px] sm:pt-[140px] px-4 sm:px-8 lg:px-32">
          {/* Breadcrumb section */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/men">Men</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/men/wallets">Wallets</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {/* Page title */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 mb-8">
            <h1 className="font-extrabold text-3xl sm:text-4xl">MEN WALLETS</h1>
            <span className="text-gray-500 text-sm sm:text-xs mt-1 sm:mt-0">[31]</span>
          </div>

          {/* Category section */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-full sm:w-[90%] top-0 bottom-0"></div>
            <div className="pt-4 pb-8 flex space-x-4 overflow-x-auto sm:overflow-visible px-2 sm:px-0">
              {categories.map((category) => (
                <CategoryCardItem
                  key={category.name}
                  name={category.name}
                  link={category.link}
                  imageLink={category.imageLink}
                />
              ))}
            </div>

            {/* Product List Section */}
            <div className="mb-6">
              <FilterDrawer />
              <div className="my-1 border-t border-gray-200"></div>
            </div>
            <div className="container mx-auto px-2 sm:px-0 py-12">
              <ProductGrid />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MenWalletsPage
