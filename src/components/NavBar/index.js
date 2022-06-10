import React, {useState, useEffect} from 'react';
import { GlobalStyle } from '../../GlobalStyles';
import { Link } from 'react-router-dom';

import { Wrapper,HomeTab,ContactTab,ItemTab,ItemsTab,A, MobileNav, MenuModal, ModalChild,CancelIcon } from './NavBar.styles';

const NavBar = () => {

  const [showModal, setShowModal] = useState(false) 

  const ShowModal = () =>{
    setShowModal(!showModal)
  }

  return(
    <Wrapper>
      <HomeTab>Pstore</HomeTab>
      <ItemTab>
        <Link to='/about' style={{ textDecoration: 'none' }}>
        <ItemsTab><A>Home</A></ItemsTab>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>
        <ItemsTab><A>Shop</A></ItemsTab>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>
        <ItemsTab><A>More</A></ItemsTab>
        </Link>
        <ContactTab>
        <Link to='/about' style={{ textDecoration: 'none'}}>
        <A>Contact</A>
        </Link>
        </ContactTab>
      </ItemTab>
      
      <MobileNav >
        
          <i className='fas fa-bars menu-nav-icon' onClick={ShowModal}>
            </i>
      </MobileNav>

      {
        showModal ?

        <MenuModal>
        <ModalChild>
          <h1>Home</h1>
          <CancelIcon>
          <i className='fas fa-times' onClick={ShowModal}></i>
          </CancelIcon>
        </ModalChild>
      </MenuModal>

      : null

      }
      

      
     
      <GlobalStyle/>
    </Wrapper>
    )
};

  export default NavBar;