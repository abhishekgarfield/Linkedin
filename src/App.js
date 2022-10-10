import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AuthModal from "./Pages/AuthModal";
import { Provider } from "react-redux";
import Store from "./store";

function App() {
  const authToken = false;
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthModal />} />
          {authToken && <Route path="/linkedin" element={<Homepage />} />}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
