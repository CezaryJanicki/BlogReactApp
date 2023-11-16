import Post from '../../views/Post/Post.js';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux.js';

const Posts = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <Row xs={1} md={2} lg={3} className='g-4 my-2'>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Row>
  );
};

export default Posts;
