import styled from 'styled-components';
export const Wrapper = styled.div`
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
border-radius: 20px;
display:flex;
background:#1c2aeb;
justify-content:space-between;
align-items:center;
margin:20px;
padding-bottom:20px;
`;
export const HeaderImg= styled.img`
height: 200px;
width:50%;
`;

export const HeaderContent= styled.div`
color:#518754;
width:50%;
align-text:center;
padding-top:50px;
padding-left:20px;
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
@media screen and (max-width: 500px) {
    width:40%;
  }
`;

