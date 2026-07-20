import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";

import { AuthProvider } from "@/contexts/AuthContext";
import { SetupProvider } from "@/contexts/SetupContext";
// import { ThemeProvider } from "@/contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SetupProvider>
          <AppRoutes />
        </SetupProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
