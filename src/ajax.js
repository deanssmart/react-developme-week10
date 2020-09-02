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

// axios.get('/articles/45').then(({ data }) => {
//     console.log(data.data);
// }).catch(error => {
//     console.log("Not Found");
// });

// axios.get('/articles').then(({ data }) => {
//     console.log(data.data.map(item => item.title));
// });


axios.get('/articles').then(({ data }) => {
    
    let allTags = data.data.flatMap(item => item.tags);

    let frequency = allTags.reduce((acc, curr) => {
            if(!acc[curr]) {
                acc[curr] = 0;
            }
                acc[curr] += 1;
            
                return(acc);
    }, {});

    console.table(frequency);       
});


// axios.get('tags').then(({ data }) => {
//     data.data.map(item => {
//         axios.get('/tags/'+item.id+'/articles').then(({ data }) => {
//             console.log(data.data.length);
//         });
//     });
// });

// axios.get('tags').then(({ data }) => {
//     data.data.map(item => {
//         console.table(item.id);
//         });
//     });

// axios.get('tags').then(({ data }) => {
//     console.log(data.data);
// });