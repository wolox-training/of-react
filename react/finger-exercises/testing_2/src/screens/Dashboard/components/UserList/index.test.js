import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('shows new user when props are changed', () => {
    const users = [{ id: 1, name: 'Jane', active: true }]
    const wrapper = shallow(<UserList users={users} />);
    const newUser = { id: 2, name: 'Sean', active: true };
    wrapper.setProps({ users:[newUser] });
    expect(wrapper.find('UserRow').props('user').user).toEqual(newUser);
  });
  it('setProps makes componentDidUpdate to be executed', () => {
    jest.spyOn(UserList.prototype, 'componentDidUpdate');
    const users = [{ id: 1, name: 'Jane', active: true }]
    const wrapper = shallow(<UserList users={users} />);
    const newUser = { id: 2, name: 'Sean', active: true };
    wrapper.setProps({ users:[newUser] });
    expect(UserList.prototype.componentDidUpdate.mock.calls.length).toBe(1);
  });
});
