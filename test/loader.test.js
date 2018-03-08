import compiler from './compiler.js';

test('Translates simpel template', async () => {
  const stats = await compiler('simple-pug.js');
  const output = stats.toJson().modules[0].source;

  expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
  expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
  expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
});

test('Whitespace at the end of the template', async () => {
    const stats = await compiler('whitespace-at-the-end.js');
    const output = stats.toJson().modules[0].source;

    expect(output.indexOf('<div class="top-div-with-class">') > 0).toBe(true);
    expect(output.indexOf('<div class="sub-div">') > 0).toBe(true);
    expect(output.indexOf('<p>Paragraph with text</p>') > 0).toBe(true);
  });
