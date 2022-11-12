require('babel-register');

const router = require('./sitemap-routes').default;
const Sitemap = require('../').default;

(
    new Sitemap(router)
        .build('https://valeria-colorist.ru')
        .save('./sitemap.xml')
);



