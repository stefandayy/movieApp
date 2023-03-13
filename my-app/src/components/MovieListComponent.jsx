import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import MovieCardComponent from "./MovieCardComponent";

const MovieListComponent = (props) => {
  const { movies } = props;
  return (
    <Container>
      <Row xs={1} md={4} lg={8} className="g-4 m-1 d-flex justify-content-center">
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
