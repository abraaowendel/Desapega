import { useSelector } from "react-redux";
import { PageContainer, Template } from "./components/MainComponents";
import { MainRoutes } from "./routers/MainRoutes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {  
  return (
    <Template>
      <Header/>
      <MainRoutes/>
      <Footer/>
    </Template>
  );
}
 
export default App;
