import React, {useState, useRef, useMemo} from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import './styles/App.css';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/Input/MyInput';
import PostForm from './Components/UI/PostForm';
import MySelect from './Components/UI/Select/MySelect';
import PostFilter from './Components/UI/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';

function App() {
   const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body:'Description'},
    {id:2, title:'JavaScript2', body:'Description'},
    {id:3, title:'JavaScript3', body:'Description'}
   ]) 
   
const [filter, setFilter] = useState({sort:'', query:''}) 

const [modal, setModal] = useState(false);

const sortedPosts = useMemo(() => {
  if (filter.sort) {
    return [...posts].sort((a, b) =>a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts;
}, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPosts])

   const createPost = (newPost) => {
     setPosts([...posts,newPost])
     setModal(false)
   }

const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
}

  




   return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
      filter={filter}
      setFilter={setFilter}
      />
      
    <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
      
      
    </div>
  );
   }

export default App;
