import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailItem, { Props } from '.';
import Item from '../Item';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folderContent: {
      id: 0,
      folderId: 0,
      title: 'Title',
      content: 'Content',
    },
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoDetailItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoDetailItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { folderContent },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('a');

    expect(wrapper.find('Item').type()).toBe(Item);

    const Title = wrapper.find('Title');
    expect(Title.dive().type()).toBe('h4');
    expect(Title.dive().text()).toBe(folderContent.title);
  });

  it('Item コンポーネントの click で props.onClick が呼ばれること', () => {
    const {
      props: { onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    wrapper.props().onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});