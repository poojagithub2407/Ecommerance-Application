import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
font-weight: 200;
text-align:center;
`;

const Top = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor:pointer;
background-color: ${(props) =>
          props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`
const TopText = styled.span`
padding: 10px;
text-decoration:underline;
cursor: pointer;
`

const Bottom = styled.div`
display: flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
flex:3;
`;



const Product = styled.div`
display: flex;
justify-content:space-between;
`;
const ProductDetails = styled.div`
flex:2;
display: flex;
`;
const Image = styled.img`
width: 200px;`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${(props) => props.color};
`;
const PriceDetails = styled.div`
flex:1;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
`;


const ProductAmountContainer = styled.div`
display: flex;
align-items:center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
font-style: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}

`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height: 1px;
`;


const Summary = styled.div`
flex:1;
border:1px solid lightgrey;
border-radius:10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle=styled.h1`
font-weight: 200;
`;

const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText=styled.span``;

const SummaryItemPrice=styled.span``;

const Button=styled.button`
width: 100%;
padding: 10px;
background-color:black;
color:white;`;






const Cart = () => {
     return (
          <Container>
               <Navbar />
               <Announcement />
               <Wrapper>
                    <Title>Your Bag</Title>
                    <Top>
                         <TopButton>CONTINUE SHOPPING</TopButton>
                         <TopTexts>
                              <TopText>Shopping Bag(2)</TopText>
                              <TopText>Your Wishlist(0)</TopText>
                         </TopTexts>
                         <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                         <Info>
                              <Product>
                                   <ProductDetails>
                                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                        <Details>
                                             <ProductName>
                                                  <b>Product:</b> JESSIE THUNDER SHOES
                                             </ProductName>
                                             <ProductId>
                                                  <b>ID:</b> 93813718293
                                             </ProductId>
                                             <ProductColor color="black" />
                                             <ProductSize>
                                                  <b>Size:</b> 37.5
                                             </ProductSize>
                                        </Details>
                                   </ProductDetails>
                                   <PriceDetails>
                                        <ProductAmountContainer>
                                             <Add />
                                             <ProductAmount>2</ProductAmount>
                                             <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice>$30</ProductPrice>
                                   </PriceDetails>

                              </Product>
                              <Hr />
                              <Product>
                                   <ProductDetails>
                                        <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                        <Details>
                                             <ProductName>
                                                  <b>Product:</b> HAKURA T-SHIRT
                                             </ProductName>
                                             <ProductId>
                                                  <b>ID:</b> 93813718293
                                             </ProductId>
                                             <ProductColor color="gray" />
                                             <ProductSize>
                                                  <b>Size:</b> M
                                             </ProductSize>
                                        </Details>
                                   </ProductDetails>
                                   <PriceDetails>
                                        <ProductAmountContainer>
                                             <Add />
                                             <ProductAmount>1</ProductAmount>
                                             <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice>$20</ProductPrice>
                                   </PriceDetails>

                              </Product>
                         </Info>
                         <Summary>
                              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                              <SummaryItem>
                                   <SummaryItemText>Subtotal</SummaryItemText>
                                   <SummaryItemPrice>$ 80</SummaryItemPrice>
                              </SummaryItem>
                              <SummaryItem>
                                   <SummaryItemText>Estimated Shipping</SummaryItemText>
                                   <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                              </SummaryItem>
                              <SummaryItem>
                                   <SummaryItemText>Shipping Discount</SummaryItemText>
                                   <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                              </SummaryItem>
                              <SummaryItem type="total">
                                   <SummaryItemText>Total</SummaryItemText>
                                   <SummaryItemPrice>$ 80</SummaryItemPrice>
                              </SummaryItem>
                              <Button>CHECKOUT NOW</Button>
                         </Summary>
                    </Bottom>
               </Wrapper>
               <Footer />
          </Container>
     )
}

export default Cart
