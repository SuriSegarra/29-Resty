import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './HistoryList.css';

const HistoryList = ({ history }) => {
  //neither the URL not the method are gonna be unique, you could hit the same URl multiple times. You can use the same method multiple times. thats why 'i'
  const historyElements = history.map((item, i) => (
    <li key={i}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <>
      <h2>History</h2>
      <aside  className={styles.container}>
        <ul className={styles.History}>
          {historyElements}
        </ul>
      </aside>
    </>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
