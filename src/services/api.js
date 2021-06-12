import axios from 'axios';
import { PRIVATE, PUBLIC, BASE } from '../../src/enuns';
import md5 from "md5";

const baseUrl = BASE.URL;
const keyPub = PUBLIC.KEY;
const keyPri = PRIVATE.KEY;
const timeNow = Math.floor(Date.now() / 1000);
const hash = md5(timeNow + keyPri + keyPub);


const api = axios.create({

    baseURL: `${baseUrl}ts=${timeNow}&limit=20&apikey=${keyPub}&hash=${hash}`

})
    
 

export default api;



