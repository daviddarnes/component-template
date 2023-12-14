class ComponentName extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "component-name", ComponentName);
    }
  }

  connectedCallback() {
    // Start here...
  }
}

ComponentName.register();
