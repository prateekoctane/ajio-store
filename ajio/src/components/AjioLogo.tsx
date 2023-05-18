import { Box, Heading, Text, Image } from "@chakra-ui/react";
import styles from "../styles/AjioLogo.module.css";
import { useRef } from "react";

export function AjioLogo() {

    const aRef = useRef<HTMLParagraphElement | null>(null);
    const jRef = useRef<HTMLParagraphElement | null>(null);
    const iRef = useRef<HTMLParagraphElement | null>(null);
    const oRef = useRef<HTMLParagraphElement | null>(null);
    const manRef = useRef<HTMLImageElement | null>(null);

    function emerge() {
        if (aRef.current) {

            aRef.current.style.textShadow = ".05em .05em 10px rgba(11, 11, 11, 0.668)"
            aRef.current.style.transform = "translateY(-10px)";
            aRef.current.style.color = "rgb(26,32,44)";
            aRef.current.style.zIndex = "1";
        }

        if (jRef.current) {

            jRef.current.style.textShadow = ".05em .05em 10px rgba(11, 11, 11, 0.668)"
            jRef.current.style.transform = "translateY(-10px)";
            jRef.current.style.color = "rgb(26,32,44)";
            jRef.current.style.zIndex = "1";
        }

        if (iRef.current) {

            iRef.current.style.textShadow = ".05em .05em 10px rgba(11, 11, 11, 0.668)"
            iRef.current.style.transform = "translateY(-10px)";
            iRef.current.style.color = "rgb(26,32,44)";
            iRef.current.style.zIndex = "1";
        }

        if (oRef.current) {

            oRef.current.style.textShadow = ".05em .05em 10px rgba(11, 11, 11, 0.668)"
            oRef.current.style.transform = "translateY(-10px)";
            oRef.current.style.color = "rgb(26,32,44)";
            oRef.current.style.zIndex = "1";
        }

        if(manRef.current){
            manRef.current.style.opacity = "1"
        }

    }

    function burried(){

        if (aRef.current) {

            aRef.current.style.textShadow = ".0em .0em 0px rgba(0, 0, 0, 0)"
            aRef.current.style.transform = "translateY(0)";
            aRef.current.style.color = "white";
            aRef.current.style.zIndex = "-1";
        }

        if (jRef.current) {

            jRef.current.style.textShadow = ".0em .0em 0px rgba(0, 0, 0, 0)"
            jRef.current.style.transform = "translateY(0)";
            jRef.current.style.color = "white";
            jRef.current.style.zIndex = "-1";
        }

        if (iRef.current) {

            iRef.current.style.textShadow = ".0em .0em 0px rgba(0, 0, 0, 0)"
            iRef.current.style.transform = "translateY(0)";
            iRef.current.style.color = "white";
            iRef.current.style.zIndex = "-1";
        }

        if (oRef.current) {

            oRef.current.style.textShadow = ".0em .0em 0px rgba(0, 0, 0, 0)"
            oRef.current.style.transform = "translateY(0)";
            oRef.current.style.color = "white";
            oRef.current.style.zIndex = "-1";
        }

        if(manRef.current){
            manRef.current.style.opacity = "0"
        }



    }

    return <Box className={styles.ajioLogo} onMouseOver={emerge} onMouseOut={burried} >

        <Image position="absolute" w="500px" left="100px" top="100px" src="/ajio-fashion-1-bgr.png" alt="mens-clothing-1" />

        <Image position="absolute" w="500px" left="550px" top="150px" src="/ajio-fashion-2-bgr.png" alt="mens-clothing-2" />

        
        <Image position="absolute" w="350px" left="1050px" top="150px" src="/ajio-fashion-4-bgr.png" alt="mens-clothing-4" />

        <Image ref={manRef} opacity="0" transition="opacity 2s ease-in" position="absolute" zIndex="2" w="250px" left="520px" top="190px" src="/ajio-sitting-1.png" alt="mens-clothing-2" />



        <Box className={styles.logoContainer} >

            <Text className={styles.alphabet} ref={aRef} textShadow=".0em .0em 0px rgba(0, 0, 0, 0)"  transition="all 2s ease-in"  > A </Text>
            <Text className={styles.alphabet} ref={jRef} textShadow=".0em .0em 0px rgba(0, 0, 0, 0)"  transition="all 2s ease-in"  > J </Text>
            <Text className={styles.alphabet} ref={iRef} textShadow=".0em .0em 0px rgba(0, 0, 0, 0)"  transition="all 2s ease-in"  > I </Text>
            <Text className={styles.alphabet} ref={oRef} textShadow=".0em .0em 0px rgba(0, 0, 0, 0)"  transition="all 2s ease-in"  > O </Text>
        </Box>

    </Box>
}
