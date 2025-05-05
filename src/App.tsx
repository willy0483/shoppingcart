import "./App.css";
import { AppRoutes } from "./routes/appRoutes";
import { HelmetProvider } from "@dr.pogodin/react-helmet";

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  );
}

export default App;
