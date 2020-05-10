import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => {
  //neither the URL not the method are gonna be unique, you could hit the same URl multiple times. You can use the same method multiple times. thats why 'i'
  const historyElements = history.map((item, i) => (
    <li key={i}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <ul>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
