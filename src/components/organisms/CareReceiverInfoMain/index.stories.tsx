import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverInfoMain from '.';

storiesOf('Organisms/CareReceiverInfoMain', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoMain
        careReceiver={{
          id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [
            'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            '71f24b4d-8816-4563-8526-a257f0bed1a2',
          ],
        }}
      />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverInfoMain
        careReceiver={{
          id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [
            'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            '71f24b4d-8816-4563-8526-a257f0bed1a2',
          ],
        }}
      />
    ))
  );
