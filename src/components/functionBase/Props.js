import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Props(props) {
  return (
    <>
    <div className="row">
    <div className="col-md-6">
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.imgsrc} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.sname}</Card.Text>
            <a href={props.link} target="_rakib">
              <Button variant="primary">Watch</Button>
            </a>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
    </>
  );
}

export default Props;
