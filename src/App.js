import { ThemeProvider, CssBaseline, createTheme, Divider } from "@mui/material";
import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import Navbar from "./scenes/Navbar";
import Banner from "scenes/Banner";
import Experiences from "scenes/Experiences";
import Portfolio from "scenes/Portfolio";
import Footer from "scenes/Footer";


function App() {  // eslint-disable-next-line
  const [mode, setMode] = useState("dark") 
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar mode={mode} setMode={setMode}/>
        <Banner/>
        <Experiences/>
        <Portfolio/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
