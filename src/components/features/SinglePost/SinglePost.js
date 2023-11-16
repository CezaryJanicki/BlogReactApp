import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));

  if (!postData) return <Navigate to='/' />;
  return (
    <Container>
      <Row className='justify-content-center'>
        <div className='col-md-4 align-self-center'>
          <h1 className='m-0'>{postData.title}</h1>
        </div>
        <div className='mt-3 mt-md-0 col-md-4 d-flex justify-content-end align-items-start'>
          <Button className='m-2' variant='outline-info'>
            Edit
          </Button>
          <Button className='my-2 mw-2' variant='outline-danger'>
            Delete
          </Button>
        </div>
      </Row>
      <Row className='mt-4 justify-content-center'>
        <Col className='col-md-8 align-self-center'>
          <span className='fw-bold'>Author: </span>
          {postData.author}
          <br />
          <span className='fw-bold'>Published: </span>
          {postData.publishedDate}
          <br />
        </Col>
      </Row>
      <Row className='mt-4 justify-content-center'>
        <Col className='col-md-8 align-self-center'>{postData.content}</Col>
      </Row>
    </Container>
  );
};

export default SinglePost;