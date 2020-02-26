/* global document */
import {storiesOf} from '@storybook/html';

import '../style/button.scss'

storiesOf('Кнопки', module)
    .add('Обычное использование', () =>
        '<div class="s-i"><button class="btn btn--default"><span class="btn__text">Вау кнопка!</span></button></div>' +
        '<div class="s-i"><button class="btn btn--primary"><span class="btn__text">Я в приоритете</span></button></div>' +
        '<div class="s-i"><button class="btn btn--danger"><span class="btn__text">Опасность мое второе имя</span></button></div>' +
        '<div class="s-i"><button class="btn btn--success"><span class="btn__text">Все хорошо</span></button></div>' +
        '')

    .add('Кнопки с иконками', () =>
        '<div class="s-i"><button class="btn btn--default"><span class="btn__icon icon-Date-range"> </span> <span class="btn__text">Кнопка с иконкой</span></button></div>' +
        '<div class="s-i"><button class="btn btn--default"><span class="btn__icon icon-Date-range"> </span></button></div>' +
        '<div class="s-i"><button class="btn btn--primary"><span class="btn__icon icon-settings-Line"></span> </button></div>' +
        '<div class="s-i"><button class="btn btn--primary"><span class="btn__icon icon-settings-Line"></span> <span class="btn__text">Кнопка с иконкой</span></button></div>' +
        '<div class="s-i"><button class="btn btn--danger"><span class="btn__icon icon-Lock_open"></span></button></div>' +
        '<div class="s-i"><button class="btn btn--danger"><span class="btn__text">Кнопка с иконкой</span> <span class="btn__icon icon-Lock_open"></span> </button></div>' +
        '<div class="s-i"><button class="btn btn--success"><span class="btn__icon icon-home"></span></button></div>' +
        '<div class="s-i"><button class="btn btn--success"><span class="btn__icon icon-home"></span> <span class="btn__text">Кнопка с иконкой</span></button></div>' +
        '')

    .add('С тенью', () => '<div class="s-i"><button class="btn btn--default btn--shadow"><span class="btn__text">Кнопка с тенью</span></button></div>' +
        '<div class="s-i"><button class="btn btn--primary btn--shadow""><span class="btn__text">Я в приоритете</span></button></div>' +
        '<div class="s-i"><button class="btn btn--danger btn--shadow""><span class="btn__text">Опасность мое второе имя</span></button></div>' +
        '<div class="s-i"><button class="btn btn--success btn--shadow""><span class="btn__text">Все хорошо</span></button></div>' +
        '')

    .add('Кнопка с загрузкой', () => '<div class="s-i"><button class="btn btn--default btn--is-loading"><span class="btn__text">Кнопка с тенью</span><span class="btn__load "></span></button></div>' +
        '<div class="s-i"><button class="btn btn--primary btn--is-loading"><span class="btn__icon icon-settings-Line"></span><span class="btn__load "></span></button></div>'
    )

    .add('Заблокированные', () => '<div class="s-i"><button class="btn btn--default" disabled><span class="btn__text">Я заблокированная</span></button></div>')

    .add('Размеры', () => '<div class="s-i"><button class="btn btn--default btn--size-lg"><span class="btn__text">Большая</span></button></div>' +
        '<div class="s-i"><button class="btn btn--default btn--size-sm"><span class="btn__text">Мелкая</span></button></div>' +
        '<div class="s-i"><button class="btn btn--default btn--wide"><span class="btn__text">На всю ширину блока</span></button></div>')

    .add('Группа кнопок', () =>
        '<div class="s-i"><div class="btn-group"><button class="btn btn--default"><span class="btn__text">Раз</span></button><button class="btn btn--default"><span class="btn__text">Два</span></button><button class="btn btn--default"><span class="btn__icon icon-Expand_more"> </span></button></div></div>'
      )