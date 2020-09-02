import axios from './axios';

// axios.get('/articles').then(({ data }) => {
//     console.log(data.data);
// });

// axios.post('/articles', {
//     title: "Here we go again",
//     content: "Week 10, lets see how much I remember about API's",
//     tags: ["#post", "#another", "woo"]
// }).then(({ data }) => {
//     console.log(data.data.id);
// });

// axios.get('/articles/44').then(({ data }) => {
//     console.log(data.data);
// });

// axios.patch('/articles/44', {
//     tags: ["spoons", "science", "spoon truther"]
// }).then(({ data }) => {
//     console.log(data.data.tags);
// });

// axios.delete('/articles/44').then( () => {
//     console.log("Deleted");
// });

// axios.post('/articles/60/comments', {
//     email: "notafakeemail@realthing.com",
//     comment: "amazing comment"
// }).then(({ data }) => {
//     console.log(data.data.id);
// });

// axios.get('/articles/13/comments').then(({ data }) => {
//     console.log(data.data);
// });

// axios.get('tags').then(({ data }) => {
//     console.log(data.data);
// });

axios.get('/articles/45').then(({ data }) => {
    console.log(data.data);
}).catch(error => {
    console.log("Not Found");
});