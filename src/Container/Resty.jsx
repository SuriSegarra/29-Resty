import React, { useState } from 'react';
import Request from '../components/Request';

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');


  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setBody(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
 
    <Request 
      url={url} onUrlChange={handleUrlChange}
      method={method} onMethodChange={handleMethodChange}
      body={body} onBodyChange={handleBodyChange}
      onSubmit={handleSubmit}/>
  );
};

export default Resty;
