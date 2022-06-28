import About from "./components/About";
import Billboard from "./components/Billboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

import ServiceSection from "./components/ServiceSection";
import Testimonitals from "./components/Testimonitals";


function App() {
  return (
    <div className="App">
      <div className="container  mx-auto">
        <Header/>
        <Billboard/>
        <ServiceSection/>
        <Testimonitals/>
        <Promotion/>
        <About/>





        
      <Footer/>

      </div>
     </div>
  );
}

export default App;
