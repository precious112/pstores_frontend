import React, { Component } from "react";

class ItemCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>{this.props.item_name}</p>
                <p>{this.props.item_price}</p>
            </div>
        )
    }
}

export default ItemCard;