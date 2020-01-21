import 'slick-carousel/slick/slick.scss'
import './scss/app.scss';

import $ from 'jquery';

global.jQuery = $;
global.$ = $;

// import 'blazy';

import 'slick-carousel/slick/slick.min'
import 'bootstrap/js/dist/modal';
import 'jquery-mask-plugin';
import '@fancyapps/fancybox'
import './js/sliders';
import './js/menu';
import './js/capcha';
import './js/form';

// const IMG = require.context('./images/', true, /\.png/)
// async function getComponent() {
//
//     const element = document.createElement('div');
//     const {default: _} = await import(/* webpackChunkName: "lodash" */ 'lodash');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//     return element;
// }
//
// getComponent().then(component => {
//     document.body.appendChild(component);
// });


