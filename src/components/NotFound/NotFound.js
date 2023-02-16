import {Link} from "react-router-dom";
import css from "./NotFound.module.css"


const NotFound = () => {

    return (
        <div>
            <Link className={css.homeButton} to={''}>Back to Home</Link>
            <img className={css.imageError} src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png" alt="page not found"/>
        </div>
    );
};

export {
    NotFound
};