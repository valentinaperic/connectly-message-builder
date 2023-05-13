# connectly-message-builder

![image](https://github.com/valentinaperic/connectly-message-builder/assets/17259336/a8d3db01-266d-4011-a5c3-c9829667b34b)

This project uses Vue 3 to create message template builder for the WhatsApp API. Takeaways can be listed below, 
* I used Vue because it is a lightweight JavaScript framework. 
* I used figma to achieve pixel perfect html/css using flexbox
* I exported images as SVGs because it is great for scalability. they can be scaled easily without losing quality which makes it great for responsive design
* I created components that I felt could be reusued. These components include `Dropdown`, `ImageUpload`, `Tips`, and `Toggle`. Resuable components allow for reusability which reduces duplication and promotes modularaity in this project. It allows provides consistency which is great for design systems. They are also easier to maintain and test. For instance, if a bug was found, you can go straight to the specific component to root out the issue. This also helps for testing because the component is isolated. Reusuable components can also be extended. This means that with the use of props, they can be customized to fit different requirements and use cases.
* I created a `main.scss` to put common styles and `scss-variables.scss` for common variables. 
* I used Sass as a preprocessor for CSS because it allows for variables, nesting, and functions thus enhancing developers productivity and code organization.
* I used webpack as a bundler which optimizes JS, CSS, images, and fonts that can be served to the browser which improves efficiency. 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
