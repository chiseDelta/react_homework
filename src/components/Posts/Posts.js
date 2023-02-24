import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../services";
import {postActions} from "../../redux";
import {Post} from "./Post";


const Posts = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);

    useEffect(() => {
        postService.getAll().then(({data})=> dispatch(postActions.getAll(data)))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};