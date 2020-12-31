import React,{Component} from "react";

import "./Css/toggle.css"

export default class Darkmode extends Component{
    
    constructor(props){
        super(props);
        this.state={
            boolean:false
        }
    }

    checkboxclick=()=>{
        switch(this.state.boolean){
            case true:{
                document.getElementById("popular-users").style.cssText="margin-top:30px;idth:80%; display:grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));"
                this.setState({
                    boolean:false
                });
                console.log('true');
                break;
            }
            case false:{
                document.getElementById("popular-users").style.cssText="margin-top:30px;display:flex; flex-direction:column; justify-content: center;align-items: center;"
                this.setState({
                    boolean:true
                });
                console.log('false');
                break;
            }
        }
        
    }

    
    render(){
        return(   
      <div className="darkmode_button" >
            <input type="checkbox" className="checkbox" id="checkbox" onClick={this.checkboxclick} />
            <label htmlFor="checkbox" className="label" >
                
                <div className="ball"></div>
            </label>
        </div>
        );
    }
}

