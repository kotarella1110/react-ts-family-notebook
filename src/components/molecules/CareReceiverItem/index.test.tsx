import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoItem, { Props } from '.';
import Item from '../Item';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceiver: {
      id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
      name: '左藤太郎',
      birth: '76歳 1941年1月15日生',
      folders: [],
    },
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { careReceiver },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('a');

    expect(wrapper.find('Item').type()).toBe(Item);

    const Name = wrapper.find('Name');
    expect(Name.dive().type()).toBe('h4');
    expect(Name.dive().text()).toBe(careReceiver.name);

    const Birth = wrapper.find('Birth');
    expect(Birth.dive().type()).toBe('p');
    expect(Birth.dive().text()).toBe(careReceiver.birth);
  });
});
