class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            #backdrop{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0,0,0,0.75);
                z-index: 10;
                opacity: 0;
                pointer-events: none;
            }
            #modal{
                position: fixed;
                top: 15vh;
                left: 25%;
                width: 50%;
                background: #fff;
                border-radius: 3px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.26);
                z-index: 100;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                opacity: 0;
                pointer-events: none;
            }
            header{
              padding: 1rem;
            }
            header h1{
              font-size: 1.25rem;
            }
            #main{
              padding: 1rem;
            }
            #actions{
              border-top: 1px solid #ccc;
              padding: 1rem;
              display: flex;
              justify-content: flex-end;
            }
            #actions button{
              margin: 0 0.25rem;
            }
        </style>
        <div id="backdrop"></div>        
        <div id="modal">
            <header>
              <h1>Please confirm!</h1>
            </header>
            <section id="main">
              <slot></slot>
            </section>
            <sections id="actions">
              <button>Cancel</button>
              <button>Okey</button>
            </sections>
        </div>
    `;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "opened") {
      if (this.hasAttribute("opened")) {
        this.shadowRoot.querySelector("#backdrop").style.opacity = "1";
        this.shadowRoot.querySelector("#backdrop").style.pointerEvents = "all";
        this.shadowRoot.querySelector("#modal").style.opacity = "1";
        this.shadowRoot.querySelector("#modal").style.pointerEvents = "all";
      }
    }
  }
  static get observedAttributes() {
    return ["opened"];
  }
}

customElements.define("uc-modal", Modal);
