import { Container, Row } from 'react-bootstrap';
import { useParams, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getCategoryById } from '../../../redux/categoriesRedux';
import Post from '../../views/Post/Post';

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

const Category = () => {
  const { categoryId } = useParams();
  const categoryData = useSelector((state) =>
    getCategoryById(state, categoryId)
  );

  if (!categoryData) return <Navigate to='/' />;
  else
    return (
      <Container>
        <div className='d-flex justify-content-between'>
          <h1 className='m-0 align-self-center'>
            Category: {capitalizeFirstLetter(categoryId)}
          </h1>
        </div>
        {categoryData.length !== 0 && (
          <Row xs={1} md={2} lg={3} className='g-4 my-2'>
            {categoryData.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </Row>
        )}
        {categoryData.length === 0 && (
          <div className='d-flex m-1 justify-content-between'>
            <p className='d-block my-3 fs-5'>No Posts in this Category...</p>
          </div>
        )}
      </Container>
    );
};

export default Category;