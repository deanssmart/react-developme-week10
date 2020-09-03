import React, { Component } from 'react';
import axios from '../axios';
import Tags from './Tags';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = { loaded: false, article: [] };
        
    }

    componentDidMount() {
        let { id } = this.props;

        axios.get(`/articles/${id}`).then(({ data }) => {
            this.setState({ loaded: true, article: data.data });
        });
    }

    render() {
        const { loaded, article } = this.state;

        return !loaded ? <p>Loading...</p> : (

            <article className="container border-1 d-flex justify-content-between">
                <div>
                    <h2>
                        { article.title }
                    </h2>
                    <p>
                        { article.content }
                    </p>
                </div>
                <Tags tags={ article.tags } />
            </article>
        );
    }
}

export default Article;