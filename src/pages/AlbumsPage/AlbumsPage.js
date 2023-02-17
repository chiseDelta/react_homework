import css from './AlbumsPage.module.css'
import {Albums} from "../../components";


const AlbumsPage = () => {

    return (
        <div className={css.AlbumsPage}>
            <div style={{fontSize: '40px', margin: '20px 20px 20px 40px'}}>Albums</div>
            <Albums/>
        </div>
    );
};

export {
    AlbumsPage
};