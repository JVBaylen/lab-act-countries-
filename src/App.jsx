import {Router, Route} from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  // TODO: replace this with a real route table using react-router.
  // For now the app only shows HomePage. Clicking nav links causes a full
  // page reload (or a 404) because there's no client-side routing yet.
  
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/countries" element={<Layout><CountriesPage /></Layout>} />
      <Route path="/bucket-list" element={<Layout><BucketListPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
    </Routes>
  );
};

export default App;
