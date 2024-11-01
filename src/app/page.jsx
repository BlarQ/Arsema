import Image from "next/image";
import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Footer />
    </div>
  );
}
