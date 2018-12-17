import { configure } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';

import '../style/index.scss'
import '../fonts/style.css'


const newViewports = {
    responsive:{
        name: 'Responsive',
        styles: {
            width: '100%',
            height: '100%',
        },
        type: 'desktop',
    },
    phone: {
        name: 'Phone(320)',
        styles: {
            width: '320px',
            height: '568px'
        }
    },
    tablet: {
        name: 'Tablet',
        styles: {
            width: '768px',
            height: '1024px'
        }
    },
    desktop: {
        name: 'Desktop',
        styles: {
            width: '1024px',
            height: '768px'
        }
    },
};

configureViewport({
    viewports: newViewports
});



function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);