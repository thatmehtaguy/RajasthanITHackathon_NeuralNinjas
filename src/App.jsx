import "./App.css";
import Header from "./analysiscomponents/Header";
import Footer from "./analysiscomponents/Footer";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketplacesPages/MarketplaceEntry";
import Analysis from "./pages/Analysis";
import Loans from "./pages/Loans";
import MainCategories from "./pages/MarketplacesPages/MainCategories"
import SubCategories from "./pages/MarketplacesPages/SubCategories"
import ProductCollection from "./pages/MarketplacesPages/ProductCollection";
import Productpg from "./pages/MarketplacesPages/Productpg";
import Checkout from "./pages/MarketplacesPages/Checkout";
import Dashboard from "./pages/DashPages/Dashboard";
import Login from "./pages/DashPages/Login";
// import Categories from "./pages/MarketplacesPages/Categories";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
          path="/"
          element={
            <>
            <Header/>
              <Home />
            </>
          }
        />
        <Route
          path="/marketplace"
          element={
            <>
            <Header/>
              <MarketPlace/>
              </>
       
          }
        />
        <Route
            path="/marketplace/maincategories"
            element={
              <>
                <Header/>
                <div style={{marginTop:"150px"}}>
                <MainCategories/>
                </div>
              </>
            }
          />
        <Route
          path="/marketplace/subcategories"
          element={
            <>
            <Header/>
              <SubCategories/>
            </>
          }
        />

        
        <Route
          path="/marketplace/collection"
          element={
            <>
            <Header/>
              <ProductCollection/>
            </>
          }
        />
        <Route
          path="/marketplace/product"
          element={
            <>
            <Header/>
              <Productpg/>
            </>
          }
        />
        <Route
            path="/marketplace/checkout"
            element={
              <>
              <Header/>
                <Checkout/>
              </>
            }
          />
        
        
        
        {/* <Route
          path="/marketplace/categories"
          element={
            <>
              <Categories/>
            </>
          }
        /> */}
        <Route
          path="/loans"
          element={
            <>
            <Header/>
              <Loans/>
            </>
          }
        />
        
          <Route
            path="/analytics"
            element={
              <>
              <Header/>
                <Analysis/>
              </>
            }
          />
          {/* <Route
          path="/dash/signup"
          element={
            <>
              <Signup />
            </> 
          }
          /> */}
          <Route
          path="/dash/login"
          element={
            <>
              <Login />
            </> 
          }
          />
          <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
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
