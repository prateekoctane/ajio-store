import { Box, Image, Text, Heading } from "@chakra-ui/react";
import styles from "../styles/BrandsOnDiscount.module.css";
import { useEffect, useState, useRef } from "react";

export function BrandsOnDiscount() {

    const [top, setTop] = useState<number>(0)
    const [newTop, setNewTop] = useState<number>(-920)
    // console.log(top, "top")
    const scrollY = window.scrollY;
    // console.log(scrollY, "scroll y value")
    const header = useRef<HTMLDivElement>(null)



    useEffect(() => {

        // console.log(header.current, "current")
        function addClass() {

            if (scrollY >= 200 && header.current) {
                // header.current.style.opacity = "1"
            
                // console.log("hello")
            }
        }
        addClass();
    }, [scrollY])


    useEffect(() => {
        const discountCards: any = document.getElementById("discountCards");
        const discountCardsMid: any = document.getElementById("discountCardsMid");
        // if (discountCards) {

        //     console.log(discountCards.clientHeight, "discount card height")

        // }
        let count = 0;
        let flag = false;

        setInterval(() => {

            if (flag === false && discountCards) {


                setTop(prev => prev += -(discountCards.clientHeight + 60));
                count++;
                if (count === 2) {
                    flag = true;
                }

            } else if (flag === true && discountCards) {

                setTop(prev => prev += (discountCards.clientHeight + 60));
                count--;
                if (count === 0) {
                    flag = false;
                }

            }

        }, 3000)

        // ----------------------------------------------------------------------------------

        let countMidCard = 0;
        let flagMidCard = false;
        setInterval(() => {

            if (flagMidCard === false && discountCardsMid) {


                setNewTop(prev => prev += (discountCardsMid.clientHeight + 60));
                countMidCard++;
                if (countMidCard === 2) {
                    flagMidCard = true;
                }

            } else if (flagMidCard === true && discountCardsMid) {

                setNewTop(prev => prev += -(discountCardsMid.clientHeight + 60));
                countMidCard--;
                if (countMidCard === 0) {
                    flagMidCard = false;
                }

            }

        }, 3000)

    }, [])


    return <Box className={styles.brandsOnDiscountContainer} >


        <Heading className={styles.heading} ref={header} transition="opacity 1s left 1s" > <span className={styles.span}>Top Brands For</span>  <span className={styles.span}>Your Getaway...</span> </Heading>


        <Box className={styles.carousel1_Container}  >

            <Box className={styles.innerCarousel1} position="relative" top={top} transition="top .7s ease-in-out" >

                <Box className={styles.box1} h="400px" id="discountCards" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>

                <Box className={styles.box1} h="400px" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>

                <Box className={styles.box1} h="400px" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>


            </Box>

        </Box>
        {/* ------------------------------------SECOND----------------------------------------------- */}

        <Box className={styles.carousel1_Container} mt="500px" >

            <Box className={styles.innerCarousel1} position="relative" top={newTop} transition="top .7s ease-in-out" >

                <Box className={styles.box1} h="400px" id="discountCardsMid" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>

                <Box className={styles.box1} h="400px" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>

                <Box className={styles.box1} h="400px" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>


            </Box>

        </Box>
        {/* ------------------------------------------------------------------------------------------ */}
        <Box className={styles.carousel1_Container}  >

            <Box className={styles.innerCarousel1} position="relative" top={top} transition="top .7s ease-in-out" >

                <Box className={styles.box1} h="400px" id="discountCards" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>

                <Box className={styles.box1} h="400px" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>

                <Box className={styles.box1} h="400px" >

                    <Text className={styles.brandName} >PUMA</Text>

                    <Image w="200px" src="/puma-cap-1.png" alt="puma-tshirt" className={styles.imgCap} />

                    <Box className={styles.background} ></Box>

                    <Image w="300px" src="/puma-1.png" alt="puma-tshirt" className={styles.imgModel} />

                </Box>


            </Box>

        </Box>



    </Box>
}