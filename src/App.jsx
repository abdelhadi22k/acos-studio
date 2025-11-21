import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadProvider } from "react-head";
import MainPage from "./page/MainPage";
<<<<<<< HEAD
import BlogDetels from "./components/blog/BlogDetels";
import SearchPage from "./page/SearchPage";
import BlogPage from "./page/BlogPage";
import NotFound from "./page/NotFound";
=======
import BlogDetels from './components/blog/BlogDetels';
import SearchPage from "./page/SearchPage";
import BlogPage from "./page/BlogPage";



>>>>>>> 4a1292ddb3e8c5c6aab458b8df7a0d8b53df0dc0

const App = () => {
  return (
    <HeadProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Blog/:slug" element={<BlogDetels />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
         <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:slug" element={<BlogDetels />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 4a1292ddb3e8c5c6aab458b8df7a0d8b53df0dc0
    </HeadProvider>
  );
};

export default App;
