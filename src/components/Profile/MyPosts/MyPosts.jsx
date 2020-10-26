import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    const postData = [
        {id: 1, message: "How r u?", likes: 12},
        {id: 2, message: "Good beer", likes: 27},
        {id: 3, message: "What is time", likes: 8},
        {id: 4, message: "Where is the pen?", likes: 97}
    ]

    return (
        <div className={s.postBlock}>
            <form className={s.formBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </form>
            <div className={s.posts}>
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
                <Post message={postData[2].message} likes={postData[2].likes}/>
                <Post message={postData[3].message} likes={postData[3].likes}/>
            </div>
        </div>
    )
}

export default MyPosts;