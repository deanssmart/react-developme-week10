import React, { Component } from 'react';
import axios from '../axios';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = { loaded: false, comments: [] };
        
    }

    componentDidMount() {
        let { id } = this.props;

        axios.get(`/articles/${id}/comments`).then(({ data }) => {
            this.setState({ loaded: true, comments: data.data });
        });
    }

    render() {
        const { loaded, comments } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <section className="container mt-4">
                <h3>Comments</h3>
                    { comments.length === 0 ? <p>No Comments</p> : (
                        <ul className="list-group">
                            { comments.map(comment => (
                                <li key={ comment.id } className="list-group-item">
                                    <h5>{ comment.email }</h5>
                                    <p className="text-muted">{ comment.comment }</p>
                                </li>
                            )) }
                        </ul>      
                    )} 
            </section>
        );
    }
}

export default Comments;