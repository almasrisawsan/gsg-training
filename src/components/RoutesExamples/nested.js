import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>This is layout</h2>}>
          <Route index element={<>Home</>} />
          <Route path="blogs" element={<>Blogs</>} />
          <Route path="contact" element={<>Contacts</>} />
          <Route path="*" element={<>Error</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
