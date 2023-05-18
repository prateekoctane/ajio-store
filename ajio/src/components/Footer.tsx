import { Box, Link, Text } from "@chakra-ui/react";
import styles from "../styles/Footer.module.css";

export function Footer() {

    return <Box className={styles.footer} >

        <Box className={styles.footer__contentBox} display="flex" justifyContent="space-around">
            <ul>
                <li style={{ fontWeight: "bold", marginBottom: "10px", color: "rgb(33, 32, 30)", listStyle: "none", fontSize: "20px" }} >AJIO</li>
                <li className={styles.footer__linkText} ><Link href="#">Who Are We</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Join Our Team</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Terms & Condition</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">We Respect Your Privacy</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Fees & Payment</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Returns & Refund</Link></li>

            </ul>

            <ul>
                <li style={{ fontWeight: "bold", marginBottom: "10px", color: "rgb(33, 32, 30)", listStyle: "none", fontSize: "20px" }} > HELP </li>
                <li className={styles.footer__linkText} ><Link href="#">Track Your Order</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Frequently Asked Question</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Returns</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Cancellations</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Payments</Link></li>
                <li className={styles.footer__linkText} ><Link href="#">Customer Care</Link></li>

            </ul>

            <ul>
                <li style={{ fontWeight: "bold", marginBottom: "10px", color: "rgb(33, 32, 30)", listStyle: "none", fontSize: "20px" }} > SHOP BY </li>
                <li className={styles.footer__linkText} > <Link href="#" > Men </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Women </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Kids </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Indie </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Stores </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > New Arrival </Link> </li>
            </ul>

            <ul>
                <li style={{ fontWeight: "bold", marginBottom: "10px", color: "rgb(33, 32, 30)", listStyle: "none", fontSize: "20px" }} > FOLLOW US </li>
                <li className={styles.footer__linkText} > <Link href="#" > Facebook </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Instagram </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Twitter </Link> </li>
                <li className={styles.footer__linkText} > <Link href="#" > Pinterest </Link> </li>
            </ul>
        </Box>

        <hr style={{ marginTop: "30px" }} />

        <Text className={styles.footer__paymentMethod} mt="50px" fontSize="30px" fontWeight="bold" > Payment Methods </Text>
        
        <Box display="flex" gap="20px" mt="20px" >  
           <Text padding="10px" borderRadius="5px" boxShadow="rgba(128,128,128,0.674) 5px 5px 2.6px" bg="whitesmoke" color="rgb(33, 32, 30)"  > Net   Banking  </Text>

           <Text padding="10px" borderRadius="5px" boxShadow="rgba(128,128,128,0.674) 5px 5px 2.6px" bg="whitesmoke" color="rgb(33, 32, 30)" > Verified By  Visa  </Text>

           <Text padding="10px" borderRadius="5px" boxShadow="rgba(128,128,128,0.674) 5px 5px 2.6px" bg="whitesmoke" color="rgb(33, 32, 30)" > Master   Card  </Text>

           <Text padding="10px" borderRadius="5px" boxShadow="rgba(128,128,128,0.674) 5px 5px 2.6px" bg="whitesmoke" color="rgb(33, 32, 30)" > Cash   Delivery  </Text>

           <Text padding="10px" borderRadius="5px" boxShadow="rgba(128,128,128,0.674) 5px 5px 2.6px" bg="whitesmoke" color="rgb(33, 32, 30)" > Jio   Money  </Text>
        </Box>
    </Box>
}