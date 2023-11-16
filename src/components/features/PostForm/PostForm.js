import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PostForm = ({ action, actionText, onCancel, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
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

      <div className="d-flex justify-content-end">
        <Button variant='primary' type='submit' className='mr-4'>{actionText}</Button>
        <Button variant='secondary' onClick={onCancel}>Cancel</Button>
      </div>
    </Form>
  );
};

export default PostForm;

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};