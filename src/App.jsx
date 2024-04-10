import React, { useState } from "react";
import { MantineProvider } from '@mantine/core';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ToolsButton from "./components/ToolsButton";
import ActionGrid from "./components/ActionsGrid";
import "./styles.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Função para alternar o modo escuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
          <MantineProvider theme={{ colorScheme: darkMode ? 'dark' : 'light' }}>
            <div className={darkMode ? "dark-mode" : ""}>
              <Navbar toggleDarkMode={toggleDarkMode} />
              <h1>Loja de Kits Festivos</h1>
              <ToolsButton/>
              <ProductList />
              <Footer />
            </div>
          </MantineProvider>
    );
}

export default App;
