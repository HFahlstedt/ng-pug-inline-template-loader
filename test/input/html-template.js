function Component(moduleOrName, selector, options) {
    return {};
}

function pug(strings) {}

const app = {}

Component(app, selector, {
    template: pug`<div class="test"><p>This should not be converted</p></div>`
})
