import { Box } from "@chakra-ui/react";
import { Carousel1 } from '../components/Carousal1';
import { BrandsOnDiscount } from '../components/BrandsOnDiscount';
import { AjioLogo } from '../components/AjioLogo';
import { Combos } from '../components/Combos';
import { Footer } from "../components/Footer";


export function Home() {
    // const carouselString = 1;
   
    return <Box>

        <Carousel1 text={1} />
        <BrandsOnDiscount />
        <AjioLogo />
        <Combos />
        <Carousel1 text={2} />
        <BrandsOnDiscount />
        <Footer />
    </Box>
}