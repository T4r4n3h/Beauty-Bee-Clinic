import Billboard from "./components/Billboard";
import Header from "./components/Header";
import MblServiceSection from "./components/MblServiceSection";
import ServiceSection from "./components/ServiceSection";


function App() {
  return (
    <div className="App">
      <div className="container border border-red-300 mx-auto">
        <Header/>
        <Billboard/>
        <ServiceSection/>
        <MblServiceSection/>


      </div>
     </div>
  );
}

export default App;
