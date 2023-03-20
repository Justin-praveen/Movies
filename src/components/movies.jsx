import {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { SlLike } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";
import Select from "react-select";
import Modals from "./Modal";
import { Servises } from "../Axios/Axios";

function MoviesFigure() {
  const [list, setlist] = useState([]);
  const diff = useDeferredValue(list);
  const [modalstate, setmodalstate] = useState(0);
  const [Geniriclist, setgeniriclist] = useState([]);
  const [Geniric, setgeniric] = useState(28);
  const [ispending, setpending] = useTransition();
  const [search, setSearch] = useState("");
  const [videos, setvideo] = useState("NOpe");
  const [Details,setDetails] = useState([])

  const [show, setshow] = useState(false);

  const handleClose = () => {
    setshow(!show);
  };

  const Movies = useCallback(
    () => (
      <>
        <Row>
          <iframe
            width="700"
            height="345"
            src={`https://www.youtube.com/embed/${videos}?autoplay=1&controls=1`}
            frameborder="0" allowfullscreen
          ></iframe>
        </Row>
      </>
    ),
    [videos]
  );

  const MoviesDetails = useCallback(
    () => (
      <>
        <Row >
        <Card className="h-100 p-0 mfullcarD">
                          <Card.Img
                            className="h-100"
                            src={`https://image.tmdb.org/t/p/original${Details.backdrop_path}`}
                            alt="Card image"
                          />
                          <Card.ImgOverlay>
                            <Row className="lol">
                              
                            </Row>
                          </Card.ImgOverlay>
                        </Card>

        </Row>
      </>
    ),
    [modalstate]
  );

  useEffect(() => {
    (async () => {
      if (search !== "") {
        let { data } = await Servises.Searchlist(search);

        console.log(data.results);
        setpending(() => {
          setlist(data.results);
        });
      }
    })();
  }, [search]);

  useEffect(() => {
    (async () => {
      let { data } = await Servises.geniric(Geniric);

      console.log(data.results);
      setpending(() => {
        setlist(data.results);
      });
    })();
  }, [Geniric]);

  useEffect(() => {
    (async () => {
      let { data } = await Servises.list();

      const geners = data.genres.map((items) => {
        return {
          label: items.name,
          value: items.id,
        };
      });

      console.log(geners);

      setpending(() => {
        setgeniriclist(geners);
      });
    })();
  }, []);

  return (
    <>
      <Row>
        <Row className="d-flex justify-content-between">
          <Col lg={4} className="ms-4 ">
            <Select
              options={Geniriclist}
              placeholder="Geners"
              onChange={(data) => {
                setgeniric(data.value);
              }}
            />
          </Col>
          <Col lg={4} className="ms-5">
            <Form.Control
              placeholder="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></Form.Control>
          </Col>
        </Row>

        {ispending && (
          <Row>
            {" "}
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        )}

        {list.length !== 0 ? (
          // Card -Start
          <Row className="m-3">
            {diff.map((items, key) => {
              return (
                <>
                  <Card className="m-2 mfull p-5">
                    <Row>
                      <Col lg="4" sm="6" className="ch mb-4">
                        <Card className="h-100 p-0 mfullcar">
                          <Card.Img
                            className="h-100"
                            src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                            alt="Card image"
                          />

                          <Card.ImgOverlay>
                            <Row className="hh">
                              {/* 1 */}
                              <Col lg="12 d-flex justify-content-center  ca align-items-center">
                                <Button
                                  pill
                                  className="butt"
                                  variant="dark"
                                  onClick={async () => {
                                    const { data } = await Servises.getvideos(
                                      items.id
                                    );

                                    setmodalstate(0);
                                    setshow(!show);
                                    setpending(() => {
                                      setvideo(data.results[0].key);
                                    });
                                  }}
                                >
                                  <CiPlay1 style={{color:"white"}} />
                                </Button>
                              </Col>

                              {/* 2 */}
                            </Row>
                            <Row className="lol">
                              <Col lg="4" className="attributes">
                                <h4 className="ffonts">
                                  <SlLike />
                                  <span>
                                    <h6>{items.vote_count}</h6>
                                  </span>
                                </h4>
                              </Col>
                              <Col lg="4" className="attributes">
                                <h4 className="ffonts">
                                  <AiOutlineHeart />
                                </h4>
                              </Col>
                              <Col lg="4" className="attributes">
                                <h4 className="ffonts">
                                  <FiShare2 />{" "}
                                </h4>
                              </Col>
                            </Row>
                          </Card.ImgOverlay>
                        </Card>
                      </Col>

                      {/* 1 */}

                      {/* 2 */}
                      <Col lg="8" sm="6">
                        <Row className="p-4">
                          <Col className="ab" lg="12">
                            <h1 className="ffonts">{items.original_title}</h1>
                          </Col>
                          <Col className="ab" lg="12">
                            <p className="ffonts"> {items.overview}</p>
                          </Col>
                          <Col className="ab" lg="12">
                            <Button
                              onClick={async() => {
                                const {data} = await Servises.getDetails(items.id)
                                console.log(data)
                                setDetails(data)
                                setmodalstate(1);
                                setshow(!show);
                              }}
                            >
                              DETALIS
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </>
              );
            })}
          </Row>
        ) : (
          // Card-ends
          <Row>
            {
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
          </Row>
        )}
      </Row>

      {modalstate === 0 && (
        <Modals
          show={show}
          handleClose={handleClose}
          Boady={<Movies/>}
        />
      )}
      {modalstate === 1 && (
        <Modals show={show} handleClose={handleClose} Boady={<MoviesDetails/>} />
      )}
    </>
  );
}

export default MoviesFigure;
