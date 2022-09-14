import { useSelector } from "react-redux";
import { PageContainer, Template } from "./components/MainComponents";
import { MainRoutes } from "./routers/MainRoutes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {  
  return (
    <Template>
      <Header/>
      <PageContainer>
        <MainRoutes/>
      </PageContainer>
      <Footer/>
    </Template>
  );
}
 
export default App;
