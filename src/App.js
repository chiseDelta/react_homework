import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {HomePage, TodosPage, NotFoundPage, AlbumsPage, CommentsPage} from "./pages";


const App = () => {

    return (
        <div style={{fontSize: 20, background: "#bee5ff"}}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export {App};