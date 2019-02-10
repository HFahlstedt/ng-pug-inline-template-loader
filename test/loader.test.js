import compiler from './compiler.js';

test('Translates simple template', async () => {
    const stats = await compiler('input/simple-pug.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
});

test('Whitespace at the end of the template', async () => {
    const stats = await compiler('input/whitespace-at-the-end.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
});

test('Newline first in the template', async () => {
    const stats = await compiler('input/newline-first.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
});

test('Indented first element', async () => {
    const stats = await compiler('input/indented-first-element.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
});

test('Two root elements', async () => {
    const stats = await compiler('input/multiple-root-element.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="drop-shadow monitor-component">') > 0).toBe(true);
    expect(output.indexOf('<debug-monitor-component admin-only-in-production') > 0).toBe(true);
});

test('HTML template', async () => {
    const stats = await compiler('input/html-template.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('template: pug`<div class="test"><p>This should not be converted</p></div>`') > 0).toBe(true);
});

test('simple template with whitespace after template tag', async () => {
  const stats = await compiler('input/simple-pug-whitespace-after-template-tag.js');
  const output = stats.toJson().modules[0].source;

  expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
  expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
  expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
  expect(output.indexOf('pug`') > 0).toBe(false);
});

test('new style component', async () => {
    const stats = await compiler('input/new-style-component.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="const-variable-with-class">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
    expect(output.indexOf('pug`') > 0).toBe(false);
});

test('new style component, with ', async () => {
    const stats = await compiler('input/new-style-component-whitespace-after-template-tag.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="const-variable-with-class-and-whitespace-after-template-tag">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
    expect(output.indexOf('pug`') > 0).toBe(false);
});

