import { useEffect, useState } from "react";
import { getCompany, Company } from "./microCMS/apiClient";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import About from "./components/About";
import Products from "./components/Products";
import Support from "./components/Support";
import MembersList from "./components/MembersList";
import MemberDetail from "./components/MemberDetail";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await getCompany();
      if (response != null) {
        setCompany(response);
      }
    };
    void fetchCompany();
  }, []);

  if (company === null) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Mission text={company.mission} />
                <About text={company.about} />
                <Products />
                <Support
                  textTitle={company.supportTitle}
                  textDescription={company.supportDescription}
                />
                <MembersList />
              </>
            }
          />
          <Route path="members" element={<MembersList />} />
          <Route path="members/:memberId" element={<MemberDetail />} />
        </Routes>
        <Footer
          postcode={company.postcode}
          address={company.address}
          tel={company.tel}
          businessHours={company.businessHours}
          email={company.email}
        />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
