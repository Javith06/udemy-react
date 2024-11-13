import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topic from "./components/Topic";
import Recommended from "./components/Recommended";
import SaleImg from "./components/SaleImg";
import Categories from "./components/categories";

function App()
{
  return(

    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <SaleImg></SaleImg>
      <Recommended></Recommended>
      <Topic></Topic>
      <Footer></Footer>
    </div>
  )
}

export default App