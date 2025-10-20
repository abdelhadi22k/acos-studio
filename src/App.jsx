import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadProvider } from "react-head";
import MainPage from "./page/MainPage";
import BlogDetels from './components/blog/BlogDetels';
import SearchPage from "./page/SearchPage";
import BlogPage from "./page/BlogPage";




const App = () => {
  return (
    <HeadProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
         <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:slug" element={<BlogDetels />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
    </HeadProvider>
  );
};

export default App;
