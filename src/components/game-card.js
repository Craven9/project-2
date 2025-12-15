import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class GameCard extends DDDSuper(LitElement) {
  static properties = {
    date: { type: String },
    time: { type: String },
    team1: { type: String },
    team2: { type: String },
    location: { type: String },
    status: { type: String },
    score1: { type: Number },
    score2: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .game-card {
      background: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-6);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight);
      transition: all 0.3s ease;
    }

    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--ddd-spacing-4);
    }

    .game-date {
      font-weight: var(--ddd-font-weight-medium);
      color: var(--ddd-theme-default-coalyGray);
      font-size: var(--ddd-font-size-base);
    }

    .game-time {
      background: var(--ddd-theme-default-skyBlue);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
      
      font-size: var(--ddd-font-size-sm);
      font-weight: var(--ddd-font-weight-medium);
    }

    .teams-matchup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--ddd-spacing-4) 0;
      padding: var(--ddd-spacing-5) var(--ddd-spacing-4);
      background: var(--ddd-theme-default-slateLight);
      
    }

    .team {
      font-weight: var(--ddd-font-weight-medium);
      font-size: var(--ddd-font-size-base);
      color: var(--ddd-theme-default-coalyGray);
    }

    .vs {
      background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue) 0%, var(--ddd-theme-default-navy) 100%);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-3);
      
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-bold);
      letter-spacing: 1px;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      border: 2px solid var(--ddd-theme-default-white);
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
    }

    .score {
      background: var(--ddd-theme-default-skyBlue);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
      
      font-size: var(--ddd-font-size-lg);
      font-weight: var(--ddd-font-weight-bold);
    }

    .game-location {
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-2);
      color: var(--ddd-theme-default-coalyGray);
      font-size: var(--ddd-font-size-sm);
      margin-top: var(--ddd-spacing-3);
      opacity: 0.8;
      font-style: italic;
    }

    .status-badge {
      display: inline-block;
      padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
      
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-medium);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: var(--ddd-spacing-3);
    }

    .status-upcoming {
      background: var(--ddd-theme-default-skyLightAccent);
      color: var(--ddd-theme-default-coalyGray);
    }

    .status-completed {
      background: var(--ddd-theme-default-limeLightAccent);
      color: var(--ddd-theme-default-coalyGray);
    }

    .status-live {
      background: var(--ddd-theme-default-pinkLightAccent);
      color: var(--ddd-theme-default-coalyGray);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    @media (max-width: 600px) {
      .game-header {
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }
      
      .teams-matchup {
        flex-direction: column;
        gap: var(--ddd-spacing-3);
      }
    }
  `;

  constructor() {
    super();
    this.date = 'TBD';
    this.time = 'TBD';
    this.team1 = 'Team A';
    this.team2 = 'Team B';
    this.location = 'TBD';
    this.status = 'upcoming';
    this.score1 = 0;
    this.score2 = 0;
  }

  render() {
    return html`
      <div class="game-card">
        <div class="game-header">
          <div class="game-date">${this.date}</div>
          <div class="game-time">${this.time}</div>
        </div>
        
        <div class="teams-matchup">
          <div class="team">${this.team1}</div>
          ${this.status === 'completed' ? 
            html`<div class="score">${this.score1} - ${this.score2}</div>` : 
            html`<div class="vs">VS</div>`
          }
          <div class="team">${this.team2}</div>
        </div>
        
        <div class="game-location">
          Location: ${this.location}
        </div>
        
        <div class="status-badge status-${this.status}">
          ${this.status === 'upcoming' ? 'Upcoming' : 
            this.status === 'completed' ? 'Final' : 
            this.status === 'live' ? 'Live' : this.status}
        </div>
      </div>
    `;
  }
}

customElements.define('game-card', GameCard);
