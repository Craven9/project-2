import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class StatCard extends DDDSuper(LitElement) {
  static properties = {
    icon: { type: String },
    number: { type: String },
    label: { type: String },
    color: { type: String },
    trend: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .stat-card {
      background: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-6);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight);
      transition: all 0.3s ease;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .stat-icon {
      font-size: 3rem;
      margin-bottom: var(--ddd-spacing-3);
      display: block;
    }

    .stat-number {
      font-size: var(--ddd-font-size-3xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-coalyGray);
      margin: 0;
      line-height: 1;
    }

    .stat-label {
      font-size: var(--ddd-font-size-base);
      color: var(--ddd-theme-default-coalyGray);
      margin: var(--ddd-spacing-2) 0 0;
      font-weight: var(--ddd-font-weight-medium);
    }

    .trend {
      margin-top: var(--ddd-spacing-3);
      font-size: var(--ddd-font-size-sm);
      padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
      font-weight: var(--ddd-font-weight-medium);
    }

    .trend-up {
      background: var(--ddd-theme-default-limeLightAccent);
      color: #166534;
    }

    .trend-down {
      background: var(--ddd-theme-default-pinkLightAccent);
      color: #dc2626;
    }

    .trend-stable {
      background: var(--ddd-theme-default-slateLight);
      color: #64748b;
    }
  `;

  constructor() {
    super();
    this.icon = '';
    this.number = '0';
    this.label = 'Statistic';
    this.color = '#3b82f6';
    this.trend = '';
  }

  render() {
    return html`
      <div class="stat-card" style="--card-color: ${this.color}">
        <div class="stat-icon">${this.icon}</div>
        <div class="stat-number">${this.number}</div>
        <div class="stat-label">${this.label}</div>
        ${this.trend ? html`
          <div class="trend trend-${this.trend}">
            ${this.trend === 'up' ? 'Trending Up' :
              this.trend === 'down' ? 'Trending Down' :
              'Stable'}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('stat-card', StatCard);
