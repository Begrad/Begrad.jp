import { useEffect, useState } from "react";
import { getCompany, Company } from "./microCMS/apiClient";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import About from "./components/About";
import Products from "./components/Products";
import Support from "./components/Support";
import MemberList from "./components/MemberList";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    console.log(process.env);
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
    <div className="App">
      <Header />
      <Mission text={company.mission} />
      <About text={company.about} />
      <Products />
      <Support
        textTitle={company.supportTitle}
        textDescription={company.supportDescription}
      />
      <MemberList />
      <Footer
        postcode={company.postcode}
        address={company.address}
        tel={company.tel}
        businessHours={company.businessHours}
        email={company.email}
      />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
