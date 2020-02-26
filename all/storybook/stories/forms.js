/* global document */
import {storiesOf} from '@storybook/html';

import '../style/forms.scss'


storiesOf('Формы', module)
    .add('Поля', () => '<div class="input input--floating input--label-up">' +
        '<label class="input__label">Электронная почта</label>' +
        '<input class="input__field " type="email" placeholder="example@mail.ru">' +
        '</div>'
    )
    .add('Чекбоксы', () => '')
    .add('Радиобаттоны', () => '')
    .add('Селекты', () => '')
    .add('Размеры', () => '');
