//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* @import url(); */
   
    div {
      border: 1px solid red;
      padding: 3rem;
      margin: 3rem;
    }

    button {
      background-color:red;
    }

    :host{
      /* for the shadow root */
      background-color: lavender;
      display: block;
    }
    :host(button){
      background-color: cornflowerblue;
    }
    :host-context(main){
      background-color: gold;
    }
   
    
    slot{
      /* No work! */
    }
    ::part(){
      /* does not work here */
    }
    h1{
      color: orangered;
    }
    button{
      background-color:blue;
    }
  </style>
  <div>
    <h1 part="topper">Big Bang Theory</h1>
    <slot name="auth">Default text if not title slot used in HTML</slot>
    <button id='james'>James<button>
  </div>
`;

class BigBang extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('big-bang', BigBang);
// <big-bang>
