import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

const Response = ({ response }) => (
  <pre className={styles.Response}>
    {/* my reponse is gonna be a obj so I have to stringy it so react can display it  */}
    {/* the null and 2 means = every identation should take two tabs */}
    {JSON.stringify(response, null, 2)}
  </pre>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
