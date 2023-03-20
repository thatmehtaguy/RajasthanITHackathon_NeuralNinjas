import "./App.css";
import Header from "./analysiscomponents/Header";
import Footer from "./analysiscomponents/Footer";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketplacesPages/MarketplaceEntry";
import Analysis from "./pages/Analysis";
import Loans from "./pages/Loans";
<<<<<<< Updated upstream:src/App.js
import MainCategories from "./pages/MarketplacesPages/MainCategories"
import SubCategories from "./pages/MarketplacesPages/SubCategories"
import ProductCollection from "./pages/MarketplacesPages/ProductCollection";
import Productpg from "./pages/MarketplacesPages/Productpg";
import Checkout from "./pages/MarketplacesPages/Checkout";

=======
import Signup from "./pages/DashPages/Login";
import Categories from "./pages/MarketplacesPages/Categories";
>>>>>>> Stashed changes:src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/marketplace"
          element={
            <>
              <MarketPlace/>
              </>
       
          }
        />
        <Route
            path="/marketplace/maincategories"
            element={
              
              <div style={{marginTop:"150px"}}>
                <MainCategories/>
                </div>
              
            }
          />
        <Route
          path="/marketplace/subcategories"
          element={
            <>
              <SubCategories/>
            </>
          }
        />

        
        <Route
          path="/marketplace/collection"
          element={
            <>
              <ProductCollection/>
            </>
          }
        />
        <Route
          path="/marketplace/product"
          element={
            <>
              <Productpg/>
            </>
          }
        />
        <Route
            path="/marketplace/checkout"
            element={
              <>
                <Checkout/>
              </>
            }
          />
        
        
        
        <Route
          path="/marketplace/categories"
          element={
            <>
              <Categories/>
            </>
          }
        />
        <Route
          path="/loans"
          element={
            <>
              <Loans/>
            </>
          }
        />
        
          <Route
            path="/analytics"
            element={
              <>
                <Analysis/>
              </>
            }
          />
          <Route
            path="/analytics/report"
            element={
              <>
                <iframe
                  src="https://wandb.ai/tri-nit/tri-nit-hackathon/reports/TRI-NIT_Enemies_of_Syntax-Comparision-Report--VmlldzozNTM1MDA2?accessToken=0h22492df7jskgsoads9us70m3v8sys5lnkcv8xh40fqp8gyj9s8p2u3yiom3za6"
                  style={{ width: "100%", height: "100vh" }}
                />
              </>
            }
          />

          <Route
          path="/dash/signup"
          element={
            <>
              <Signup />
            </> 
          }
          />
          <Route
          path="/dash/login"
          element={
            <>
              <Signup />
            </> 
          }
          />



        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
