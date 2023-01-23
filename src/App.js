import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Login from "./pages/Login/Login";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <Navbar /> */}
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
