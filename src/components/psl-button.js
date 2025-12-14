import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PslButton extends DDDSuper(LitElement) {
  static properties = {
    text: { type: String },
    type: { type: String },
    disabled: { type: Boolean }
  };

  static styles = css`
    :host {
      display: inline-block;
      margin: var(--ddd-spacing-2);
    }

    .btn {
      padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
      font-family: var(--ddd-font-primary);
      font-size: var(--ddd-font-size-base);
      font-weight: var(--ddd-font-weight-medium);
      
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
    }

    .btn-primary {
      background: var(--ddd-theme-default-skyBlue);
      color: var(--ddd-theme-default-white);
    }

    .btn-primary:hover {
      background: var(--ddd-theme-default-navy);
    }

    .btn-success {
      background: var(--ddd-theme-default-limeLightAccent);
      color: var(--ddd-theme-default-white);
    }

    .btn-success:hover {
      background: var(--ddd-theme-default-limeLightAccent);
    }

    .btn-secondary {
      background: var(--ddd-theme-default-slateLight);
      color: var(--ddd-theme-default-coalyGray);
      border: 2px solid var(--ddd-theme-default-slateGray);
    }

    .btn-secondary:hover:not(:disabled) {
      background: var(--ddd-theme-default-slateGray);
      color: var(--ddd-theme-default-white);
    }

    .btn-warning {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: var(--ddd-theme-default-white);
    }

    .btn-warning:hover:not(:disabled) {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
    }

    .btn-danger {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      color: var(--ddd-theme-default-white);
    }

    .btn-danger:hover:not(:disabled) {
      background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
    }
  `;

  constructor() {
    super();
    this.text = 'Button';
    this.type = 'primary';
    this.disabled = false;
  }

  _handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('click', {
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <button 
        class="btn btn-${this.type}" 
        ?disabled="${this.disabled}"
        @click="${this._handleClick}">
        ${this.text}
      </button>
    `;
  }
}

customElements.define('psl-button', PslButton);
