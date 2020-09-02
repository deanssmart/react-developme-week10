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

axios.delete('/articles/44').then( () => {
    console.log("Deleted");
});