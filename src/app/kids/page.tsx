'use client'; 
import React, { useState } from 'react';

const products = [
  // Infants Category
  
  {
    id: 1,
    title: "Blue Romper",
    category: "Infants",
    price: "2000.Rs",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsZH6yA9yz3U2Mau_PL-pJjxOdccEMnVEmQ&s",
  },
  {
    id: 2,
    title: "Blue romper white dot",
    category: "Infants",
    price: "1999.Rs",
    imageUrl: "https://bachaaparty.com/cdn/shop/files/DSC_5124_7ebf3a72-c4bf-4663-971c-da17d08cfd74_1080x.jpg?v=17251Rs036",
  },
  {
    id: 3,
    title: "Baby Panda",
    category: "Infants",
    price: "2999.Rs",
    imageUrl: "https://m.media-amazon.com/images/I/61HwoqZA7+L._AC_SR175,263_.jpg",
  },
  {
    id: 4,
    title: "Yello fellow",
    category: "Infants",
    price: "3999.Rs",
    imageUrl: "https://littlekiddy.com/cdn/shop/files/wechatimg9044.jpg?v=1704437313&width=533",
  },
  {
    id: 5,
    title: "Baby boo",
    category: "Infants",
    price: "1800.Rs",
    imageUrl: "https://down-my.img.susercontent.com/file/my-11134207-7r98u-lrznnxocfuasf9",
  },
  {
    id: 6,
    title: "Yellow king",
    category: "Infants",
    price: "1500.Rs",
    imageUrl: "https://i5.walmartimages.com/seo/TAIAOJING-Baby-Boys-Girls-One-Piece-Romper-Jumpsuit-Clothes-Striped-Solid-Bodysuit-Short-Gentleman-Sleeve-Jumpsuit-Outfit-12-18-Months_6f227a23-4fe4-4f1c-8c4e-0a1765cb4d43.cf14faaf56cabe3759edbedecc6afd72.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 7,
    title: "Dad's princess",
    category: "Infants",
    price: "2400.Rs",
    imageUrl: "https://littlekiddy.com/cdn/shop/files/whatsapp_image_2023-05-17_at_1.27.47_pm.jpg?v=1704447089&width=533",
  },
  {
    id: 8,
    title: "Best Sister",
    category: "Infants",
    price: "2150.Rs",
    imageUrl: "https://m.media-amazon.com/images/I/51ivb7mEQ+S._AC_SY350_.jpg",
  },
  {
    id: 9,
    title: "Cookie Me",
    category: "Infants",
    price: "2870.Rs",
    imageUrl: "https://littlekiddy.com/cdn/shop/files/whatsapp_image_2023-05-17_at_1.28.13_pm.jpg?v=1704444172&width=533",
  },
  {
    id: 10,
    title: "Wolf Folk",
    category: "Infants",
    price: "1900.Rs",
    imageUrl: "https://m.media-amazon.com/images/I/61jyFfUU9BL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 11,
    title: "Captain America",
    category: "Infants",
    price: "1800.Rs",
    imageUrl: "https://img.fruugo.com/product/6/11/761832116_max.jpg",
  },
  {
    id: 12,
    title: "Meow!!",
    category: "Infants",
    price: "1500.Rs",
    imageUrl: "https://i5.walmartimages.com/asr/5a64a5be-e9b4-4485-82fd-5e9b61c7c568.789a84e15dcb068ca93f3daa69a89b29.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },

  // Childhood Category
  {
    id: 13,
    title: "Pinky pooh",
    category: "Childhood",
    price: "2200.Rs",
    imageUrl: "https://kidscreations.pk/cdn/shop/files/mangosurf_grande.png?v=1715508982",
  },
  {
    id: 14,
    title: "Peace",
    category: "Childhood",
    price: "2100.Rs",
    imageUrl: "https://img.freepik.com/free-photo/cute-redhead-boy-with-good-looking-hairstyle-white-t-shirt-holding-holding-hands-pockets-gently-smiling_176420-15463.jpg",
  },
  {
    id: 15,
    title: "Plain Yellow",
    category: "Childhood",
    price: "2000.Rs",
    imageUrl: "https://st4.depositphotos.com/1465849/27816/i/450/depositphotos_278167290-stock-photo-happy-dark-child-with-yellow.jpg",
  },
  {
    id: 16,
    title: "Crazy Batman",
    category: "Childhood",
    price: "3999.Rs",
    imageUrl: "data:image/jpeg;base64,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",
  },
  {
    id: 17,
    title: "Micky Mouse",
    category: "Childhood",
    price: "2100.Rs",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230616/0WnI/648b8ed142f9e729d746751c/-473Wx593H-466278263-blue-MODEL.jpg",
  },
  {
    id: 18,
    title: "Funny Frog",
    category: "Childhood",
    price: "1900.Rs",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc9xypH8U5Kn9J0m-i7t3vto7YkAVwV2veQ&s",
  },
  {
    id: 19,
    title: "Batman",
    category: "Childhood",
    price: "1800.Rs",
    imageUrl: "https://down-my.img.susercontent.com/file/b72b211b9939f5ad11dd8fdc2544f94c",
  },
  {
    id: 20,
    title: "Chubby Cat",
    category: "Childhood",
    price: "2750.Rs",
    imageUrl: "https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp",
  },
  {
    id: 21,
    title: "Superman",
    category: "Childhood",
    price: "2400.Rs",
    imageUrl: "https://www.fashionholic.pk/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-17-at-3.42.08-PM-3-scaled.jpeg",
  },
  {
    id: 22,
    title: "Photo blue",
    category: "Childhood",
    price: "2999.Rs",
    imageUrl: "https://s46675.pcdn.co/wp-content/uploads/2010/05/photography-t-shirt.jpg",
  },
  {
    id: 23,
    title: "Snap it",
    category: "Childhood",
    price: "2000.Rs",
    imageUrl: "https://image.spreadshirtmedia.com/image-server/v1/products/T1361A2PA4318PT17X48Y46D1011445407W25000H25000/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2/snapchat-logo.jpg",
  },
  {
    id: 24,
    title: "EVOLUTON",
    category: "Childhood",
    price: "1900.Rs",
    imageUrl: "https://m.media-amazon.com/images/I/61-KbsPYv1L._AC_SY350_QL65_.jpg",
  },

  // Adult Category
  {
    id: 25,
    title: "Navy Blue",
    category: "Adult",
    price: "2250.Rs",
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/5/s/w/36-ls-st-my05-s1-ny-cf-36-louis-stitch-original-imagpbzaandwumra.jpeg?q=20&crop=false",
  },
  {
    id: 26,
    title: "Peach",
    category: "Adult",
    price: "4200.Rs",
    imageUrl: "https://comodafashion.pk/wp-content/uploads/2024/03/DSC_5782.webp",
  },
  {
    id: 27,
    title: "Pinkish White",
    category: "Adult",
    price: "3800.Rs",
    imageUrl: "https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fill,w_2600,h_3597/b_rgb:efefef,c_pad,dpr_1,w_850,h_1176,f_auto,q_auto,fl_progressive/products/Shirts/default/Summer/H9235_102.jpg",
  },
  {
    id: 28,
    title: "Sky blue",
    category: "Adult",
    price: "2500.Rs",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJc-_c_4vgBWythV7oRfoKJRZq7McEjOiInjf4SNyRQXux862QrvVK4sqkpfpYdE08HA0&usqp=CAU",
  },
  {
    id: 29,
    title: "Light Browny",
    category: "Adult",
    price: "2999.Rs",
    imageUrl: "https://snapy.pk/wp-content/uploads/2021/01/light-brown-b.jpg",
  },
  {
    id: 30,
    title: "Doted shirt",
    category: "Adult",
    price: "2110.Rs",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230707/Kvh6/64a82c50eebac147fc5d1d9a/-473Wx593H-469524298-brown-MODEL.jpg",
  },
  {
    id: 31,
    title: "Royal Purple",
    category: "Adult",
    price: "4260.Rs",
    imageUrl: "https://img01.ztat.net/article/spp-media-p1/ba2fefb9b2da442896f5858ccf67ac4c/e1cc6e7cd1e6424a8cfb1e72fbd1f1ea.jpg?imwidth=300",
  },
  {
    id: 32,
    title: "Fudge Brown",
    category: "Adult",
    price: "3090.Rs",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8tGNKTVnT1bI6qVSC9I7U3naBWybumIyeuSlTdQQD_pM9YYKzwnSdLZPcC79V3Vn-No&usqp=CAU",
  },
  {
    id: 33,
    title: "Plain Black",
    category: "Adult",
    price: "3700.Rs",
    imageUrl: "https://m.media-amazon.com/images/I/31kInHUGBFL._AC_.jpg",
  },
  {
    id: 34,
    title: "Tough Blue",
    category: "Adult",
    price: "3500.Rs",
    imageUrl: "https://cdn.dsmcdn.com/mnresize/400/-/ty1336/product/media/images/prod/PIM/20240528/13/9eff2ffc-b169-460d-90a0-450b0eb7c868/1_org_zoom.jpg",
  },
  {
    id: 35,
    title: "Patro Green",
    category: "Adult",
    price: "3999.Rs",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6UbP-_LRrGHqMlvY0ynEtRIkElatXZU5o_pRrxlJypMLyiEr8tm5UM6wtGHZp8WUIPY&usqp=CAU",
  },
  {
    id: 36,
    title: "Decent White",
    category: "Adult",
    price: "2999.Rs",
    imageUrl: "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP2505.jpg?v=1700626908",
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
            className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-lg p-6 transition-all ease-in-out duration-3Rs hover:scale-105 transform"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-40 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium">{product.title}</h3>
            <p className="text-gray-5Rs">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-orange-400 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors ease-in-out duration-3Rs"
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
        {renderProducts(0, 12, "Infants")}
        {renderProducts(12, 24, "Childhood")}
        {renderProducts(24,36,"Teenagers")}
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
