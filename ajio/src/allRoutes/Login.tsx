import { Box, Input, Button, Text, Image } from "@chakra-ui/react";
import styles from "../styles/Login.module.css";


export function Login() {

    return <Box className={styles.loginBody} >


        <Box className={styles.designBox} ></Box>
        <Box className={styles.squareBox} ></Box>
        <Box className={styles.circle} ></Box>
        <Box className={styles.circle2} ></Box>

        <Text className={styles.ajio} >AJIO</Text>
        <Text className={styles.welcomes} >WELCOMES</Text>
        <Text className={styles.you} >YOU </Text>

        <Box className={styles.loginBody__form} >

            <Input type="text" placeholder="Enter Email" bg="whitesmoke" w="300px" /> <br /> <br />
            <Input type="password" placeholder="Enter Password" bg="whitesmoke" w="300px" /> <br /> <br />
            <Button w="300px" >Login</Button>
        </Box>

    </Box>
}