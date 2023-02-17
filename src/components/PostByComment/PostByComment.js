import {useNavigate} from "react-router-dom";

import css from './PostByComment.module.css'


const PostByComment = ({post}) => {
    const {userId, id, title, body} = post;

    const backToComments = useNavigate();

    return (
        <div className={css.simpleStyles}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => backToComments('/comments')}>Back to Comments</button>
        </div>
    );
};

export {
    PostByComment
};