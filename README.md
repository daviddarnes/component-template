# `component-name`

A Web Component for…

**[Demo](https://daviddarnes.github.io/component-template/demo.html)** | **[Further reading](https://darn.es/web-component-github-starter-template/)**

## Examples

General usage example:

```html
<script type="module" src="component-name.js"></script>

<component-name>
  <button>Button</button>
</component-name>
```

Example using a fallback method:

```html
<script type="module" src="component-name.js"></script>

<component-name>
  <button>Button</button>
  <a href="#">Anchor</a>
</component-name>
<style>
  component-name:not(:defined) button,
  component-name:defined a {
    display: none;
  }
</style>
```

Example using options or additional fallback method:

```html
<script type="module" src="component-name.js"></script>

<component-name attribute="value">
  <button>Button</button>
</component-name>
<style>
  component-name[attribute="value"] {
    outline: 1px solid red;
  }
</style>
```

## Features

This Web Component allows you to:

- Check for…

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/component-name): `npm install @daviddarnes/component-name`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/component-name/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="component-name.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/component-name@1.0.0/component-name.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/component-name@1.0.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
