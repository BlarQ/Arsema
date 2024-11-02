
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />  
      <Banner />
      <Products />
      <Services />
      <Footer />
    </div>
  );
}
