'use strict'
const loaderUtils = require('loader-utils');
const pug = require('pug');

module.exports = function (source) {
    this.cacheable();
    const options = loaderUtils.getOptions(this);

    const regex = /template\: `\s*([^`]+)\s*`/;

    const matches = source.match(regex);

    if (matches == null) return source;
    if (matches.length == 2 && matches[1][0] == '<') return source; // html

    let template = pug.compile(matches[1].trimRight(), options);
    template.dependencies.forEach(this.addDependency);

    let data = this.query.data || {};
    let html = template(data);

    let html_template = `template: \`${html}\``;

    return source.replace(regex, html_template);
};