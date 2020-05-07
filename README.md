# react-js-boiler-plate
React JS boilerplate made with ❤

# Usage

```
1) npm install
2) npm start
3) open http://localhost:8080
```

This boiler plate comes with almost every essential webpack configuration.

### State usage

You can initialize state as class objects. Do not need to initialize state inside the constructor.

###### Example

```
class MyComponent extends Component {
  state = {
    sum: 0,
  }  
  ...
}
```

### Arrow function

You can use arrow function to write functions without using **bind**.

###### Example

```
class MyComponent extends Component {
  constructor(props) {
    super(props)
  }

  methodA = () => { ... }
}
```

### Loaders (CSS, SASS, Style, File)

You can import css, scss (or) sass, image, style into your js files directly. It's easy to track down 💪 the usage.

### Webpack hot reloading

Hot reloading while editing files, and it reloads even non-index url 😉

### Redux and Redux Form

This boiler plate comes with **Redux** adn **Redux-Form** installed to use readily

> And much more
