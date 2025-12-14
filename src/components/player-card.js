import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PlayerCard extends DDDSuper(LitElement) {
  static properties = {
    name: { type: String },
    position: { type: String },
    number: { type: String },
    team: { type: String },
    goals: { type: Number },
    assists: { type: Number },
    photo: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .player-card {
      background: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-6);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight);
      transition: all 0.3s ease;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .player-photo {
      width: 80px;
      height: 80px;
      
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      margin: 0 auto var(--ddd-spacing-4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ddd-theme-default-white);
      font-size: var(--ddd-font-size-2xl);
      font-weight: var(--ddd-font-weight-black);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .player-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .player-number {
      position: absolute;
      top: var(--ddd-spacing-4);
      right: var(--ddd-spacing-4);
      width: 40px;
      height: 40px;
      background: var(--ddd-theme-default-skyBlue);
      color: var(--ddd-theme-default-white);
      
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: var(--ddd-font-weight-black);
      font-size: var(--ddd-font-size-lg);
    }

    .player-name {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-coalyGray);
      margin: 0 0 var(--ddd-spacing-2) 0;
    }

    .player-position {
      font-size: var(--ddd-font-size-base);
      color: var(--ddd-theme-default-skyBlue);
      font-weight: var(--ddd-font-weight-medium);
      margin-bottom: var(--ddd-spacing-2);
    }

    .player-team {
      font-size: var(--ddd-font-size-sm);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: var(--ddd-spacing-4);
    }

    .player-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--ddd-spacing-2);
      margin-top: var(--ddd-spacing-4);
      padding: var(--ddd-spacing-4);
      background: var(--ddd-theme-default-slateLight);
    }
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: var(--ddd-spacing-1);
    }

    .stat-label {
      font-size: var(--ddd-font-size-xs);
      color: var(--ddd-theme-default-coalyGray);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: var(--ddd-font-weight-medium);
    }

    @media (max-width: 600px) {
      .player-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-2);
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Player Name';
    this.position = 'Position';
    this.number = '0';
    this.team = 'Team Name';
    this.goals = 0;
    this.assists = 0;
    this.photo = '';
  }

  _getPlayerInitials() {
    return this.name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  render() {
    return html`
      <div class="player-card">
        <div class="player-number">#${this.number}</div>
        
        <div class="player-photo">
          ${this.photo ? 
            html`<img src="${this.photo}" alt="${this.name}" />` :
            html`${this._getPlayerInitials()}`
          }
        </div>
        
        <h3 class="player-name">${this.name}</h3>
        <div class="player-position">${this.position}</div>
        <div class="player-team">${this.team}</div>
        
        <div class="player-stats">
          <div class="stat">
            <div class="stat-number">${this.goals}</div>
            <div class="stat-label">Goals</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.assists || 0}</div>
            <div class="stat-label">Assists</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('player-card', PlayerCard);
