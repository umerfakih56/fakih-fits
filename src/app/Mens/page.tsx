'use client'; 
import React, { useState } from 'react';

const products = [
  // Summer Category
  {
    id: 1,
    title: "Dark gray",
    category: "Kurta wear",
    price: "3999",
    imageUrl: "https://manyavar.scene7.com/is/image/manyavar/Untitled+Session6922_08-11-2022-04-58-2:650x900",
  },
  {
    id: 2,
    title: "Aqua blue",
    category: "Kurta wear",
    price: "4999",
    imageUrl: "https://manyavar.scene7.com/is/image/manyavar/Manyavar0332_05-12-2022-01-25:650x900",
  },
  {
    id: 3,
    title: "Navy Blue",
    category: "Kurta wear",
    price: "5999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxjZLzCGfNEUAhkirKJTgZqJvCo35EVf_1dRn2-WqZQojiJW9moHIYhLVP4WmXuN9F_s&usqp=CAU",
  },
  {
    id: 4,
    title: "Lighty Browny",
    category: "Kurta wear",
    price: "4999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncNQ-eoSvKOsCY3aaTQfNGy19Iyp8OSXIzQ&s",
  },
  {
    id: 5,
    title: "Plain whity",
    category: "Kurta wear",
    price: "4999",
    imageUrl: "https://manyavar.scene7.com/is/image/manyavar/SDES524_340-Warm%20White.35769_16-11-2023-17-10:650x900",
  },
  {
    id: 6,
    title: "Suited Brown",
    category: "Kurta wear",
    price: "3999",
    imageUrl: "https://www.bargello.com/images/thumbs/0015431_classic-embroidered-mens-kurta_800.jpeg",
  },
  {
    id: 7,
    title: "Peach Feast",
    category: "Kurta wear",
    price: "1999",
    imageUrl: "https://menswear.pk/wp-content/uploads/2022/08/ace-mens-kurta-amtks22-001-beige-image1.png",
  },
  {
    id: 8,
    title: "Pista Cormel",
    category: "Kurta wear",
    price: "2999",
    imageUrl: "https://img.drz.lazcdn.com/static/np/p/f7ce3646cd1043a7acc2bccf95dbb673.jpg_720x720q80.jpg",
  },
  {
    id: 9,
    title: "Skiffer Blue",
    category: "Kurta wear",
    price: "1999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST53mblJ4iS3pbOVyjbJMNf24BxiGBVAdclSAnwUi7BcMI05UdWsMTCaySl9A6fAfUn_g&usqp=CAU",
  },
  {
    id: 10,
    title: "Royal Esco",
    category: "Kurta wear",
    price: "2999",
    imageUrl: "https://insaffabrics.myshopify.com/cdn/shop/products/Mens-shalwar-kameeez_680x.jpg?v=1521122714",
  },
  {
    id: 11,
    title: "Mahroon Macho",
    category: "Kurta wear",
    price: "1999",
    imageUrl: "https://diners.com.pk/cdn/shop/products/EG3230-MAROON-RS-6990-02.jpg?v=1686066567",
  },
  {
    id: 12,
    title: "lighty Blue",
    category: "Kurta wear",
    price: "1999",
    imageUrl: "https://s.alicdn.com/@sc04/kf/UTB8iJXCzwQydeJk43PUq6AyQpXa8.jpg_720x720q50.jpg",
  },

  // Hoodies
  {
    id: 13,
    title: "Brown",
    category: "Hoodies",
    price: "4999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjv7Pg0ON6pCi_MbjRNOrvGtft1_CHNA8Qw&s",
  },
  {
    id: 14,
    title: "Light Brown",
    category: "Hoodies",
    price: "2999",
    imageUrl: "https://cdn.shopify.com/s/files/1/0245/6459/6816/files/HERITAGE_PATCH_HOODIE_ALMOND_BUTTER_01.webp?v=1713244758",
  },
  {
    id: 15,
    title: "Baggy beige",
    category: "Hoodies",
    price: "3999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ctW5GZ7kzY24DxeXG1JJ_A8rBzykRRA1gHOPuuNdB7ywazDZznFuQiJJ_Yt9MtF5pMI&usqp=CAU",
  },
  {
    id: 16,
    title: "Coolie White",
    category: "Hoodies",
    price: "3999",
    imageUrl: "https://img01.ztat.net/article/spp-media-p1/25e362e1fefa46c1b966d41c789abb9c/7c72432abeb640e6ab411ef680859fd1.jpg?imwidth=1800",
  },
  {
    id: 17,
    title: "Stando White",
    category: "Hoodies",
    price: "2999",
    imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6f30691f-e1dc-47fd-a0bf-a118f35a7c66/M+NK+SOLO+SWSH+FLC+PO+HOODIE.png",
  },
  {
    id: 18,
    title: "Enchant Blue",
    category: "Hoodies",
    price: "1999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWddAUr-qmCW7FTnCDjQWj9_wdoN-N_vKO-coQdky4jECqpnmRvRWTJ08-K2MgMxYuP5I&usqp=CAU",
  },
  {
    id: 19,
    title: "Bloody Red",
    category: "Hoodies",
    price: "4999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkNfloKn2N_uTsdcEz2CjEs44veO7mOrYF6-6jHFMSQxH7TV3pPFSBBoIUJ5fV2-YbNs&usqp=CAU",
  },
  {
    id: 20,
    title: "Felic Blue",
    category: "Hoodies",
    price: "1999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLoMifHJYl4UYwC39UrvWht-VMLP3eOl7_g&s",
  },
  {
    id: 21,
    title: "Armor Green",
    category: "Hoodies",
    price: "2999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLnHUzvqESJjuZz5EH-m7eWuEAjUUoDPXP_bZzMZiSQUPOI3ZJgvtqJIjQ2ndsRLUud8&usqp=CAU",
  },
  {
    id: 22,
    title: "Parrot fodger",
    category: "Hoodies",
    price: "2999",
    imageUrl: "https://m.media-amazon.com/images/I/51ypMd8ngNL._AC_SX569_.jpg",
  },
  {
    id: 23,
    title: "Fiery Zipper",
    category: "Hoodies",
    price: "3999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N2zpHIMh8p83rl6IVmjD2ztsvf1uIw9yJw&s",
  },
  {
    id: 24,
    title: "Royal Purple",
    category: "Hoodies",
    price: "3999",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240307/TGRI/65e957b616fd2c6e6a423a96/nobero-maroon-hoodies-men-15-features-in-1-zipper-travel-hoodie.jpg",
  },

 //Pant Coat
  {
    id: 25,
    title: "Suited Black",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://i.etsystatic.com/40108629/r/il/169109/6036982349/il_300x300.6036982349_drju.jpg",
  },
  {
    id: 26,
    title: "Suited Blue",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://thecambridgeshop.com/cdn/shop/files/CTS2214_2.jpg?v=1701946532&width=600",
  },
  {
    id: 27,
    title: "Suited Dark Gray",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://edenrobe.com/cdn/shop/products/23_M_MenCoatPantFormal_EMTCPC22-6819_1_c9339886-22e0-496d-ad03-682a9f581ae1.jpg?v=1701457634",
  },
  {
    id: 28,
    title: "Suited Brown",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://edenrobe.com/cdn/shop/products/23_M_MenCoatPant_EMTCPC22-6822_1_f36232ef-6373-4bb1-9cda-26bb413ff61c.jpg?v=1701457599",
  },
  {
    id: 29,
    title: "Light Browny",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://edenrobe.com/cdn/shop/products/23_M_MenCoatPant_EMTCPC22-6821_1_38f91c44-e7c4-469c-8bb2-26dbd9437c3b.jpg?v=1701457610",
  },
  {
    id: 30,
    title: "Pato Design Gray",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWSNEDCSi48n6n4gTbqythHZo4YaRKR2aKgHtdcE2Pl88FCRU8vGF92knccI7yb0XpFE&usqp=CAU",
  },
  {
    id: 31,
    title: "Suited Gray",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://shahzebsaeed.com/cdn/shop/files/SF010-2_e887f0a7-574c-44fe-b80c-c8fec1c10616.jpg?v=1690962846",
  },
  {
    id: 32,
    title: "Blackie BLuie",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://www.stylish.com.pk/cdn/shop/files/men-3-pcs-coat-pent-navy-blue-stylish-garments-pk-3.jpg?v=1703054268",
  },
  {
    id: 33,
    title: "Knight Gray",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://i.pinimg.com/736x/68/7a/35/687a35edfd68c37611db8abf6e51ca63.jpg",
  },
  {
    id: 34,
    title: "Tough Black",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://shreeman.in/cdn/shop/products/Shreeman2680_23ac0fda-1381-4133-bf5f-aaf19d071941.jpg?v=1653735594&width=1920",
  },
  {
    id: 35,
    title: "Wildy Blufo",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://img.ltwebstatic.com/images3_spmp/2024/04/07/f9/17124589881c06b53954e6cbd65f75bbdab1ad322d_thumbnail_750x999.webp",
  },
  {
    id: 36,
    title: "Decent White",
    category: "PantCoat",
    price: "4999",
    imageUrl: "https://image.made-in-china.com/202f0j00nclkpqIECVob/Junyu-Latest-Design-Red-Pattern-Pant-Coat-Shawl-Lapel-New-Style-Wedding-Dress-Suits-Tuxedo-for-Men.webp",
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
            className="bg-gradient-to-r from-gray-700 to-gray-300 rounded-lg shadow-lg p-6 transition-all ease-in-out duration-300 hover:scale-105 transform"
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
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors ease-in-out duration-300"
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
        {renderProducts(0, 12, "Kurta wear")}
        {renderProducts(12, 24, "Hoodies")}
        {renderProducts(24, 36, "Pant coat")}
      </div>
      <div className="mt-10">
     
        <ul className="space-y-4">
          {cart.map((item) => (
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
