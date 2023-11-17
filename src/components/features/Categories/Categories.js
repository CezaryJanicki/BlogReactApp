import { Container, Row, ListGroup } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

const Categories = () => {
  const categoriesData = useSelector((state) => getAllCategories(state));

  if (!categoriesData) return <Navigate to='/' />;
  return (
    <Container>
      <Row className='justify-content-center'>
        <div className='col-md-8 p-0 align-self-center'>
          <h1 className='m-0'>Categories</h1>
        </div>
      </Row>

      <Row className='justify-content-center'>
        <ListGroup className='my-4 p-0 col-md-8 align-self-center'>
          {categoriesData.map((category) => (
            <ListGroup.Item key={category} id={category} className='fs-5'>
              <Link to={`/category/${category}`}>{capitalizeFirstLetter(category)}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Categories;