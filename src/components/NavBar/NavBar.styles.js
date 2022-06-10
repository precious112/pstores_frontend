import styled from 'styled-components';
export const Wrapper = styled.div`
position:sticky;
top: 0;
left: 0;
justify-content:space-between;
align-items: center;
display:flex;
background:#e4e6eb;
color:#2d2d2e;
z-index:1;
width:94%;
padding:0 3%;
`;

export const HomeTab= styled.div`

font-weight:bold;
font-size:30px;
margin-left:10px;
`;

export const ContactTab = styled.li`

border-radius:28px;
background:#345fed;
width:10%;
height:30px;
display:flex;
align-text: center;
align-items:center;
justify-content: center;
@media screen and (max-width:728px){
   display:none;
}
`;

export const ItemTab= styled.ul`
width:60%;
display:flex;
justify-content:space-evenly;
`;

export const ItemsTab = styled.li`
list-style-type:none;
font-weight:bold;
@media screen and (max-width:728px){
   display:none;
}
`;

export const A = styled.a`
   text-decoration:none;
   list-style-type:none;
`;

export const MobileNav = styled.div`
   display:none;

   @media screen and (max-width:728px){
      display:block;
   }
`;

export const MenuModal = styled.div`
   display: none;
   @media screen and (max-width:728px){
      display:block;
      position:fixed;
      top:0;
      left:0;
      padding:0;
      width:100%;
      height:100%;
      align-items:flex-end;
      background: rgba(0, 0, 0, 0.7);
      z-index:100;
   }
`;

export const ModalChild = styled.div`
   background:white;
   position:fixed;
   top:0;
   left:0;
   padding:2%;
   height:90%;
   height:90%;
   width:95%;
   margin:0 0 0 5%;
`;

export const CancelIcon=styled.div`
position:absolute;
top:2%;
right:6%;
`;

export const New=styled.p`
display:F_tgks4Ro-WZ9WbNz_0qkMJdkPZ5XM8dvz3JTd-8;
`;
