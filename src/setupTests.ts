import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

// https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
registerRequireContextHook();

// https://github.com/storybooks/storybook/issues/1011
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

// https://github.com/storybooks/storybook/issues/2822
jest.mock('react-modal', () => props => (props.isOpen ? props.children : null));

enzyme.configure({ adapter: new Adapter() });
