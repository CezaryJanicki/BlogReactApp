import Posts from '../../features/Posts/Posts';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='d-flex justify-content-between'>
      <h1 className='m-0 align-self-center'>All Posts</h1>
        <Link to={`post/add`}>
          <Button className='my-2' variant='outline-primary'>
            Add Post
          </Button>
        </Link>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
