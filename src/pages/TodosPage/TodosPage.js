import css from './TodosPage.module.css'
import {Todos} from "../../components";


const TodosPage = () => {

    return (
        <div className={css.TodosPage}>
            <div style={{fontSize: '40px', margin: '20px 20px 20px 40px'}}>ToDo's</div>
            <Todos/>
        </div>
    );
};

export {
    TodosPage
};