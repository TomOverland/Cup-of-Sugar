import API from './API';


 const postItemToBackend = (itemData) => {
  return API.saveItem(itemData).then((res) => {
    console.log('response', res);
    return res === 'OK';
  });
};

export default postItemToBackend;