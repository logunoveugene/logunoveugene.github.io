/* global document */
import { storiesOf } from '@storybook/html';

import '../style/button.scss'

storiesOf('Demo', module)
    .add('heading', () => '<h1 class="btn">Hello World</h1>')
    .add('button', () => {
        const button = document.createElement('button');
        button.innerText = 'Hello Button';
        button.addEventListener('click', e => console.log(e));
        return button;
    });