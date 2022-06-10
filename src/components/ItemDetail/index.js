import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import { Wrapper,ItemImage,BuyItemSection,AboutItemSection,About,BuyButton,BuyIcon,Buy,AboutSmall } from './ItemDetail.styles';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class ItemDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            newData: {},
            loading : false,
          }
    }

    componentDidMount(){
        const { ItemId } = this.props.params;
        const apiUrl = `https://preciousdonny.pythonanywhere.com/` + ItemId + `/`;
        fetch(apiUrl)
        .then((data) => data.json())
        .then((items) => {
          this.setState({newData: items});
          this.setState({loading: true}); 
          console.log(items) 
        });
      }
    
      

    render(){
        return(
   <Wrapper>
       <AboutItemSection>
        <AboutSmall>
        <h4>{this.state.newData.item_name}</h4>
        <p>{this.state.newData.item_price}</p>   
        </AboutSmall>
        <About>
       <h2>{this.state.newData.item_name}</h2>
        <h3>{this.state.newData.item_price}</h3>
        </About>
        <About>
       <h3>About</h3>
        <p>{this.state.newData.about_item}</p>
        </About>
       </AboutItemSection>
       <ItemImage src={this.state.newData.item_image} alt='movie-thumb'/>
       <BuyItemSection>
       <About>
       <h3>Discount Offer!</h3>
        <p>get at 20% discount now</p>
        </About>
        <Buy>
        <BuyIcon>
        <i class="fas fa-shopping-cart"></i>
        </BuyIcon>
        <BuyButton>Buy Now</BuyButton>
        </Buy>
       </BuyItemSection>
   </Wrapper> 
  );
        }
    }

  export default withParams(ItemDetail);