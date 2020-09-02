import axios from './axios';

axios.get('/articles').then(({ data } ) => {
    console.log(data.data);
});