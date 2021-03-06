class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.updateContent(newValue);
  }

  connectedCallback() {
    const name = this.getAttribute('name');
    this.updateContent(name);
  }

  updateContent(name) {
    this.shadowRoot.innerHTML = `<p>Hello ${name}<strong><slot name="content"></slot></strong></p>`;
  }
}

customElements.define('hello-world', HelloWorld);
