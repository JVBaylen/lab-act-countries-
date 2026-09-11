import {Router, Route} from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  // TODO: replace this with a real route table using react-router.
  // For now the app only shows HomePage. Clicking nav links causes a full
  // page reload (or a 404) because there's no client-side routing yet.
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="countries" element={<CountriesPage />} />
        <Route path="bucket-list" element={<BucketListPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
