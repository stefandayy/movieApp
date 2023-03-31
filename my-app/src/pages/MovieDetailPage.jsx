import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Row, Col,Button} from "react-bootstrap";
import NoSearchNavbarComponent from "../components/NoSearchNavbarComponent";

const MovieDetailPage = (props) => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=1f09a29b`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [imdbID]);

  return (
    <>
    <NoSearchNavbarComponent/>
      <div className="page">
        <Container className="py-5">
          <Card bg="dark" text="white">
            <Row sm={1} md={1} lg={2}>
              <Col className="text-center">
                <Card.Img
                  variant="top"
                  src={movie.Poster}
                  style={{ width: "230px" }}
                  className="m-3 pt-5 "
                />
              </Col>{" "}
              <Col>
                <Card.Body className="my-5">
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>
                    {" "}
                    <b>Director: {movie.Director}</b>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <b>Actors: {movie.Actors} </b>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <b>Runtime: {movie.Runtime}</b>
                  </Card.Text>
                  <Card.Text>
                    <b>Year: {movie.Year} </b>
                  </Card.Text>
                  <Card.Text>{movie.Plot}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
           <Link to="/"><Button className="m-3" >Back Home</Button></Link>
            
          </Card>
          
        </Container>
      </div>
    </>
  );
};

export default MovieDetailPage;
