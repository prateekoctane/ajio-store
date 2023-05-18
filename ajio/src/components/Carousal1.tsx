import { Box } from "@chakra-ui/react";
import styles from "../styles/Carousel1.module.css"
import { useEffect, useRef, useState } from "react";

type Props ={
     text:number;
}

export function Carousel1({text}:Props) {

    

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [left, setLeft] = useState<number>(0)



    useEffect(() => {

        const offerCards1: any = document.getElementById("offerCards1");
        // if (offerCards1) {

        //     console.log(offerCards1.clientWidth, "caro width")

        // }
        let count = 0;
        let flag = false;

        setInterval(() => {

            if (flag === false && offerCards1) {


                setLeft(prev => prev += -(offerCards1.clientWidth + 13));
                count++;
                if (count === 2) {
                    flag = true;
                }

            } else if (flag === true && offerCards1) {

                setLeft(prev => prev += (offerCards1.clientWidth + 13));
                count--;
                if (count === 0) {
                    flag = false;
                }

            }

        }, 3000)

    }, [])


    return <Box  >

   
        <Box className={styles.mainContainer} ref={carouselRef}   >

            <Box className={styles.innerCarousel} left={left} transition="left 1s ease" >

                <Box className={styles.cards} bg={`${text === 1 ? "green":"red"}`} id="offerCards1"  >one</Box>
                <Box className={styles.cards} bg={`${text === 1 ? "green":"red"}`} >two</Box>
                <Box className={styles.cards} bg={`${text === 1 ? "green":"red"}`} >three</Box>
            </Box>
        </Box>
    </Box>
}