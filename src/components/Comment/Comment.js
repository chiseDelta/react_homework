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
            <button>sho</button>
        </div>
    );
};

export {
    Comment
};