import React from "react";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
import { CSSTransition } from "react-transition-group";


const PostList = ({posts,title, remove}) => {

if(!posts.length) {
    return (
        <div>
        <h1 style={{textAlign:'center'}}>
            Постов нет
        </h1>
        </div>
)
}

return(
<div>
        <TransitionGroup>
{posts.map((post, index) =>
<CSSTransition
key={post.id}
timeout={500}
classNames="post"
>
      <PostItem remove={remove} number={index + 1} post={post} />
      </CSSTransition>
      )}
        </TransitionGroup>      
</div>
    );
};

export default PostList;