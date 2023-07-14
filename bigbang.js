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
    
  </style>
  
    
    <div class="pmlinkbuilder"></div> 
      <script type="module" src="https://cdn.jsdelivr.net/npm/practisemaster@develop/nonobfs/PMbundle.js"></script>
  
`;

class BigBang extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
  let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('big-bang', BigBang);
// <big-bang>
