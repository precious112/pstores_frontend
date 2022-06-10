import styled from 'styled-components';
export const Wrapper = styled.div`
background:#f7faf9;
margin:auto;
margin-top:15px;
display:flex;
width:500px;
height:50px;
box-shadow: -11px 9px 47px -7px rgba(6,5,5,0.73);
-webkit-box-shadow: -11px 9px 47px -7px rgba(6,5,5,0.73);
-moz-box-shadow: -11px 9px 47px -7px rgba(6,5,5,0.73);
border-radius: 28px;
@media screen and (max-width: 500px) {
  width: 350px;
}
`;

export const InputBox= styled.input`
     padding: 9px;
     
     width:70%;
     font-size: 26px;
     border-width: 1px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     
     border-radius: 28px;
     @media screen and (max-width: 500px) {
      width: 80%;
    }
`;

export const InputButton=styled.button`
background: #3498db;
  
  width:30%;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 11;
  -moz-border-radius: 11;
  border-radius: 11px;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;

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