import { Banner } from './components/Banner';
import { Navbar } from "./components/Navbar";
import { Services } from './components/services';
import "./App.css"



const App = () => {
  return (
    <>
    <Navbar />
    <Services/>
    <Banner />
    </>
  )
};

export default App;
