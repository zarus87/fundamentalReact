import React, {useState} from "react";
import MyButton from "./button/MyButton";
import MyInput from "./Input/MyInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'',body:''})

    const addNewPost = (e) => {
        e.preventDefault ()
        const newPost = {
            ...post,id: Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
       }

return (

<form>
<MyInput 
 value={post.title}
 onChange={e => setPost({...post, title: e.target.value})} 
 type='text'
 placeholder='название поста'
 />

<MyInput 
value={post.body}
onChange={e => setPost({...post, body: e.target.value})}
type='text' 
placeholder='Описание поста'
/>

<MyButton onClick={addNewPost}>Создать пост</MyButton> 
</form>
    );
};

export default PostForm;