function Component(moduleOrName, selector, options) {
    return {};
}

function pug(strings) {}

const app = {}

Component(app, selector, {
    template:
pug `.top-div-with-class
    .sub-div
        p Paragraph with text`
})
