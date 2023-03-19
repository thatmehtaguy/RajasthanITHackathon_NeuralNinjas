import "./App.css";
import Header from "./analysiscomponents/Header";
import Footer from "./analysiscomponents/Footer";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Analysis from "./pages/Analysis";
import Loans from "./pages/Loans";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
          path="/loans"
          element={
            <>
              <Loans/>
            </>
          }
        />
        
          <Route
            path="/analysis"
            element={
              <>
                <Analysis/>
              </>
            }
          />
          <Route
            path="/analysis/report"
            element={
              <>
                <iframe
                  src="https://wandb.ai/tri-nit/tri-nit-hackathon/reports/TRI-NIT_Enemies_of_Syntax-Comparision-Report--VmlldzozNTM1MDA2?accessToken=0h22492df7jskgsoads9us70m3v8sys5lnkcv8xh40fqp8gyj9s8p2u3yiom3za6"
                  style={{ width: "100%", height: "100vh" }}
                />
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
