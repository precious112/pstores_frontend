import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '../Grid';
// Styles

import { Wrapper,Image,ContentItem,ContentItems,P,Icon } from './Item.styles';

class Item extends Component{
  constructor(props){
      super(props);
  }

  render(){
      return(
          <Wrapper>
            {this.props.clickable ? (
      <Link to={`/${this.props.ItemDetail}`}>
        <Image src={"http://preciousdonny.pythonanywhere.com/" + this.props.item_image} alt='movie-thumb'/>
      </Link>
    ) : (
      <Image src={"http://preciousdonny.pythonanywhere.com/" + this.props.item_image} alt='movie-thumb'/>
    )}
            
            <ContentItems>
              <P>{this.props.item_name}</P>
              <Icon><i class="fas fa-shopping-cart"></i></Icon>
            </ContentItems>
          </Wrapper>
      )
  }
}

export default Item;

