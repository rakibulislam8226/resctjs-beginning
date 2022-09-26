import React, { Component } from "react"

class netflixSeries extends Component{
    render(){
        
        const time = new Date().toLocaleTimeString();
        return <React.Fragment>
            <h3 className="netflix">Top Five Netflix series.</h3>
            <ol>
                <li>Dark</li>
                <li>Black</li>
                <li>Yello</li>
                <li>Gray</li>
                <li>Blue</li>
            </ol>
            <h4><p>Today's time is {time}</p></h4> <hr/>
            
        </React.Fragment>
    }
}
export default netflixSeries;