import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/views/Home/Home';
import SinglePost from './components/features/SinglePost/SinglePost';
import PostEdit from './components/features/PostEdit/PostEdit';
import AddPost from './components/views/AddPost/AddPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';


function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/post/:postId' element={<SinglePost />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route exact path='/post/edit/:postId' element={<PostEdit />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
