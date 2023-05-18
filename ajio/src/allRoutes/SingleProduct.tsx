import { Box, Image, Button, Text } from "@chakra-ui/react";
import styles from "../styles/SingleProduct.module.css";
import { useRef, useState, useEffect } from "react";


const imgObj = {
    1: "https://assets.ajio.com/medias/sys_master/root/20220513/OWCN/627e26ddaeb26921af770461/-473Wx593H-463292672-purple-MODEL.jpg",
    2: "https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
    3: "https://assets.ajio.com/medias/sys_master/root/20221117/BibM/6375d715aeb269659c97f7dc/-473Wx593H-462152986-green-MODEL4.jpg",
    4: "https://assets.ajio.com/medias/sys_master/root/20221117/n05D/6375d71caeb269659c97f87d/-473Wx593H-462152986-green-MODEL7.jpg",
    5: "https://assets.ajio.com/medias/sys_master/root/20221109/u2JJ/636b8eddaeb269659c7f91b5/-473Wx593H-462323964-white-MODEL.jpg"
}

export function SingleProduct() {

    const [imgs, setImgs] = useState(imgObj);
    const [singleImage, setSingleImage] = useState(imgs[1]);

    const img1Ref = useRef<HTMLImageElement | null>(null);
    const img2Ref = useRef<HTMLImageElement | null>(null);
    const img3Ref = useRef<HTMLImageElement | null>(null);
    const img4Ref = useRef<HTMLImageElement | null>(null);
    const img5Ref = useRef<HTMLImageElement | null>(null);
    let countRef = useRef(0);

    const sizeSmallRef = useRef<HTMLDivElement | null>(null);
    const sizeMediumRef = useRef<HTMLDivElement | null>(null);
    const sizeLargeRef = useRef<HTMLDivElement | null>(null);
    const sizeXLargeRef = useRef<HTMLDivElement | null>(null);
    const sizeXXLargeRef = useRef<HTMLDivElement | null>(null);
    const sizeXXXLargeRef = useRef<HTMLDivElement | null>(null);



    useEffect(() => {

        let count = 0;
        setInterval(() => {

            if (countRef.current > 0) {
                count = countRef.current;
                countRef.current = 0;
            } else {

                count++;
            }


            if (count === 1 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {
                img1Ref.current.style.border = "3px solid black";
                // img2Ref.current.style.border = "none";
                // img3Ref.current.style.border = "none";
                // img4Ref.current.style.border = "none";
                img5Ref.current.style.border = "none";
                setSingleImage(imgs[count]);
            } else if (count === 2 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {
                img2Ref.current.style.border = "3px solid black";
                // img3Ref.current.style.border = "none";
                // img4Ref.current.style.border = "none";
                // img5Ref.current.style.border = "none";
                img1Ref.current.style.border = "none";
                setSingleImage(imgs[count]);
            } else if (count === 3 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {
                img3Ref.current.style.border = "3px solid black";
                // img1Ref.current.style.border = "none";
                img2Ref.current.style.border = "none";
                // img5Ref.current.style.border = "none";
                // img4Ref.current.style.border = "none";
                setSingleImage(imgs[count]);
            } else if (count === 4 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {
                img4Ref.current.style.border = "3px solid black";
                img3Ref.current.style.border = "none";
                // img1Ref.current.style.border = "none";
                // img2Ref.current.style.border = "none";
                // img5Ref.current.style.border = "none";
                setSingleImage(imgs[count]);
            } else if (count === 5 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {
                img5Ref.current.style.border = "3px solid black";
                img4Ref.current.style.border = "none";
                // img1Ref.current.style.border = "none";
                // img2Ref.current.style.border = "none";
                // img3Ref.current.style.border = "none";

                setSingleImage(imgs[count]);
            }

            if (count === 5) {
                count = 0;
            }
        }, 3000)
    }, [])


    function displayImageOnClick(id: number) {


        if (id === 1 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {

            img1Ref.current.style.border = "3px solid black";
            img2Ref.current.style.border = "none";
            img3Ref.current.style.border = "none";
            img4Ref.current.style.border = "none";
            img5Ref.current.style.border = "none";
            setSingleImage(imgs[id]);

            countRef.current = id;

        } else if (id === 2 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {

            img2Ref.current.style.border = "3px solid black";
            img3Ref.current.style.border = "none";
            img4Ref.current.style.border = "none";
            img5Ref.current.style.border = "none";
            img1Ref.current.style.border = "none";
            setSingleImage(imgs[id]);

            countRef.current = id;

        } else if (id === 3 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {

            img3Ref.current.style.border = "3px solid black";
            img1Ref.current.style.border = "none";
            img2Ref.current.style.border = "none";
            img5Ref.current.style.border = "none";
            img4Ref.current.style.border = "none";
            setSingleImage(imgs[id]);

            countRef.current = id;

        } else if (id === 4 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {

            img4Ref.current.style.border = "3px solid black";
            img3Ref.current.style.border = "none";
            img1Ref.current.style.border = "none";
            img2Ref.current.style.border = "none";
            img5Ref.current.style.border = "none";
            setSingleImage(imgs[id]);

            countRef.current = id;

        } else if (id === 5 && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {

            img5Ref.current.style.border = "3px solid black";
            img4Ref.current.style.border = "none";
            img1Ref.current.style.border = "none";
            img2Ref.current.style.border = "none";
            img3Ref.current.style.border = "none";
            setSingleImage(imgs[id]);

            countRef.current = id;
        }
    }

    function selectSize(id:string){
       console.log(id,"id size color")
        if(id === "s" && sizeMediumRef.current && sizeSmallRef.current && sizeLargeRef.current && sizeXLargeRef.current && sizeXXLargeRef.current && sizeXXXLargeRef.current){
            sizeSmallRef.current.style.backgroundColor = "goldenRod";
            sizeMediumRef.current.style.backgroundColor = "skyblue";
           
            sizeLargeRef.current.style.backgroundColor = "skyblue";
            sizeXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXXLargeRef.current.style.backgroundColor = "skyblue";
        }else if( id === "m" && sizeMediumRef.current && sizeSmallRef.current && sizeLargeRef.current && sizeXLargeRef.current && sizeXXLargeRef.current && sizeXXXLargeRef.current){

            sizeMediumRef.current.style.backgroundColor = "goldenRod";
            sizeSmallRef.current.style.backgroundColor = "skyblue";
            sizeLargeRef.current.style.backgroundColor = "skyblue";
            sizeXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXXLargeRef.current.style.backgroundColor = "skyblue";
        }else if( id === "l" && sizeMediumRef.current && sizeSmallRef.current && sizeLargeRef.current && sizeXLargeRef.current && sizeXXLargeRef.current && sizeXXXLargeRef.current){

            sizeLargeRef.current.style.backgroundColor = "goldenRod";
            sizeSmallRef.current.style.backgroundColor = "skyblue";
            sizeMediumRef.current.style.backgroundColor = "skyblue";
           
            sizeXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXXLargeRef.current.style.backgroundColor = "skyblue";
        }else if( id === "xl" && sizeMediumRef.current && sizeSmallRef.current && sizeLargeRef.current && sizeXLargeRef.current && sizeXXLargeRef.current && sizeXXXLargeRef.current){

            sizeXLargeRef.current.style.backgroundColor = "goldenRod";
            sizeSmallRef.current.style.backgroundColor = "skyblue";
            sizeMediumRef.current.style.backgroundColor = "skyblue";
            sizeLargeRef.current.style.backgroundColor = "skyblue";
           
            sizeXXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXXLargeRef.current.style.backgroundColor = "skyblue";
        }else if( id === "xxl" && sizeMediumRef.current && sizeSmallRef.current && sizeLargeRef.current && sizeXLargeRef.current && sizeXXLargeRef.current && sizeXXXLargeRef.current){

            sizeXXLargeRef.current.style.backgroundColor = "goldenRod";
            sizeSmallRef.current.style.backgroundColor = "skyblue";
            sizeMediumRef.current.style.backgroundColor = "skyblue";
            sizeLargeRef.current.style.backgroundColor = "skyblue";
            sizeXLargeRef.current.style.backgroundColor = "skyblue";
            
            sizeXXXLargeRef.current.style.backgroundColor = "skyblue";
        }else if( id === "xxxl" && sizeMediumRef.current && sizeSmallRef.current && sizeLargeRef.current && sizeXLargeRef.current && sizeXXLargeRef.current && sizeXXXLargeRef.current){

            sizeXXXLargeRef.current.style.backgroundColor = "goldenRod";
            sizeSmallRef.current.style.backgroundColor = "skyblue";
            sizeMediumRef.current.style.backgroundColor = "skyblue";
            sizeLargeRef.current.style.backgroundColor = "skyblue";
            sizeXLargeRef.current.style.backgroundColor = "skyblue";
            sizeXXLargeRef.current.style.backgroundColor = "skyblue";
            
        }
    }

    return <Box>



        <Box className={styles.singleProductContainer} >


            <Box className={styles.singleProductContainer__slideShow} >

                <Image ref={img1Ref} _hover={{ cursor: "pointer" }} w="100px" src="https://assets.ajio.com/medias/sys_master/root/20230125/nlYM/63d141c1aeb269c651f9a4c4/-473Wx593H-465661953-blue-MODEL5.jpg" alt="kurtaModel1" onClick={() => displayImageOnClick(1)} />
                <Image ref={img2Ref} _hover={{ cursor: "pointer" }} w="100px" src="https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f856/-78Wx98H-462152986-green-MODEL.jpg" alt="kurtaModel2" onClick={() => displayImageOnClick(2)} />
                <Image ref={img3Ref} _hover={{ cursor: "pointer" }} w="100px" src="https://assets.ajio.com/medias/sys_master/root/20221117/BibM/6375d715aeb269659c97f7c9/-78Wx98H-462152986-green-MODEL4.jpg" alt="kurtaModel3" onClick={() => displayImageOnClick(3)} />
                <Image ref={img4Ref} _hover={{ cursor: "pointer" }} w="100px" src="https://assets.ajio.com/medias/sys_master/root/20221117/n05D/6375d71caeb269659c97f866/-78Wx98H-462152986-green-MODEL7.jpg" alt="kurtaModel4" onClick={() => displayImageOnClick(4)} />
                <Image ref={img5Ref} _hover={{ cursor: "pointer" }} w="100px" src="https://assets.ajio.com/medias/sys_master/root/20221109/u2JJ/636b8eddaeb269659c7f91c0/-78Wx98H-462323964-white-MODEL.jpg" alt="kurtaModel5" onClick={() => displayImageOnClick(5)} />

            </Box>

            <Box className={styles.singleProductContainer__productImage} >

                <Image w="550px" src={singleImage} alt="#" />
            </Box>

            <Box className={styles.singleProductContainer__productDetails} w="500px" >

                <Text>{"NetPlay"}</Text>
                <Text>{"Slim Fit Shirt with Patch Pocket | XXL"}</Text>
                <Text>{"Rs.610"}</Text>
                <Text>MRP Rs. <s>1899</s> {"67% OFF"} </Text>
                <Box  >
                    <Box ml="20px" display="inline-block flex" justifyContent="center" alignItems="center" w="35px" h="35px" clipPath="circle(50% at 50% 50%)" backgroundColor="blue.100" onClick={()=>selectSize("s")} textAlign="center" fontSize="12px" _hover={{cursor:"pointer"}} ref={sizeSmallRef}  >S</Box> 

                    <Box ml="20px" display="inline-block flex" justifyContent="center" alignItems="center" w="35px" h="35px" clipPath="circle(50% at 50% 50%)" backgroundColor="blue.100" onClick={()=>selectSize("m")} textAlign="center" fontSize="12px" _hover={{cursor:"pointer"}} ref={sizeMediumRef}  >M</Box>

                    <Box ml="20px" display="inline-block flex" justifyContent="center" alignItems="center" w="35px" h="35px" clipPath="circle(50% at 50% 50%)" backgroundColor="blue.100" onClick={()=>selectSize("l")} textAlign="center" fontSize="12px" _hover={{cursor:"pointer"}} ref={sizeLargeRef}  >L</Box>

                    <Box ml="20px" display="inline-block flex" justifyContent="center" alignItems="center" w="35px" h="35px" clipPath="circle(50% at 50% 50%)" backgroundColor="blue.100" onClick={()=>selectSize("xl")} textAlign="center" fontSize="12px" _hover={{cursor:"pointer"}} ref={sizeXLargeRef}  >XL</Box>

                    <Box ml="20px" display="inline-block flex" justifyContent="center" alignItems="center" w="35px" h="35px" clipPath="circle(50% at 50% 50%)" backgroundColor="blue.100" onClick={()=>selectSize("xxl")} textAlign="center" fontSize="12px" _hover={{cursor:"pointer"}} ref={sizeXXLargeRef}  >XXL</Box>

                    <Box ml="20px" display="inline-block flex" justifyContent="center" alignItems="center" w="35px" h="35px" clipPath="circle(50% at 50% 50%)" backgroundColor="blue.100" onClick={()=>selectSize("xxxl")} textAlign="center" fontSize="12px" _hover={{cursor:"pointer"}} ref={sizeXXXLargeRef}  >XXL</Box>

                </Box>

                <Box display="flex" flexDirection="column" gap="20px" mt="50px" >

                    <Button>ADD TO BAG</Button>
                    <Button>SAVE TO WISHLIST</Button>
                </Box>
            </Box>



        </Box>
    </Box>
}