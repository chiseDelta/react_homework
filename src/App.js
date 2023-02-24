import css from './App.module.css'
import {Posts} from "./components";


const App = () => {
    return (
        <div className={css}>
            <h2>Posts with Redux</h2>
            <Posts/>
        </div>
    );
}

export {App};