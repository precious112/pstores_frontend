import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
@media screen and (max-width: 500px) {
    flex-direction:column;
  }
`;

export const HeaderImg= styled.img`
height: 300px;
width:50%;
@media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const HeaderContent= styled.div`
color:#4b4ede;
width:50%;
align-text:center;
padding-top:50px;
padding-left:5%;
@media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const HeaderSmallContent= styled.p`
color:#a0a0a8;
`;

export const HeaderButton=styled.div`
border-radius:28px;
background:#0b0b40;
padding-top:6px;
height:30px;
width:20%;
display:flex;
align-text: center;
justify-content: center;
color:#e1e1f5;
`;