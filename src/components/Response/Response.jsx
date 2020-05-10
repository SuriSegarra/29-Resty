import React from 'react';
import PropTypes from 'prop-types';
//
const Response = ({ response }) => (
  <pre>
    {/* my reponse is gonna be a obj so I have to stringy it so react can display it  */}
    {/* the null and 2 means = every identation should take two tabs */}
    {JSON.stringify(response, null, 2)}
  </pre>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;
