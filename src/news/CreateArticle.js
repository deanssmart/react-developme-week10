import React, { Component } from 'react';
import axios from '../axios';
import Field from '../passing-data-up/Field';

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = { title: "", content: "", tags: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, field) {
        let change = {}
        change[field] = e.currentTarget.value;
        this.setState(change);

        // computed property names
    }
    

    handleSubmit(e) {
        e.preventDefault();

        const { title, content, tags } = this.state;

        axios.post('/articles', {
            title: title,
            content: content,
            tags: tags.split(', ')
        }).then(() => {
            this.setState({ title: "", content: "", tags: "" });
        });
    }

    render() {
        const { title, content, tags } = this.state;

        return(
            <form onSubmit={ this.handleSubmit } className="container">
                <Field label="Title" name="title" type="text" value={ title } handleChange={ (e) => this.handleChange(e, "title")  }/>
                <Field label="Content" name="content" type="text" value={ content } handleChange={ (e) => this.handleChange(e, "content")  }/>
                <Field label="Tags" name="tags" type="text" value={ tags } handleChange={ (e) => this.handleChange(e, "tags")  }/>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default CreateArticle;