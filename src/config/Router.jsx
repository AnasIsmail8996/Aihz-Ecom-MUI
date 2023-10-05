import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import CheckOut from "../components/CheckOut";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkOut" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
