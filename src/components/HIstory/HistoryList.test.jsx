import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';

const history = [
  {
   
    url: 'https//:testur.com',
    method: 'POST'
  }
];

describe('HistoryList', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<HistoryList history={history} />);
    expect(wrapper).toMatchSnapshot();
  });
});