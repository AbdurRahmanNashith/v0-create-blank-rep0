import ProductCard from "./productCard";

const products = [
  {
    id: 1,
    name: "Samba OG Shoes",
    price: "₹10 999.00",
    category: "originals",
    colors: 29,
    badge: "Never out of style",
    image: "/black-and-white-adidas-superstar.png",
    isNew: false,
  },
  {
    id: 2,
    name: "SL 72 Rs Shoes",
    price: "₹9 999.00",
    category: "Men originals",
    colors: 11,
    badge: "New",
    image: "/all-black-adidas-superstar.png",
    isNew: true,
  },
  {
    id: 3,
    name: "ULTRABOOST 1.0 SHOES",
    price: "₹17 999.00",
    category: "Men sportswear",
    colors: 11,
    badge: null,
    image: "/beige-tan-superstar.png",
    isNew: false,
  },
  {
    id: 4,
    name: "Liverpool FC 25/26 Home Jersey",
    price: "₹5 999.00",
    category: "Men Football",
    colors: null,
    badge: "New",
    image: "/purple-adidas-superstar.png",
    isNew: true,
  },
  {
    id: 5,
    name: "Liverpool FC 25/26 Away Jersey",
    price: "₹5 999.00",
    category: "Men Football",
    colors: null,
    badge: "New",
    image: "/white-adidas-superstar-side.png",
    isNew: true,
  },
  {
    id: 6,
    name: "Arsenal FC Home Jersey",
    price: "₹5 999.00",
    category: "Men Football",
    colors: null,
    badge: "New",
    image: "/black-and-white-adidas-superstar.png",
    isNew: true,
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
