/* global document */
import {storiesOf} from '@storybook/html';

import '../style/links.scss'

storiesOf('Ссылки', module)
    .add('Ссылки', () => '<div class="s-i"> <a class="link link--color-blue" href="#dsf"><span class="link__text">Синяя ссылка</span></a></div>' +
        '<div class="s-i"> <a class="link link--color-grey" href="#dsf"><span class="link__text">Серая ссылка</span></a></div>'+
        '<div class="s-i"> <a class="link link--color-black" href="#dsf"><span class="link__text">Черная ссылка</span></a></div>' +
        '<div class="s-i bg-black"> <a class="link link--color-white" href="#dsf"><span class="link__text">Белая ссылка</span></a></div>')


    .add('Псевдоссылки', () => '<div class="s-i"> <a class="link link--color-blue link--doted" href="#"><span class="link__text">Длинная ссылка</span></a></div>')


    .add('Dropdown', () => '<div class="s-i"> <a class="link link--color-blue link--doted link--dropdown" href="#"><span class="link__text">Ссылка</span></a></div>')


    .add('Ссылки с иконками', () =>  '<div class="s-i "> <a class="link link--color-blue" href="#dsf"><span class="link__icon icon-settings-Line"></span><span class="link__text">Ссылка с иконкой</span></a></div>');
