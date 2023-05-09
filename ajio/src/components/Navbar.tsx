import { Box, Heading, Image, Input, Button, Text, Link } from "@chakra-ui/react"
import styles from "../styles/Navbar.module.css";

import { CiSearch } from "react-icons/ci";
import { BsFillHeartFill, BsBagFill, BsHeartbreakFill } from "react-icons/bs";
// BsFillHeartFill
import { useState} from "react";




export function Navbar() {

    const [display, setDisplay ] = useState<number>(0)
    console.log(display, "display")

    return <Box className={styles.container} >

        <Image className={styles.logo} src="https://sg-res.9appsdownloading.com/sg/res/jpg/df/b0/d95efaa0be188f2fc6bc3b609c55-mbs.jpg?x-oss-process=style/mq200" alt="ajio-logo" />

        <Heading className={styles.ajioHeading} >

            <span className={styles.mainHeading} >ajio</span>
            <span className={styles.subHeading} >personalised fashion store</span>
        </Heading>

        <Box className={styles.login_register} >
            <Text> <span> <Link>Login</Link> </span> | <span> <Link>Register</Link> </span> </Text>
            <Box display="flex" justifyContent="space-around" mt="10px" >
                <Link>< BsBagFill size={25} /></Link> <Link>< BsFillHeartFill size={25} /></Link>
            </Box>
        </Box>

        <Box className={styles.search_bar} >
            <Input variant="unstyled" padding="10px" type="text" placeholder="Search Your Style" />
            <Button variant="unstyled" > < CiSearch size={30} /> </Button>
        </Box>

        <Box className={styles.categoryBox} >
            
          
           <Box _hover={{cursor:"pointer"}} onMouseOver={()=>setDisplay(1)} onMouseOut={()=>setDisplay(0)} className={styles.subBox} id={styles.subBox5} >HOME & KITCHEN</Box>
           <Box _hover={{cursor:"pointer"}} onMouseOver={()=>setDisplay(1)} onMouseOut={()=>setDisplay(0)} className={styles.subBox} id={styles.subBox4} >INDIE</Box>
           <Box _hover={{cursor:"pointer"}} onMouseOver={()=>setDisplay(1)} onMouseOut={()=>setDisplay(0)} className={styles.subBox} id={styles.subBox3} >KIDS</Box>
           <Box _hover={{cursor:"pointer"}} onMouseOver={()=>setDisplay(1)} onMouseOut={()=>setDisplay(0)} className={styles.subBox} id={styles.subBox2} >WOMEN</Box>
           <Box _hover={{cursor:"pointer"}} onMouseOver={()=>setDisplay(1)} onMouseOut={()=>setDisplay(0)} className={styles.subBox} id={styles.subBox1} >MEN</Box>

        </Box>

       <Box className={styles.onHover} opacity={display} transition="opacity 1s" >

       </Box>
    </Box>
}