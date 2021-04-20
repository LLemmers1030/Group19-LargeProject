import styled from 'styled-components';

export const ServicesContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* Background color */
background: #0B2545;
padding-bottom: 100px;
/* Fixed reactive issue with the cards */
@media screen and (max-width: 1000px){
    height: 150vh;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
/* This will give us however many columns */
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
/* margin-top: 40px; */

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
};

/* @media screen and (max-width: 768px){
    padding: 0 20px;
    height: 400px;
} */
`;

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
font-weight: bold;
align-items: center;
/* margin-top: 128px; */

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size: 1.3rem;
margin-bottom: 10px;
font-weight: bold;

`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;