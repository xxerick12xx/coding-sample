import { BrowserRouter, Routes, Route } from "react-router";
import { TablePage } from "./pages/";
import { Header } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<TablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
