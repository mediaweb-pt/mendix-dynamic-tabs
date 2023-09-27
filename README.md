## Dynamic tabs
The Dynamic Tab Widget is a versatile and data-driven component designed for creating interactive tabs that adapt to changing content and data sources. It empowers you to effortlessly manage and present dynamic information, making it an ideal choice when your content may change or depends on data sources. With this widget, you can easily configure a set of headers containing links, allowing you to provide a user-friendly navigation experience while dynamically displaying related content. Whether you need to showcase varying information or offer a dynamic set of links.

### Widget Configuration

- **Start open on tab**: Set the index of the open tab on the first render, by default is 0.

- **List of Tabs**: Datasource that will generate all Tabs Header.

- **Id**: Tab Header Id, this is important to connect the header generated with their content.

- **Caption**: Tab Header Caption, that will display.

- **IsDisable**: Set the tab disabled.

- **Tabs Content Data Source**: Datasource that will generate all Tabs Contents.

- **Tab Id**: Id attribute that will connect the content to its header.

- **Content**: Tab content.

- **Current Active tab**: Index of the current open tab.

- **Current Active tab Id**: Id of the current open tab.

- **On tab change**: This will execute when the open tab changes.

- **Tab Style**: Define the tab style

- **Tab Position**: Position where the tabs will be placed on the top
Justify: Set "yes" for the tabs to fit all width

## Demo project
You have a demo mendix application on the `test/testProject`

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
