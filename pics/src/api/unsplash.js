import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 32bbdbdb163a4cc8989f79ec2a0858b0576b49d60a1ad3e21826cba26dd35d0e'
      }
});