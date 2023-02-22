import {Component} from "react";

import css from './Comment.module.css'


class Comment extends Component {
    render() {
        const {postId, id, name, email, body} = this.props.user;
        return (
            <div className={css.Comment}>
                <div>postId: {postId}</div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
};