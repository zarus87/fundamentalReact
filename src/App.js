import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import PostForm from './Components/UI/PostForm';
import PostFilter from './Components/UI/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';

function App() {
const [posts, setPosts] = useState([]) 
   
const [filter, setFilter] = useState({sort:'', query:''}) 

const [modal, setModal] = useState(false);

const  sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

const [isPostsLoading, setIsPostsLoading] = useState(false);

useEffect(() => {
 fetchPosts()
}, [])



   const createPost = (newPost) => {
     setPosts([...posts,newPost])
     setModal(false)
   }

async function fetchPosts () {
  setIsPostsLoading(true);
  setTimeout (async () => {
    const posts = await PostService.getAll();
    setPosts(posts)  
    setIsPostsLoading(false);
  },1000)
  
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
      {isPostsLoading
      ?  <h1>Идёт загрузка...</h1>
      :<PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
      }
    
      
      
    </div>
  );
   }

export default App;
