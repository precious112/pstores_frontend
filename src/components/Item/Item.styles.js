import styled from 'styled-components';
export const Wrapper = styled.div`
  display:block;
`;

export const Image = styled.img`
width:200px;
height:200px;
transition: all 0.3s;
object-fit: cover;
border-radius: 20px;
animation: animateThumb 0.5s;

:hover {
  opacity: 0.8;
}

@keyframes animateThumb {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

export const ContentItems= styled.div`
display:flex;
justify-content:space-between;
width:200px;
`;

export const ContentItem= styled.div`

`;

export const P= styled.b`
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
background:#faf9f7;
border-radius:10px;
width:60%;
text-align:center;
`;

export const Icon= styled.div`
background:#faf9f7;
border-radius:50px;
width:10%;
padding:10px;

`;