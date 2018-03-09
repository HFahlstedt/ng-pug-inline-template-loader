'use strict'
const loaderUtils = require('loader-utils');
const pug = require('pug');

module.exports = function (source) {
    this.cacheable();
    const options = loaderUtils.getOptions(this);

    const regex = /template\:\s+`([^`]+)`/;

    const matches = source.match(regex);

    if (matches == null) return source;

    const template_string = matches[1];

    if (template_string.trim()[0] == '<') return source; // html

    const rows = template_string.match(/[^\n\r]+[\n\r]*/g);

    let trimmed_template = '';
    let spaces = -1;
    let sp_match;

    for (let index in rows) {
        if (rows[index].trim().length > 0) {
            if (spaces < 0 && (sp_match = rows[index].match(/^ +/))) {
                spaces = sp_match[0].length;
            }

            trimmed_template += rows[index].substring(Math.max(spaces, 0));
        }
    }

    let template = pug.compile(trimmed_template.trimRight(), options);
    template.dependencies.forEach(this.addDependency);

    let data = this.query.data || {};
    let html = template(data);

    let html_template = `template: \`${html}\``;

    return source.replace(regex, html_template);
};