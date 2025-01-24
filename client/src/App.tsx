import { BrowserRouter, Routes, Route } from "react-router";
import { TablePage } from "./pages/";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
