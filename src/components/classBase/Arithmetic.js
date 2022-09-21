import React from 'react';
import { Component} from 'react';

const fname= 'rakib'
const lname= 'isam'
class ArithmeticLogic extends Component{
    
    render(){
        return <React.Fragment>
        <h3> Arithmetic Logic</h3>
           The sum of 3 and 5 are {3+5} <br/>
            The sub of 5 and 3 are {5-3} <br/>
            The div of 5 and 3 are {5/3} <br/>
            The mul of 3 and 5 are {3*5} <br/>
            A random number {Math.random()} <br/>
            <h4>My full name {fname+" "+lname}</h4>
        <h3>{`My first name is ${fname} and last ${lname}.`}</h3> {/*template literials*/}
        <h3>{` full name is ${fname} ${lname}`}</h3> <hr/>
        

        </React.Fragment>
    }
}
export default ArithmeticLogic;