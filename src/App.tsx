import { Routers } from "./Routes";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
