import styled from 'styled-components';
export const Wrapper = styled.div`
display:flex;
padding-left:2px;
padding-right:2px;
width:96%;
height:600px;
padding-left:5px;
padding-right:5px;
@media screen and (max-width:728px){
    flex-direction:column;
    align-items:center;
 }
`;

export const AboutItemSection=styled.div`
display:flex;
width:23%;
height:100%;
flex-direction:column;
justify-content:space-between;
align-items:center;
background:#f5faf6;
@media screen and (max-width:728px){
  height:20%;
  width:96%;
  margin-bottom:10px;
}
`;

export const ItemImage=styled.img`
width:40%;
height:100%;
@media screen and (max-width:728px){
  height:70%;
  width:96%;
}
`;

export const BuyItemSection=styled.div`
display:flex;
width:23%;
height:100%;
flex-direction:column;
justify-content:space-between;
align-items:center;
background:#f5faf6;
@media screen and (max-width:728px){
  height:10%;
  width:96%;
  background:transparent;
}
`;

export const About=styled.div`
display:block;
@media screen and (max-width:728px){
  display:none;
}
`;

export const P=styled.div`
margin-top:10px;
`;

export const Buy=styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
margin-bottom:10px;
`;

export const BuyButton=styled.div`
margin-left:6px;
background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #0b8cd6);
  background-image: -moz-linear-gradient(top, #3498db, #0b8cd6);
  background-image: -ms-linear-gradient(top, #3498db, #0b8cd6);
  background-image: -o-linear-gradient(top, #3498db, #0b8cd6);
  background-image: linear-gradient(to bottom, #3498db, #0b8cd6);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  color: #e9ebf5;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width:80%;
  text-align:center;

  :hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`;
export const BuyIcon=styled.div`
margin-left:5px;
padding:10px 12px 10px 10px;
border-radius:50%;
background:#855b5f;
`;

export const AboutSmall=styled.div`
display:none;
@media screen and (max-width:728px){
  display:block;
}
`;
