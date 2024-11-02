
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Services from "./components/Services";
import ContactPage from "./components/ContactPage";

export default function Home() {
  return (
    <div id="home">
      <Hero />  
      <Banner />
      <Products />
      <Services />
      <ContactPage />
      <Footer />
    </div>
  );
}
