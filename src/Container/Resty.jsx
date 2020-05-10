import React, { useState } from 'react';
import Request from '../components/Request';

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  
  // const handleUrlChange = ({ target }) => {
  //   setUrl(target.value);
  // };

  // const handleMethodChange = ({ target }) => {
  //   setMethod(target.value);
  // };

  // const handleBodyChange = ({ target }) => {
  //   setBody(target.value);
  // };

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('you should make a request to', url, method, body);
  };

  return (
 
    <Request 
      url={url} 
      method={method} 
      body={body} 
      onChange={handleChange}
      onSubmit={handleSubmit}/>
  );
};

export default Resty;
