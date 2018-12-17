import React from 'react';
import {storiesOf} from '@storybook/react';
import {App} from '../src/App';

storiesOf('Button', module)
    .add('with text', () => (
        <App></App>
    ))
