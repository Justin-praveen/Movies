import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect}from 'react'


function Cards() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
              api_key: '1e448e0dfcdbb565f5d329820065b4d2',
              language: 'en-US'
            }
          })
          .then(response => {
            console.log(response.data)
            setMovies(response.data.genres);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

  
    return (
        <Row lg={5}
        >  
            {movies.map(item => (
                 <Col className='m-2'>
                <Card > 
                
                <Card.Body >
                 <b>{item.name}    </b>          
                </Card.Body>
              </Card>
              </Col>
              ))}
        </Row>
          
           
          
    )
  }
  
  export default Cards
  