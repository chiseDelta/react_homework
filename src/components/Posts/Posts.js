import {useEffect, useState} from "react";

import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import {postService} from "../../services";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h2>Post Details:</h2>
            {postDetails && <PostDetails post={postDetails}/>}

            <hr/>

            <h2>Posts:</h2>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {Posts};