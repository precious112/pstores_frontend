import React,{ Component, useEffect, useState } from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { withRouter } from "react-router";

import { GlobalStyle } from './GlobalStyles';
import NavBar from './components/NavBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Item from './components/Item';
import Grid from './components/Grid';
import MoreA from './components/MoreA';
import Footer  from './components/Footer';
import About from './components/About';
import ItemCard from './itemCard';
import ItemDetail from './components/ItemDetail';
import { render } from '@testing-library/react';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        state : [],
        newData: [],
        loading : false,
      }
  }

  componentDidMount(){
    const apiUrl = `https://preciousdonny.pythonanywhere.com/`;
    fetch(apiUrl)
    .then((data) => data.json())
    .then((items) => {
      this.setState({state: items.data});
      this.setState({loading: true});
      console.log(items.data)
    });
  }

  
      
    render(){
      return(
    <div>
     <Router>  
    <NavBar />
   <Routes> 
    

<Route exact  path='/' element={<><Header/><SearchBar/>
  {this.state.loading 

? 
 <Grid header="Latest">
<React.Fragment>
    {this.state.state.map((item) => (<Item key={item.id} clickable={true} item_image={item.item_image} item_name={item.item_name} ItemDetail={item.id}  /> ))}
</React.Fragment>
</Grid>

:

<p>Loading...</p>


}

<MoreA/>  
{this.state.loading 

? 
<Grid header="Popular">
<React.Fragment>
{this.state.state.map((item) => (<Item key={item.id} clickable={true} item_image={item.item_image} item_name={item.item_name} ItemDetail={item.id}  /> ))}
</React.Fragment>
</Grid>

:

<p>Loading...</p>


}
<Footer/>
</>}/>

<Route exact path='/:ItemId'
    element={ <ItemDetail />}/>
{/* { this.state.state.filter(item => item.id==this.props.params)

    } */}

    
    
<Route exact path='/about' element={<About/>} />    

</Routes> 
     
    <GlobalStyle />
    </Router>
    </div>
  
      );
    }
  }



export default App;
