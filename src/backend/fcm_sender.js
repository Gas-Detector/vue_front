const axios = require('axios');

const fcm_sender= async () => {

  try {
    return await axios.get('/api/fcm'); //fcm에 get 전달
  } catch (error) {
    console.error(error);
  }
};


module.exports ={
    fcm_sender
}