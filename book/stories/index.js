import React from 'react';
import {storiesOf} from '@storybook/react';
import InputUi from '../src/form/inputUi';

storiesOf('Button', module)
    .add('with text', () => (
        <InputUi placeholder="iva@mail.com" label="Электронная почта"/>
    ));
