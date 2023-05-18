import React from 'react';
import { Box } from "@chakra-ui/react";
import styles from "./styles/App.module.css";
import './App.css';
import { Navbar } from './components/Navbar';

import { MainRoutes } from './allRoutes/MainRoutes';

function App() {
  return (
    <Box className={styles.app}>
        
        {/* <Navbar /> */}
        <MainRoutes />
    </Box>
  );
}

export default App;
