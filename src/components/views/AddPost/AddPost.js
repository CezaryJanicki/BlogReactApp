import AddPostForm from '../../features/AddPostForm/AddPostForm'
import { Container, Row } from 'react-bootstrap';

const AddPost = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <div className='col-md-8 align-self-center'>
          <h1 className='m-0'>Add Post</h1>
        </div>
      </Row>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;