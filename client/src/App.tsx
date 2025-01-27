import { BrowserRouter, Routes, Route } from "react-router";
import { TablePage, CreateReferralPage } from "./pages/";
import { Header } from "./components";
import { Container } from "./ui";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Container>
        <Routes>
          <Route index element={<TablePage />} />
          <Route path="/create/:id?" element={<CreateReferralPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
