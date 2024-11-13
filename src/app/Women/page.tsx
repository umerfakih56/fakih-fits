'use client'; 
import React, { useState } from 'react';

const products = [
  // Summer Category
  {
    id: 1,
    title: "Elegant Blue",
    category: "Summer Wear",
    price: "2399.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/f3/13/ac/f313ac184b89dc70d61d6a85428d0cd1.jpg",
  },
  {
    id: 2,
    title: "Flora feels",
    category: "Summer Wear",
    price: "3499.(Rs)",
    imageUrl: "https://www.libasejamila.com/wp-content/uploads/2020/03/going-out-summer-dress-8a-683x1024.jpg",
  },
  {
    id: 3,
    title: "Embroided Sky",
    category: "Summer Wear",
    price: "4999.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/a6/9b/86/a69b86e6bc9fcb22162a7b29a3ec21f7.jpg",
  },
  {
    id: 4,
    title: "Swan White",
    category: "Summer Wear",
    price: "4999.(Rs)",
    imageUrl: "https://www.gulahmedshop.com/media/wysiwyg/2024/03_category_icons/12_women_unstitched/09_18/essential.webp?format=jpg",
  },
  {
    id: 5,
    title: "Jet Black",
    category: "Summer Wear",
    price: "5999.(Rs)",
    imageUrl: "https://sowears.net/cdn/shop/files/www-sowears-net-nova-black-embroidered-dress-39285382054096_600x.jpg?v=1697112680",
  },
  {
    id: 6,
    title: "Pleasant Sky",
    category: "Summer Wear",
    price: "6999.(Rs)",
    imageUrl: "https://i.pinimg.com/564x/7b/f8/cc/7bf8ccabc26920dbe0428b43517a0504.jpg",
  },
  {
    id: 7,
    title: "Enhance Pink",
    category: "Summer Wear",
    price: "3999.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/48/14/ed/4814ed24a06e9825b05e19b6c61481c2.jpg",
  },
  {
    id: 8,
    title: "Ethnic Pink",
    category: "Summer Wear",
    price: "7999.(Rs)",
    imageUrl: "https://cdn-live.sanaullastore.com/sanaulla-live/products/product_images/asim-jofa-embroidered-lawn-unstitched-suit-3-piece-aj23el-ajlr-24-luxury-lawn-collection_1.jpeg%3Fwidth%3D440",
  },
  {
    id: 9,
    title: "bright yellow",
    category: "Summer Wear",
    price: "3999.(Rs)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzHrJC5E9RK_NcX4V96a26z4sXCHfe3KXxzdhd3RGFJ90caGQEzXGKjSSaC3H92oINXo&usqp=CAU",
  },
  {
    id: 10,
    title: "Bold White",
    category: "Summer Wear",
    price: "5999.(Rs)",
    imageUrl: "https://nishatlinenfps.com/cdn/shop/products/AS23-06-_1.jpg",
  },
  {
    id: 11,
    title: "Sky pink",
    category: "Summer Wear",
    price: "5999.(Rs)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdfKdeDS4TjYR8OGiaj_83RlHD3uVLjOgKbWExVn1tbrzYveeWCRjl2dnCT28rDZ_5tw&usqp=CAU",
  },
  {
    id: 12,
    title: "Pantic Green",
    category: "Summer Wear",
    price: "3999.(Rs)",
    imageUrl: "https://sowears.net/cdn/shop/files/www-sowears-net-dresses-hannah-lace-dress-in-pastel-green-floral-39582740447440_600x.webp?v=1716873259",
  },

  // Winter Wear
  {
    id: 13,
    title: "Pattern Black",
    category: "Winter Wear",
    price: "4999.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/94/9d/43/949d43dad1c6d79a2c8c4f1762882b40.jpg",
  },
  {
    id: 14,
    title: "Swan White",
    category: "Winter Wear",
    price: "5999.(Rs)",
    imageUrl: "https://la-wardrobe.com/wp-content/uploads/2024/01/bla231223_beige_1-300x500.jpg",
  },
  {
    id: 15,
    title: "Line Gruno",
    category: "Winter Wear",
    price: "6999.(Rs)",
    imageUrl: "https://www.shopmanto.com/cdn/shop/files/6_a7e013d4-2995-4c1a-b7dd-ae258346c6f0.jpg?v=1716573043&width=320",
  },
  {
    id: 16,
    title: "Designo Blue",
    category: "Winter Wear",
    price: "3999.(Rs)",
    imageUrl: "https://www.shopmanto.com/cdn/shop/files/DSC_2476.jpg?v=1700821820&width=320",
  },
  {
    id: 17,
    title: "Plain Green",
    category: "Winter Wear",
    price: "5999.(Rs)",
    imageUrl: "https://www.shopmanto.com/cdn/shop/files/dsc_2595_79f62e54-3993-4cd0-983a-9e50aa4b6042.jpg?v=1701086281&width=320",
  },
  {
    id: 18,
    title: "Pista Green",
    category: "Winter Wear",
    price: "4999.(Rs)",
    imageUrl: "https://mannatclothing.com/cdn/shop/files/Layer41_57f95076-d1f6-44c1-ae9e-c8877d924e0d.jpg?v=1696683882&width=1080",
  },
  {
    id: 19,
    title: "Berry Purple",
    category: "Winter Wear",
    price: "3900.(Rs)",
    imageUrl: "https://mannatclothing.com/cdn/shop/files/resize_e5bd6fc0-b936-4efe-9886-6cbffa9cf9b2.jpg?v=1696684901&width=1080",
  },
  {
    id: 20,
    title: "Pattern Mahroon",
    category: "Winter Wear",
    price: "6999.(Rs)",
    imageUrl: "https://zeenwoman.com/cdn/shop/files/WLM33886.jpg?v=1727674711&width=600",
  },
  {
    id: 21,
    title: "Elegant Blue",
    category: "Winter Wear",
    price: "7900.(Rs)",
    imageUrl: "https://zeenwoman.com/cdn/shop/files/WUM34109.jpg?v=1727349657&width=600",
  },
  {
    id: 22,
    title: "Plainy White",
    category: "Winter Wear",
    price: "8999.(Rs)",
    imageUrl: "https://zeenwoman.com/cdn/shop/files/WUM34311.jpg?v=1729663691&width=600",
  },
  {
    id: 23,
    title: "Emerging Pink",
    category: "Winter Wear",
    price: "5999.(Rs)",
    imageUrl: "https://zeenwoman.com/cdn/shop/files/WUM34301-5.jpg?v=1729598161&width=600",
  },
  {
    id: 24,
    title: "Pleasant baiche",
    category: "Winter Wear",
    price: "4999.(Rs)",
    imageUrl: "https://zeenwoman.com/cdn/shop/files/WUM34402.jpg?v=1727869563&width=600",
  },

  // Spring/Autumn Category
  {
    id: 25,
    title: "Navy Blue",
    category: "Adult",
    price: "9500.(Rs)",
    imageUrl: "https://soffio.pk/cdn/shop/products/image00001_900x.jpg?v=1641200564",
  },
  {
    id: 26,
    title: "Yello Flora",
    category: "Adult",
    price: "7700.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/f9/73/fc/f973fc94b97faccb68a29f256adfb274.jpg",
  },
  {
    id: 27,
    title: "Energizo Orange",
    category: "Adult",
    price: "8300.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/ef/8d/b9/ef8db99b973a71e846abd4e59769eeda.jpg",
  },
  {
    id: 28,
    title: "Ethnic Pink",
    category: "Adult",
    price: "6700.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/83/09/a6/8309a632d5970de9e99ebd9cd4da0c0a.jpg",
  },
  {
    id: 29,
    title: "Printed Red",
    category: "Adult",
    price: "5800.(Rs)",
    imageUrl: "https://i.pinimg.com/736x/5f/cf/0f/5fcf0fea1bbd892ffe994965c887820c.jpg",
  },
  {
    id: 30,
    title: "Fasho Black",
    category: "Adult",
    price: "7200.(Rs)",
    imageUrl: "https://www.shopmanto.com/cdn/shop/files/CopyofShopifyDimension_1.jpg?v=1713181253&width=320",
  },
  {
    id: 31,
    title: "Over Coat Fitter",
    category: "Adult",
    price: "7600.(Rs)",
    imageUrl: "https://www.shopmanto.com/cdn/shop/files/373.jpg?v=1713461027&width=320",
  },
  {
    id: 32,
    title: "Corial line blue",
    category: "Adult",
    price: "6600.(Rs)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSHotlVoifYjIau7hH09eQXHdXlL2_aREyu6VnT0P0wB70qjMg1RXA5Kmmc5NplYboN0&usqp=CAU",
  },
  {
    id: 33,
    title: "Brown Long Skirt",
    category: "Adult",
    price: "8200.(Rs)",
    imageUrl: "https://robespk.com/cdn/shop/files/1_65f315ee-aca6-49fa-ae16-96d73381ca2c_533x.jpg?v=1729423722",
  },
  {
    id: 34,
    title: "Embroied Suit",
    category: "Adult",
    price: "8040.(Rs)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyRep4_4o-CVFStbhuo04VrR2pxlP9Nw1ow&s",
  },
  {
    id: 35,
    title: "Royal Red",
    category: "Adult",
    price: "6999.(Rs)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf0lYYq57ApE1hwz6QP-zCxVxuy5Lasn6Xo0endwu63UdkOUu4unIifAu-f1wppy338k&usqp=CAU",
  },
  {
    id: 36,
    title: "Cindrella Frock",
    category: "Adult",
    price: "9999.(Rs)",
    imageUrl: "https://robespk.com/cdn/shop/files/1_523366cf-79d0-4b38-bfd0-b0f83d1786f5_533x.jpg?v=1724860492",
  },
];

const ProductGrid: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; title: string; price: string }[]>([]);

  const handleAddToCart = (product: { id: number; title: string; price: string }) => {
    setCart([...cart, product]);
  };

  const renderProducts = (start: number, end: number, title: string) => (
    <>
      <h2 className="text-center text-4xl font-semibold mb-8">{title}</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.slice(start, end).map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg shadow-lg p-6 transition-all ease-in-out duration-300 hover:scale-105 transform"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-40 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium">{product.title}</h3>
            <p className="text-gray-500">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-pink-400 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-colors ease-in-out duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container mx-auto py-16">
      <div className="space-y-10">
        {renderProducts(0, 12, "Summer Wear")}
        {renderProducts(12, 24, "Winter Wear")}
        {renderProducts(24,36,"Spring/Autumn Wear")}
      </div>
      <div className="mt-10">
      
        <ul className="space-y-4">
          {cart.map((item: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.title}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;
