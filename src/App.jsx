import Benefits from "./components/Benefits";
import Category from "./components/Category";
import ExclusiveBundles from "./components/ExclusiveBundles";
import Footer from "./components/Footer";
import Gift from "./components/Gift";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Popular from "./components/popular";
import Stafftraining from "./components/Stafftraining";

export default function App() {
  return (
    <>

    {/* nav bar */}
    <section className="bg-[url(https://i.ibb.co/nMdF1kWy/Rectangle-1.png)] bg-no-repeat bg-cover bg-center relative mb-40">
    
      <Navbar />

      <Hero />
      </section>

    
    <Popular />
    

   <Category />

    {/* Benefits */}
    <Benefits />


      {/* Staff training */}
    <Stafftraining />

    
    {/* gift cards */}
   <Gift />

    {/* Exclusive Bundles */}
    <ExclusiveBundles />

    {/* footer */}
   <Footer />
  
</>
  )
}


