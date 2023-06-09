import { Box, Heading, Image, Input, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { BsFillHeartFill, BsBagFill, BsHeartbreakFill } from "react-icons/bs";
// BsFillHeartFill
import { MdClose } from "react-icons/md";
import { useState } from "react";




export function Navbar() {

    const [right, setRight] = useState<number>(-1500);
   

    function hoverOut() {
        
        setRight(-1500)
    }

    function hoverIn() {

        
        setRight(0)
    }
 
    console.log(right, "right")


    return <Box className={styles.container} >

        <Image className={styles.logo} src="https://sg-res.9appsdownloading.com/sg/res/jpg/df/b0/d95efaa0be188f2fc6bc3b609c55-mbs.jpg?x-oss-process=style/mq200" alt="ajio-logo" />

        <Heading className={styles.ajioHeading} >

            <span className={styles.mainHeading} >ajio</span>
            <span className={styles.subHeading} >personalised fashion store</span>
        </Heading>

        <Box className={styles.login_register} >
            <Text> <span> <Link to="/login" >Login</Link> </span> | <span> <Link to="/register" >Register</Link> </span> </Text>
            <Box display="flex" justifyContent="space-around" mt="10px" >
                <Link to="#" >< BsBagFill size={25} /></Link> <Link to="#" >< BsFillHeartFill size={25} /></Link>
            </Box>
        </Box>

        <Box className={styles.search_bar} >
            <Input variant="unstyled" padding="10px" type="text" placeholder="Search Your Style" />
            <Button variant="unstyled" > < CiSearch size={30} /> </Button>
        </Box>

        <Box className={styles.categoryBox} >


            <Box _hover={{ cursor: "pointer" }} onMouseOver={hoverIn} className={styles.subBox} id={styles.subBox5} >HOME & KITCHEN</Box>
            <Box _hover={{ cursor: "pointer" }} onMouseOver={hoverIn}  className={styles.subBox} id={styles.subBox4} >INDIE</Box>
            <Box _hover={{ cursor: "pointer" }} onMouseOver={hoverIn}  className={styles.subBox} id={styles.subBox3} >KIDS</Box>
            <Box _hover={{ cursor: "pointer" }} onMouseOver={hoverIn}  className={styles.subBox} id={styles.subBox2} >WOMEN</Box>
            <Box _hover={{ cursor: "pointer" }} onMouseOver={hoverIn}  className={styles.subBox} id={styles.subBox1} >MEN</Box>

        </Box>

        <Box className={styles.onHover} right={right} transition="all 1s ease-out" >
          <Button variant="unstyled"  onClick={hoverOut} position="relative" top="50px" left="95%" ><MdClose size={30} /></Button>
        </Box>
    </Box>
}