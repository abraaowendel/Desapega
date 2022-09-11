import { useSelector } from "react-redux";
import { Template } from "./components/MainComponents/MainComponents";
import { MainRoutes } from "./routers/MainRoutes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const user = useSelector((state) => state.user)
  
  return (
    <Template>
      <Header/>
      <MainRoutes/>
      <Footer/>
    </Template>
  );
}
 
export default App;
