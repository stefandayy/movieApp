import React from "react";
import Card from "react-bootstrap/Card";

const MovieCardComponent = (props) => {
  return (
    <Card
    bg="dark"
    text="white"
     style={{ width: "200px"}}>
      <Card.Img
        variant="top"
        src={props.movie.Poster}
      />
      <Card.Body className="text-center">
        <Card.Title>{props.movie.Title}</Card.Title>
        <Card.Text >
          <p > <b>{props.movie.Year}</b> </p>
          <p> <b> {props.movie.Type}</b> </p>
         
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCardComponent;
