import React, { useState, useEffect } from 'react';
import Request from '../components/Request/Request';
import { makeRequest } from '../services/makeRequest';
import Response from '../components/Response/Response';
import HistoryList from '../components/HIstory/HistoryList';

const getHistory = () => localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState(getHistory());
  //whenecer history changes, update history of local storage
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));

  }, [history]);

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
    makeRequest(url, method, body)
      .then(json => {
        setResponse(json);
        //we take out prev history, we create a new arr, we put the new obj with our curr url and method. then we spread all of our old historu into the array 
        setHistory(prevHistory  => [{ url, method }, ...prevHistory]);
        
      });
  };

  return (
    <>
      <HistoryList history={history}/>
      <Request 
        url={url} 
        method={method} 
        body={body} 
        onChange={handleChange}
        onSubmit={handleSubmit}/>
      <Response
        response={response}/>
    </>
  );
};

export default Resty;
