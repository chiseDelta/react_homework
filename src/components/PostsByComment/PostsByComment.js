import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {PostByComment} from "../PostByComment/PostByComment";


const PostsByComment = () => {
    const {postId} = useParams();
    const [postsByComment, setPostsByComment] = useState([]);

    useEffect(() => {
        postsService.getPostById(postId).then(({data}) => setPostsByComment([data]))
    }, [postId])

    return (
        <div>
            {postsByComment.map(post => <PostByComment key={post.id} post={post}/>)}
        </div>
    );
};

export {
    PostsByComment
};