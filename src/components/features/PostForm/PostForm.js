import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './PostForm.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, onCancel, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = (e) => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
      setTitle('');
      setAuthor('');
      setPublishedDate('');
      setShortDescription('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)} className='col-md-8 mx-auto my-4'>
      <Form.Group className='mb-4 col-md-6' controlId='formPostTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 4 })}
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Title'
        />
         {errors.title && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required. Must be longer than 3 characters.
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-4 col-md-6' controlId='formPostAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 4 })}
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Enter Author'
        />
        {errors.author && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required. Must be longer than 3 characters.
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-4 col-md-6' controlId='formPostDate'>
        <Form.Label>Published</Form.Label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
          placeholder='Enter Publish Date'
          dateFormat='dd-MM-yyyy'
        />
      {dateError && (
        <small className='d-block form-text text-danger mt-2'>
        Date can't be empty
        </small>
      )}
      </Form.Group>

      <Form.Group className='mb-4' controlId='formPostShortDescription'>
        <Form.Label>Short Description</Form.Label>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 21 })}
            as='textarea'
            type='text'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            rows='3'
            placeholder='Enter Short Description'
            preserveWhitespace={true}
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
           This field is required. Must be longer than 20 characters.
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-4' controlId='formPostContent'>
        <Form.Label>Main Content</Form.Label>
        <ReactQuill
          className={styles.quill}
          theme='snow'
          value={content}
          onChange={setContent}
          placeholder='Enter Short Description'
        />
         {contentError && (
          <small className='d-block form-text text-danger mt-2'>
            Content can't be empty
          </small>
        )}
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant='primary' type='submit' className='me-3'>{actionText}</Button>
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