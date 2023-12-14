import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthProvider";

import Router from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
