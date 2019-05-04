import axios from 'axios';
export default class ElectionService {

    get() {
        return axios.get('https://elecciones28a.porcentual.es/widgets/2019-elecciones/data/00/json/widgets/widget-map.json')
        .then(response => { console.log(response); return response.data; })
        .catch((error) => { console.error(error); return null; })
      // Use vue-resource or any other http library to send your request
    }
  
  }