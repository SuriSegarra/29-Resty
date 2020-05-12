import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request  = ({ url, method, body, onChange, onSubmit }) => (
  <form className={styles.Request} onSubmit={onSubmit}>
    <input type='text' name='url' value={url} onChange={onChange} />
    
    <input type='radio' name='method' value='POST' checked={method === 'POST'} onChange={onChange}/>
    <label htmlFor="POSt">POST</label>

    <input type='radio' name='method' value='GET' checked={method === 'GET'} onChange={onChange}/>
    <label htmlFor="GET">GET </label>

    <input type='radio' name='method' value='PUT' checked={method === 'PUT'} onChange={onChange}/>
    <label htmlFor="PUT">PUT</label>

    <input type='radio' name='method' value='PATCH' checked={method === 'PATCH'} onChange={onChange}/>
    <label htmlFor="PATCH">PATCH</label>
    

    <input type='radio' name='method' value='DELETE' checked={method === 'DELETE'} onChange={onChange}/>
    <label htmlFor="DELETE">DELETE</label>

    <textarea name='body' value={body} onChange={onChange}> </textarea>
    <button>Go!</button>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;

