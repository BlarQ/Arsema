import Image from "next/image";
import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Hero />  
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}
