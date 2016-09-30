'use strict';


require.context('./', true, /^\.\/.*\.html/);
require.context("./components/", true, /^\.\/.*\.html/);
//require.context("./img/", true, /^\.\/.*\.jpg/);

require('./components/layout/layout.js');