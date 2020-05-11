  
import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request';

describe('Request concomponent', () => {
  it('matches a snapshot of Request.jsx', () => {
    const wrapper = shallow(<Request
      url='test url'
      method='GET'
      body='JSON body'
      onChange={()=>{}}
      onSubmit={()=>{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
