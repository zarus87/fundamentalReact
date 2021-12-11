import React, {useState} from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import './styles/App.css';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';

function App() {
   const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body:'Description'},
    {id:2, title:'JavaScript2', body:'Description'},
    {id:3, title:'JavaScript3', body:'Description'}
   ])

   const [posts2, setPosts2] = useState([
    {id:1, title:'Python', body:'Description'},
    {id:2, title:'Python2', body:'Description'},
    {id:3, title:'Python3', body:'Description'}
   ])

  return (
    <div className="App">
      <PostList posts={posts} title='Посты про JS'/>
      <PostList posts={posts2} title='Посты про Python'/>
    </div>
  );
}

export default App;
