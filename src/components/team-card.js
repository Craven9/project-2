import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class TeamCard extends DDDSuper(LitElement) {
  static properties = {
    name: { type: String },
    color: { type: String },
    record: { type: String },
    wins: { type: Number },
    losses: { type: Number },
    ties: { type: Number },
    goals: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .team-card {
      background: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-6);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight);
      transition: all 0.3s ease;
      text-align: center;
    }

    .team-logo {
      width: 80px;
      height: 80px;
      
      margin: 0 auto var(--ddd-spacing-4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ddd-font-size-2xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-white);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .team-name {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-coalyGray);
      margin: 0 0 var(--ddd-spacing-2) 0;
    }

    .team-record {
      font-size: var(--ddd-font-size-base);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: var(--ddd-spacing-4);
      font-weight: var(--ddd-font-weight-medium);
    }

    .team-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--ddd-spacing-4);
      margin: var(--ddd-spacing-4) 0;
      padding: var(--ddd-spacing-4);
      background: var(--ddd-theme-default-slateLight);
      
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
      .team-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-2);
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Team Name';
    this.color = 'var(--ddd-theme-default-skyBlue)';
    this.record = '0-0-0';
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
    this.goals = 0;
  }

  _getTeamInitials() {
    return this.name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  render() {
    return html`
      <div class="team-card">
        <div class="team-logo" style="background-color: ${this.color}">
          ${this._getTeamInitials()}
        </div>
        
        <h3 class="team-name">${this.name}</h3>
        <div class="team-record">Record: ${this.record}</div>
        
        <div class="team-stats">
          <div class="stat">
            <div class="stat-number">${this.wins}</div>
            <div class="stat-label">Wins</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.losses}</div>
            <div class="stat-label">Losses</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.ties}</div>
            <div class="stat-label">Ties</div>
          </div>
          <div class="stat">
            <div class="stat-number">${this.goals}</div>
            <div class="stat-label">Goals</div>
          </div>
        </div>
        
      </div>
    `;
  }
}

customElements.define('team-card', TeamCard);
