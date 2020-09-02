import React, { Component } from 'react';
import axios from '../axios';
import { Link } from "react-router-dom";

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
                        <li key={ article.id } className="card">
                            <Link to="/news" className="border-0 list-group-item list-group-item-action text-primary">
                                <div className="d-flex w-100 justify-content-between">
                                    <p>{ article.title }</p>
                                    <div>
                                        { article.tags.map(tags => (
                                                <p className="badge badge-primary ml-2">{ tags }</p>
                                        )) }   
                                    </div>
                                </div> 
                            </Link>                         
                        </li>
                    )) }
                </ul>
            </article>
        );
    }
}

export default Articles;