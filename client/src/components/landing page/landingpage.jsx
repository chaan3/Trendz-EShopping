import { useState, useEffect } from "react";
import Navbar from "./navbar";
import About from "./about";
import {
  Airplay,
  BabyIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import ScrollSectionbottom from "../scrollanimation/scrollbottom";
import ScrollSectionleft from "../scrollanimation/scrollleft";
import ScrollSectionright from "../scrollanimation/Scrollright";
import Footer from "./Footer";
// import { useEffect, useState } from "react";


const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];
const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];

const Home = () => {
    const slides = [
      "src/assets/banner/banner1.jpg",
      "src/assets/banner/banner2.jpg",
      
      "src/assets/banner/banner4.jpg",
      "src/assets/banner/banner5.jpg",
    
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [slides.length]);

    // slide-dots
    const goToSlide = (index) => {
        setCurrentSlide(index);
      };
    
  
    return (
      <section
        id="home"
        className="h-[80vh] w-full flex flex-col justify-center items-center  text-white transition-all duration-500"
        style={{ backgroundImage: `url('${slides[currentSlide]}')`,
        // backgroundSize: "contain", 
        backgroundPosition: "top center", // Adjusts position
        backgroundRepeat: "",
       
    
    }}
      >
        <h2 className="mt-60  text-4xl font-bold text-pink-900">Elevate Your Style</h2>
        <p className="mt-4 ml-6 text-lg font-bold">Discover the latest trends and timeless fashion pieces.</p>
        <a href="#products" className="mt-6 px-6 py-2 bg-gray-800 rounded-full">Shop Now</a>
        {/* Slider Dots */}
        <div className="relative  mt-6 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-4" : "bg-gray-800"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      </section>
    );
  };

const Shopbycategory=()=>(
   <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Shop by category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
    <Card
      key={categoryItem.id} // Add unique key here
      onClick={() =>
        window.location.href='/auth/login'
      }
      className="cursor-pointer hover:shadow-lg transition-shadow"
    >
      <CardContent className="flex flex-col items-center justify-center p-6">
        <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
        <span className="font-bold">{categoryItem.label}</span>
      </CardContent>
    </Card>
  ))}
  
            </div>
          </div>
        </section>
  
       
)
const Shopbybrand=()=>(
  <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {brandsWithIcon.map((brandItem) => (
        <Card
          onClick={() => window.location.href="/auth/login"}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        >
          <CardContent className="flex flex-col items-center justify-center p-6">
            <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
            <span className="font-bold">{brandItem.label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
)
const Products = () => (
  
    <section id="products" className="p-10 text-center">
    <h2 className="text-3xl font-bold">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {[
        "m-1.webp",
        "tst-1.webp",
        "m-1.webp",
        "tst-1.webp",
        "m-1.webp",
        "tst-1.webp"
       
      ].map((image, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg w-80 h-80">
          <img src={`assets/Men/${image}`} alt={`Fashion Item ${index + 1}`} className="rounded-lg w-full h-48 object-cover" />
          <h3 className="text-lg font-semibold mt-2">Fashion Item {index + 1}</h3>
          <p className="text-gray-600">$49.99</p>
          <button onClick={()=>{window.location.href="/auth/login"}} className="mt-2 px-4 py-2 bg-gray-900 text-white rounded">Buy Now</button>
        </div>
      ))}
    </div>
  </section>
  
);



const Landinglayout = () => (
  <div>
    <Navbar/>
   
    <Home />
    <ScrollSectionbottom>
    <About/>
    </ScrollSectionbottom>
    <ScrollSectionleft>
    <Shopbycategory/>
    </ScrollSectionleft>
    <ScrollSectionright>
    <Shopbybrand/>
    </ScrollSectionright>
    <ScrollSectionbottom>
    <Products />
    </ScrollSectionbottom>
    <Footer/>
  </div>
);

export default Landinglayout ;
