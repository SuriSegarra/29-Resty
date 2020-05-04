import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request';

describe('Request', () => {
  it('matches Request jsx', () => {
    const wrapper = shallow(<Request
    
      url='https://hey-arnold-api.herokuapp.com/api/v1/characters'
      method='POST'
      body='json body'
      onUrlChange={()=>{}}
      onMethodChange={()=>{}}
      onBodyChange={()=>{}}
      onSubmit={()=>{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
