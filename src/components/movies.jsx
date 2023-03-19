import Figure from 'react-bootstrap/Figure';
import axios from 'axios';
import { useEffect, useState, useTransition } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import {SlLike} from "react-icons/sl"
import {AiOutlineHeart} from "react-icons/ai"
import {FiShare2} from "react-icons/fi"
import {CiPlay1} from "react-icons/ci"
import Select from 'react-select';

function MoviesFigure() {

    const [list,setlist] = useState([])
    const [pending,setpending] = useTransition()


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      


    useEffect(()=>{
       (
        async()=>{
            let {data} = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: '1e448e0dfcdbb565f5d329820065b4d2',
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    include_adult: false,
                    include_video: false,
                    page: 1,
                    with_genres: 28,
                    with_watch_monetization_types:"flatrate"
                }

            })

            console.log(data.results
                )

            setpending(()=>{
                setlist(data.results)
            })
        }
       )()

    },[])



    return (

       <Row >

        <Row>
            <Col lg={6}>
            <Select options={options} />
            </Col>
            <Col>
            <Form.Control>

</Form.Control>
            </Col>
        </Row>
        
        {
        list.length !== 0 ? 
        
        // Card -Start
        (<Row className='m-3'>{list.map((items,key) => {
            return (
               <>

<Card className='m-2 mfull p-5'>
<Row>


<Col lg="4" sm="6" className='ch mb-4'>
        


        <Card className='h-100 p-0 mfullcar'>
    <Card.Img  className='h-100' src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`} alt="Card image" />

    <Card.ImgOverlay>
  
    <Row className='hh' >

 
        
        
{/* 1 */}
<Col lg="12 d-flex justify-content-center  ca align-items-center" >
<Button pill className='butt'><CiPlay1/></Button>

</Col>

{/* 2 */}
</Row>
<Row className='lol'>
<Col lg="4" className='attributes'>
    <h4 className='ffonts'><SlLike/><span><h6>{items.vote_count}</h6></span></h4>
</Col>
<Col lg="4" className='attributes'>
<h4 className='ffonts'><AiOutlineHeart/></h4>
</Col>
<Col lg="4" className='attributes'>
<h4 className='ffonts'><FiShare2/> </h4>
</Col>
</Row>
      </Card.ImgOverlay>
    </Card>
        
     
        </Col>

{/* 1 */}
  

    {/* 2 */}
              <Col lg="8" sm="6">
                  <Row className='p-4'>
                    <Col className='ab' lg="12">
                    <h1 className='ffonts'>{items.original_title}</h1>
                    </Col>
                    <Col className='ab' lg="12">
                    <p className='ffonts'> {items.overview}</p>
                    </Col>
                    <Col className='ab' lg="12">
                    <Button>DETALIS</Button>
                    </Col>
                  </Row>
              
              </Col>
             </Row>
                    
</Card>
               </>
            )
        
            })}</Row>) 

            // Card-ends
            : (<Row>{<h3>Loading...!</h3>}</Row>)
       }
       </Row> 


        
    );
}

export default MoviesFigure;