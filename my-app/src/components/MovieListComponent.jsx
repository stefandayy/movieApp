import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import MovieCardComponent from "./MovieCardComponent";

const MovieListComponent = (props) => {
  const { movies } = props;
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4 pt-5 mx-5">
        {movies.map((movie) => (
          <Col>
            <MovieCardComponent movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieListComponent;
