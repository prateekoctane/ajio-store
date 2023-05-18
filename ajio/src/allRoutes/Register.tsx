import { Box,Select, Heading, Text, Input, FormControl, Button } from "@chakra-ui/react";
import styles from "../styles/Register.module.css";

export function Register(){

    return <Box className={styles.registerContainer} >
        
        <Text className={`${styles.register__text} ${styles.register__text__position}`} >REGISTER</Text>
        <Text className={`${styles.register__text} ${styles.with__text__position} `} >WITH</Text>
        <Text className={`${styles.register__text} ${styles.ajio__text__position}`} >AJIO</Text>

        <FormControl className={styles.formControl}  >

            <Input type="text" placeholder="First Name" className={styles.formInput} /> <br /> <br />
            <Input type="text" placeholder="Last Name" className={styles.formInput} /> <br /> <br />
            <Select className={styles.formInput}> 
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Select> <br />
            <Input type="number" placeholder="Mobile" className={styles.formInput} /> <br /> <br />
            <Input type="email" placeholder="Email" className={styles.formInput} /> <br /> <br />
            <Input type="password" placeholder="Password" className={styles.formInput} /> <br /> <br />

            <Input type="submit" value="Send OTP" className={styles.formInput} /> <br /> <br />

        </FormControl>

        {/* <Box className={styles.register__graffiti} display='flex' flexDirection="column" gap="20px" >
            <Box bg="rgb(81,29,199)" w="100%" h="200px" ></Box>
            <Box bg="rgb(242,176,47)" w="100%" h="200px" ></Box>
            <Box bg="rgb(74,166,120)" w="100%" h="200px" ></Box>
        </Box> */}

    </Box>
}