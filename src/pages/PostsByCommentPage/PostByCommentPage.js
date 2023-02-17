import css from './PostByCommentPage.module.css'
import {PostsByComment} from "../../components";


const PostByCommentPage = () => {

    return (
        <div className={css.PostByCommentPage}>
            <div style={{fontSize: '40px', margin: '20px 20px 20px 40px'}}>Comment Post</div>
            <PostsByComment/>
        </div>
    );
};

export {
    PostByCommentPage
};