import React from "react";
import Button from "react-bootstrap/Button";
function ButtonCheck() {
    return(
        <div>
            <button className="btn btn-outline-primary" type="submit">ButtonFunc</button> <br/> <br/>
            <Button variant="primary">
            Primary variant Button
        </Button>
        </div> 
    );
}

export default ButtonCheck;