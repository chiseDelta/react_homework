import {Outlet} from "react-router-dom";

import css from './CommentsPage.module.css'
import {Comments} from "../../components";


const CommentsPage = () => {

    return (
        <div className={css.CommentsPage}>
            <div style={{fontSize: '40px', margin: '20px 20px 20px 40px'}}>Comments</div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {
    CommentsPage
};