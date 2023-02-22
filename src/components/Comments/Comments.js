import {Component} from "react";

import {commentService} from "../../services";
import {Comment} from "./Comment";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount() {
        commentService.getAll().then(({data}) => this.setState({users: [...data]}))
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <Comment key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {
    Comments
};