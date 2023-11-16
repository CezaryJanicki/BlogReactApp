import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from '../../../redux/postsRedux';
import { editPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const cancelEdit = () => {
    navigate('/');
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EditPost = (post) => {
    dispatch(editPost({ ...post, id: postId }));

    navigate('/');
  };

  if (!postData) return <Navigate to='/' />;
  return <PostForm action={EditPost} actionText={'Save'} onCancel={cancelEdit} cancelText={'Cancel'} {...postData} />;
};

export default EditPostForm;