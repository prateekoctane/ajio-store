import { Box, Image, Heading, Text } from "@chakra-ui/react";
import styles from "../styles/Combos.module.css";
import { useRef } from "react";

export function Combos() {

    const combo4 = useRef<HTMLImageElement | null>(null);
    const combo6 = useRef<HTMLImageElement | null>(null);


    const text1Ref = useRef<HTMLParagraphElement | null>(null)
    const text2Ref = useRef<HTMLParagraphElement | null>(null)
    const text3Ref = useRef<HTMLParagraphElement | null>(null)
    const text4Ref = useRef<HTMLParagraphElement | null>(null)
    const text5Ref = useRef<HTMLParagraphElement | null>(null)
    const text6Ref = useRef<HTMLParagraphElement | null>(null)
    const text7Ref = useRef<HTMLParagraphElement | null>(null)

    function shiftElements(word: string) {

        if (word === "text7" && text7Ref.current) {

            text7Ref.current.style.marginLeft = "0";
            text7Ref.current.style.opacity = "1";

        } else if (word === "text6" && text6Ref.current) {

            text6Ref.current.style.marginLeft = "0";
            text6Ref.current.style.opacity = "1";

        } else if (word === "text4" && text4Ref.current) {

            text4Ref.current.style.marginLeft = "0";
            text4Ref.current.style.opacity = "1";

        } else if (word === "text3" && text3Ref.current) {

            text3Ref.current.style.marginLeft = "0";
            text3Ref.current.style.opacity = "1";

        } else if (word === "text2" && text2Ref.current) {


            text2Ref.current.style.marginLeft = "0";
            text2Ref.current.style.opacity = "1";

        } else if (word === "text1" && text1Ref.current) {

            text1Ref.current.style.marginLeft = "0";
            text1Ref.current.style.opacity = "1";

        } else if (combo4.current && combo6.current && text5Ref.current) {

            text5Ref.current.style.marginLeft = "0";
            text5Ref.current.style.opacity = "1";

            combo4.current.style.top = "28%";
            combo6.current.style.left = "20%"
        }
    }

    function shiftBack(word: string) {

        if (word === "text7" && text7Ref.current) {

            text7Ref.current.style.marginLeft = "-100px";
            text7Ref.current.style.opacity = "0";

        } else if (word === "text6" && text6Ref.current) {

            text6Ref.current.style.marginLeft = "-100px";
            text6Ref.current.style.opacity = "0";

        } else if (word === "text4" && text4Ref.current) {

            text4Ref.current.style.marginLeft = "-100px";
            text4Ref.current.style.opacity = "0";

        } else if (word === "text3" && text3Ref.current) {

            text3Ref.current.style.marginLeft = "-100px";
            text3Ref.current.style.opacity = "0";

        } else if (word === "text2" && text2Ref.current) {

            text2Ref.current.style.marginLeft = "-100px";
            text2Ref.current.style.opacity = "0";

        } else if (word === "text1" && text1Ref.current) {

            text1Ref.current.style.marginLeft = "-100px";
            text1Ref.current.style.opacity = "0";

        } else if (combo4.current && combo6.current && text5Ref.current) {

            text5Ref.current.style.marginLeft = "-100px";
            text5Ref.current.style.opacity = "0";

            combo4.current.style.top = "35%";
            combo6.current.style.left = "30%"
        }
    }

    return <Box className={styles.comboBox} >


        <Heading textAlign="center" fontSize="7xl" className={styles.combos__heading} >Your Perfect Combos</Heading>


        <Box className={styles.combo_1} onMouseEnter={() => shiftElements("text1")} onMouseLeave={() => shiftBack("text1")} position="absolute" zIndex="7" top="13%" left="10%" w="27%" h="25%" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color="white" >

            <Box className={styles.text1} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text1Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>
        </Box>

        <Box className={styles.combo_1} id={styles.combo_2} onMouseEnter={() => shiftElements("text2")} onMouseLeave={() => shiftBack("text2")} _hover={{ cursor: "pointer", left: "40%" }} transition="left 1s" position="absolute" top="28%" left="30%" zIndex="6" w="27%" h="25%" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color="white" >

            <Box className={styles.text2} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text2Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>
        </Box>

        <Box className={styles.combo_1} onMouseEnter={() => shiftElements("text3")} onMouseLeave={() => shiftBack("text3")} position="absolute" _hover={{ cursor: "pointer", left: "60%" }} transition="left 1s" top="18%" left="50%" zIndex="5" w="27%" h="25%" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color=" white" >

            <Box className={styles.text3} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text3Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>

        </Box>

        <Box ref={combo4} onMouseEnter={() => shiftElements("text4")} onMouseLeave={() => shiftBack("text4")} className={styles.combo_1} position="absolute" _hover={{ cursor: "pointer", marginTop: "135px" }} transition="all 1s" top="35%" left="65%" zIndex="4" w="27%" h="25%" marginTop="0" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color=" white" >

            <Box className={styles.text4} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text4Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>
        </Box>


        <Box position="absolute" className={styles.combo_1} onMouseOver={() => shiftElements("")} onMouseLeave={() => shiftBack("")} top="55%" left="50%" zIndex="1" w="27%" h="25%" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color=" white" >

            <Box className={styles.text5} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text5Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>
        </Box>


        <Box ref={combo6} className={styles.combo_1} onMouseOver={() => shiftElements("text6")} onMouseLeave={() => shiftBack("text6")} _hover={{ cursor: "pointer", top: "72%" }} transition="all 1s" position="absolute" top="65%" left="30%" zIndex="2" w="27%" h="25%" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color="white" >

            <Box className={styles.text6} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text6Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>
        </Box>

        <Box position="absolute" className={styles.combo_1} onMouseOver={() => shiftElements("text7")} onMouseLeave={() => shiftBack("text7")} _hover={{ cursor: "pointer", top: "55%" }} transition="top 1s" top="45%" left="15%" zIndex="3" w="27%" h="25%" borderRadius="10px" bg="url(/ajio-combo-1.jpeg)" bgSize="cover" color="white" >

            <Box className={styles.text7} position="absolute" zIndex="2" padding="50px" transition="all .5s" opacity="0" ml="-100px" ref={text7Ref} fontSize="3xl" >

                <Text >Levis</Text>
                <Text  >Men's Casual Combo</Text>
                <Text >Upto 50% OFF</Text>
            </Box>
        </Box>








    </Box >
}