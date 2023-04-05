import * as React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users">
          <Route path=":userId" element={<ProfilePage />} />
          <Route path="me" element={<>Hello</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
