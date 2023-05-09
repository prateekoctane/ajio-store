import React from 'react';
import { Box } from "@chakra-ui/react";
import styles from "./styles/App.module.css";
import './App.css';
import { Navbar } from './components/Navbar';
import { Onhover } from './components/Onhover';

function App() {
  return (
    <Box className={styles.app}>
        
        <Navbar />
        {/* <Onhover /> */}
    </Box>
  );
}

export default App;
