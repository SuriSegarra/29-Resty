import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form className={styles.Request} onSubmit={onSubmit}>
    <input type='text' value={url} onChange={onUrlChange} />

    <input id='GET' type='radio' name='method' value='GET' onChange={onMethodChange}></input>
    <label htmlFor='GET'>GET</label>

    <input id='POST' type='radio' name='method' value='POST' onChange={onMethodChange}></input>
    <label htmlFor='POST'>POST</label>

    <input id='PUT' type='radio' name='method' value='PUT' onChange={onMethodChange}></input>
    <label htmlFor='PUT'>PUT</label>

    <input id='PATCH' type='radio' name='method' value='PATCH' onChange={onMethodChange}></input>
    <label htmlFor='PATCH'>PATCH</label>

    <input id='DELETE' type='radio' name='method' value='DELETE' onChange={onMethodChange}></input>
    <label htmlFor='DELETE'>DELETE</label>

    <textarea value={body} onChange={onBodyChange}> </textarea>
    <button>Go!</button>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

};

export default Request;
