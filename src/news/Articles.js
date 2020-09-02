import React, { Component } from 'react';
import axios from '../axios';

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = { loaded: false, articles: [] };
        
    }

    componentDidMount() {
        axios.get('/articles').then(({ data }) => {
            this.setState({ loaded: true, articles: data.data });
        });
    }

    render() {
        const { loaded, articles } = this.state;

        return !loaded ? <p>Loading...</p> : (

            <article className="container">
                <ul className="list-group">
                    { articles.map(article => (
                        <li key={ article.id } className="list-group-item text-primary">
                            { article.title }
                        </li>
                    )) }
                </ul>
            </article>
        );
    }
}

export default Articles;