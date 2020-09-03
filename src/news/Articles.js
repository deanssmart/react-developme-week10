import React, { Component } from 'react';
import axios from '../axios';
import { Link } from "react-router-dom";
import Tags from './Tags';

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
                        <li key={ article.id } className="d-flex justify-content-between list-group-item list-group-item-action text-primary">
                            <Link to={ `/news/${article.id}` } className="w-75 p-2">{ article.title }</Link>
                            <Tags tags={ article.tags } />                         
                        </li>
                    )) }
                </ul>
            </article>
        );
    }
}

export default Articles;

