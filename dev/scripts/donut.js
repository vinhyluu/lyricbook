import React from "react";

class Donut extends React.Component{
    render(){
        return(
            <h2>{this.props.donutName}</h2>
        )
    }
}

export default Donut; 
//have to export -- we could have many exports from our modules but only 1 default export 
//if you did export Donut it wouldn't become the default thing 
//this allows us to import it later-- without this line the code is going nowhere
//this can be consumed later 