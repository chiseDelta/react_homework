import {Posts, Comments} from "./components";
import css from './App.module.css'


const App = () => {
    return (
        <div className={css.App}>
            <h1>Posts</h1>
            <Posts/>

            <hr/>

            <h1>Comments</h1>
            <Comments/>
        </div>
    );
}

export {App};