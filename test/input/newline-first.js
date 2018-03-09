
function Component(moduleOrName, selector, options) {
    return {};
}

const app = {}

Component(app, selector, {
    template: `
.top-div-with-class
    .sub-div
        p Paragraph with text
`
})
