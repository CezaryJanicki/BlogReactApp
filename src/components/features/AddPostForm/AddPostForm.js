import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const [title, setTitle] = useState(undefined);
  const [author, setAuthor] = useState(undefined);
  const [publishedDate, setPublishedDate] = useState(undefined);
  const [shortDescription, setShortDescription] = useState(undefined);
  const [content, setContent] = useState(undefined);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title: title,
        author: author,
        publishedDate: publishedDate,
        shortDescription: shortDescription,
        content: content,
      })
    );
    setTitle(null);
    setAuthor(null);
    setPublishedDate(null);
    setShortDescription(null);
    setContent(null);
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit} className='col-md-8 mx-auto my-4'>
      <Form.Group className='mb-4 col-md-6' controlId='formPostTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Title'
        />
      </Form.Group>

      <Form.Group className='mb-4 col-md-6' controlId='formPostAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Enter Author'
        />
      </Form.Group>

      <Form.Group className='mb-4 col-md-6' controlId='formPostDate'>
        <Form.Label>Published</Form.Label>
        <Form.Control
          type='text'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          placeholder='Enter Publish Date'
        />
      </Form.Group>

      <Form.Group className='mb-4' controlId='formPostShortDescription'>
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as='textarea'
          type='text'
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          rows='3'
          placeholder='Enter Short Description'
        />
      </Form.Group>

      <Form.Group className='mb-4' controlId='formPostContent'>
        <Form.Label>Main Content</Form.Label>
        <Form.Control
          as='textarea'
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows='8'
          placeholder='Enter Short Description'
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Add Post
      </Button>
    </Form>
  );
};

export default AddPostForm;