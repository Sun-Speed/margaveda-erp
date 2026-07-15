import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";

import { SetupProvider } from "@/contexts/SetupContext";
import { AuthProvider } from "@/contexts/AuthContext";

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
