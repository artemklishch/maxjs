class ButtonInfo extends HTMLElement {
  constructor() {
    super();
    this._isNone;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <button>Show</button>
        <p id="info-box"><slot></slot></p>
    `;
    this.shadowRoot._infoEl;
  }
  connectedCallback() {
    if (this.hasAttribute("display")) {
      this._isNone = this.getAttribute("display");
      this.shadowRoot._infoEl = this.shadowRoot.getElementById("info-box");
      this.shadowRoot._infoEl.style.display = this._isNone;
    }
    const btn = this.shadowRoot.querySelector("button");
    btn.addEventListener("click", this._handleShowInfo.bind(this));
  }
  _handleShowInfo() {
    if (this._isNone === "none") {
      this._isNone = "blick";
      this.shadowRoot._infoEl.style.display = "block";
    } else {
      this._isNone = "none";
      this.shadowRoot._infoEl.style.display = "none";
    }
  }
}

customElements.define("uc-button-info", ButtonInfo);
