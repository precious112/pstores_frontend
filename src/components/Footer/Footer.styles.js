import styled from 'styled-components';
export const Footers = styled.footer`
background:#e9f5e9;
margin-top:20px;
`;

export const Wrapper = styled.div`
max-width:1175px;
margin:auto;
`;

export const Row=styled.div`
display:flex;
flex-wrap:wrap;
@media screen and (max-width: 500px) {
    flex-direction:column;
    align-items:center;
  }
`;

export const H=styled.h4`
font-size:18px;
color:#202029
text-transform:capitalize;
margin-bottom:30px;
font-weight:500;
position:relative;

::before{
    content:"";
    position:absolute;
    left:0;
    bottom:-10px;
    background-color:#5b5d85;
    height:2px;
    box-sizing:border-box;
    width:50px;
}
`;

export const Col=styled.div`
width:25%;
padding:0 15px;
`;

export const U=styled.ul`
list-style:none;
`;

export const Li=styled.li`
:not(:last-child){
    margin-bottom:10px;
}

`;

export const Icons=styled.div`
display:inline-block;
width:40px;
height:40px;
background-color:#7f7ffa;
margin:0 10px 10px 0;
text-align:center;
line-height:40px;
border-radius:50%;
color:#f0f0f5;

:hover{
    background-color:#f0f0f5;
    color:#3f3f42; 
}

`;
