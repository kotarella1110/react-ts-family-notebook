import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Header from '.';
import ArrowBtton from 'components/atoms/ArrowButton';
import AddButton from 'components/atoms/AddButton';

storiesOf('Organisms/Header', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Header title="Title" Right={<div>Right</div>} />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <Header right={<p>Right</p>} title="Title" />)
  )
  .addWithJSX(
    'props left',
    withNotes(``)(() => (
      <Header left={<p>Left</p>} right={<p>Right</p>} title="Title" />
    ))
  )
  .addWithJSX(
    'props right is AddButton',
    withNotes(``)(() => (
      <Header
        right={<AddButton onClick={action('onClick')}>追加</AddButton>}
        title="Title"
      />
    ))
  )
  .addWithJSX(
    'props left is ArrowBtton and right is AddButton',
    withNotes(``)(() => (
      <Header
        left={<ArrowBtton primary={true} onClick={action('onClick')} />}
        right={<AddButton onClick={action('onClick')}>追加</AddButton>}
        title="Title"
      />
    ))
  );
