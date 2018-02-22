# ng-pug-inline-template-loader
Loder for webpack to make it possible to use [pug](https://pugjs.org) in angularjs component inline templates.

It is meant to be used as a precompile step before transpiling Typescript into JavaScript. It has, currently, only been tested with webpack 3.

## Installation
### npm
```
npm install ng-pug-inline-template-loader
```
### yarn
```
yarn add ng-pug-inline-template-loader
```
## Usage

### Webpack 3
Add this loader before you transpile the Typescript files:

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'ng-pug-inline-template-loader'
                ]
            }
        ]
    }
}
```

In your Typescript file you need to use back-ticks (`) to make this loader convert the markup:

```javascript
import { app } from './app.module';

const selector = 'someCoolComponent';

@Component(app, selector, {
    template: `
        .cool-component
            p Some text paragraph
        #footer
            span This is the footer
`
})
export class SomeCoolComponent {

...

}
```
The above code will be converted like this:

```javascript
import { app } from './app.module';

const selector = 'someCoolComponent';

@Component(app, selector, {
    template: `<div class="cool-component">
  <p>Some text paragraph</p>
</div>
<div id="footer"><span>This is the footer</span></div>`
})
export class SomeCoolComponent {

...

}
```

