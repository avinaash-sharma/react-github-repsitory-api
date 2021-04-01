import React, { Component } from 'react'

const API = 'https://api.github.com/users/avinaash-sharma/repos';
export default class Background extends  React.Component<{},any> {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
	
componentDidMount() {
    
       return fetch(API)
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             
             data: responseJson
           }, function() {
             // In this block you can do something with new state.
             console.log(this.state.data);
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

    render() {
      const values=this.state.data;
        return (
            <div>
                {
                  values.map((element,index) => {
                    return(
                    <h4 key={index}>{element.name}</h4>
                    )
                  })
                }
                
            </div>
            
        )
    }
}
