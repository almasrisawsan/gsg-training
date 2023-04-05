import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>Home</>} />
        <Route path="blogs" element={<>Blogs</>} />
        <Route path="contact" element={<>Contacts</>} />
        <Route path="*" element={<>Error</>} />
      </Routes>
    </BrowserRouter>
  );
}
