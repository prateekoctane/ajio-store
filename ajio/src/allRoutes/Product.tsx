import { Box, Text, Input, Image } from "@chakra-ui/react";
import styles from "../styles/Product.module.css";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const items = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 0, 8, 9, 7, 6, 4, 1, 2, 3, 4, 2, 2, 3]

export function Product() {

    return <Box className={styles.productContainer} >

        <Box className={styles.productContainer__sideBar} >

            <Box className={styles.sideBar__filterBox} >

                <Text>Filter By</Text>

                <Box className={styles.sideBar__brandFilter} >

                    <Text>Brands</Text>

                    <Checkbox ml="10px" >NetPlay</Checkbox>
                    <Checkbox ml="10px" >NetPlay</Checkbox>
                    <Checkbox ml="10px" >NetPlay</Checkbox>
                    <Checkbox ml="10px" >NetPlay</Checkbox>
                    <Checkbox ml="10px" >NetPlay</Checkbox>


                </Box>

                <Box className={styles.sideBar__priceRangeFilter} >

                    <Text>Price Range</Text>

                    <Checkbox ml="10px" > 1000 - 5000 </Checkbox>
                    <Checkbox ml="10px" > 1000 - 5000 </Checkbox>
                    <Checkbox ml="10px" > 1000 - 5000 </Checkbox>
                    <Checkbox ml="10px" > 1000 - 5000 </Checkbox>
                    <Checkbox ml="10px" > 1000 - 5000 </Checkbox>

                </Box>

                <Box className={styles.sideBar__colorFilter} >

                    <Text>Color</Text>

                    <Checkbox ml="10px" > brown </Checkbox>
                    <Checkbox ml="10px" > brown </Checkbox>
                    <Checkbox ml="10px" > brown </Checkbox>
                    <Checkbox ml="10px" > brown </Checkbox>
                    <Checkbox ml="10px" > brown </Checkbox>


                </Box>

                <Box className={styles.sideBar__sizeFilter} >

                    <Text>Size</Text>


                    <Checkbox ml="10px" > Small </Checkbox>
                    <Checkbox ml="10px" > Medium </Checkbox>
                    <Checkbox ml="10px" > Large </Checkbox>
                    <Checkbox ml="10px" > XL </Checkbox>
                    <Checkbox ml="10px" > XXL </Checkbox>
                    <Checkbox ml="10px" > XXXL  </Checkbox>

                </Box>

            </Box>



        </Box>

        <Box className={styles.productContainer__productGrid} >

            <Box className={styles.productContainer__productGrid__description} >
                <Text>{"Category Name"}</Text>
                <Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores hic a earum ipsa maxime quia est sunt sint, rerum illum suscipit nemo blanditiis, at vitae, esse recusandae commodi sapiente molestias?</Text>
            </Box>

            <Box className={styles.productContainer__productGrid__gridItems} >

                {items.map((singleItem, index) => <Link to="/product/single-product">  <Box key={index} className={styles.box} >

                    <Box className={styles.subBox}>

                    </Box>
                    <Image className={styles.img} src="/model.png" alt="" />

                    <Box display="flex" flexDirection="column" alignItems="center" >
                        <Text>{"NetPlay"}</Text>
                        <Text>{"Slim Fit Shirt With Patch Pocket"}</Text>
                        <Text>{"Rs. 1332"}</Text>
                    </Box>

                </Box> </Link>)}
            </Box>

        </Box>

    </Box>
}