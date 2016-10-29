'use strict';

require.context('./', true, /^\.\/.*\.html/);
require.context('./img/', true, /^\.\/.*\.jpg|png/);

require('./scss/main.scss');

require.context('./angular', true, /^\.\/.*\.html/);

require('./js/main.js');