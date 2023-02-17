import {Link} from "react-router-dom";

import css from './Comment.module.css'


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={css.simpleStyles}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <Link to={postId.toString()}>
                <button>Show Post</button>
            </Link>
        </div>
    );
};

export {
    Comment
};