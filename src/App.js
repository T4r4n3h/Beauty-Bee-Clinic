import About from "./components/About";
import Billboard from "./components/Billboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

import ServiceSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="App mx-2">
      <div className="container  mx-auto">
        <Header/>
        <Billboard/>
        <ServiceSection/>
        <Testimonials/>
        <Promotion/>
        <About/>





        
      <Footer/>

      </div>
     </div>
  );
}

export default App;
