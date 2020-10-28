import React, { Component } from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={s.item}>
                <img src="https://1gr.cz/fotky/lidovky/15/101/lnc460/LSO574a5f_jardajagr.jpg"/>
                <div>{props.message}</div>
                <div>Likes: {props.likes}</div>
            </div>
        </div>
    )
}

export default Post;