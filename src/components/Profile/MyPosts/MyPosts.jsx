import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    const posts = [
        {id: 1, message: "How r u?", likes: 12},
        {id: 2, message: "Good beer", likes: 27},
        {id: 3, message: "What is time", likes: 8},
        {id: 4, message: "Where is the pen?", likes: 97},
        {id: 5, message: "Do smth please!", likes: 2}
    ]

    let postElements = posts
        .map((item) => (<Post message={item.message} likes={item.likes}/>))


    return (
        <div className={s.postBlock}>
            <form className={s.formBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </form>
            {postElements}
        </div>
    )
}

export default MyPosts;