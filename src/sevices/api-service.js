import axios from 'axios';

const API_KEY = '22511220-6250d1f4cc52618ccfc371d23';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = ({searchQuery = '', currentPage = 1}) => {
    return axios
    .get(`/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}

export default fetchImages;