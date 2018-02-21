'use strict'
const util = require('loader-utils');
const pug = require('pug');

module.exports = function (source) {
    const regex = /template\: `\s*([\s\S]+\S)\s*`/;

    var matches = source.match(regex);

    if (matches == null) return source;

    if (matches.length == 2 && matches[1][0] == '<') return source; // html

    var pug_markup = matches[1];

    var template = pug.compile(pug_markup, {});
    var html = template({});

    var html_template = `template: \`${html}\``;

    return source.replace(regex, html_template);
};