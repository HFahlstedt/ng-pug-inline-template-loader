
function Component(moduleOrName, selector, options) {
    return {};
}

const app = {}

Component(app, selector, {
    template: `<div class="test"><p>This should not be converted</p></div>`
})
