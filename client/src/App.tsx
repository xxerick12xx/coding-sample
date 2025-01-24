import { BrowserRouter, Routes, Route } from "react-router";
import { TablePage } from "./pages/";
import { Header } from "./components";
import { Container } from "./ui";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route index element={<TablePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
