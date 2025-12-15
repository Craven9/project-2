import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class SchedulePage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true },
    games: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .schedule-container {
      min-height: 100vh;
      background: linear-gradient(135deg);
      padding: var(--ddd-spacing-8);
      color: var(--ddd-theme-default-coalyGray);
    }

    .header {
      text-align: center;
      margin-bottom: var(--ddd-spacing-12);
    }

    .back-button {
      position: absolute;
      top: var(--ddd-spacing-8);
      left: var(--ddd-spacing-8);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-5);
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: var(--ddd-theme-default-white);
      border: none;
      cursor: pointer;
      font-weight: var(--ddd-font-weight-bold);
      transition: all var(--ddd-duration-rapid);
      box-shadow: var(--ddd-boxShadow-sm);
    }

    .back-button:hover {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      transform: translateY(-1px);
      box-shadow: var(--ddd-boxShadow-md);
    }

    h1 {
      font-size: var(--ddd-font-size-3xl);
      color: #1e40af;
      margin-bottom: var(--ddd-spacing-2);
      font-weight: var(--ddd-font-weight-black);
    }

    .subtitle {
      color: var(--ddd-theme-default-coalyGray);
      font-size: var(--ddd-font-size-lg);
    }

    .games-grid {
      max-width: var(--ddd-breakpoint-lg);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit);
      gap: var(--ddd-spacing-6);
    }

    .game-card {
      background: var(--ddd-theme-default-white);
      
      padding: var(--ddd-spacing-6);
      box-shadow: var(--ddd-boxShadow-md);
      transition: all var(--ddd-duration-rapid);
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .game-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .game-completed {
      background: linear-gradient(135deg);
      opacity: 0.8;
    }

    .game-championship {
      border: 2px solid var(--ddd-theme-default-accent);
      background: var(--ddd-theme-default-yellowLightAccent);
    }

    .game-type-badge {
      background: var(--ddd-theme-default-accent);
      color: var(--ddd-theme-default-coalyGray);
      padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-semibold);
    }

    .score {
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-coalyGray);
      background: rgba(255, 255, 255, 0.8);
      padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
      margin: 0 var(--ddd-spacing-2);
    }

    .game-status {
      margin-top: var(--ddd-spacing-3);
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-medium);
      text-align: center;
      padding: var(--ddd-spacing-1);
    }

    .game-status.upcoming {
      background: var(--ddd-theme-default-skyLightAccent);
      color: var(--ddd-theme-default-coalyGray);
    }

    .game-status:not(.upcoming) {
      background: var(--ddd-theme-default-limeLightAccent);
      color: var(--ddd-theme-default-coalyGray);
    }

    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--ddd-spacing-4);
    }

    .game-date {
      background: linear-gradient(135deg);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
      
      font-size: var(--ddd-font-size-sm);
      font-weight: var(--ddd-font-weight-bold);
      box-shadow: 0 2px 4px rgba(30, 64, 175, 0.3);
    }

    .game-time {
      color: #64748b;
      font-weight: var(--ddd-font-weight-medium);
    }

    .teams {
      text-align: center;
      margin: var(--ddd-spacing-4) 0;
    }

    .team-matchup {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: #1e40af;
      margin-bottom: var(--ddd-spacing-2);
    }

    .vs {
      color: #64748b;
      font-weight: var(--ddd-font-weight-normal);
    }

    .game-location {
      text-align: center;
      color: #64748b;
      font-style: italic;
    }

    .footer {
      background: var(--ddd-theme-default-white);
      color: var(--ddd-theme-default-slateGray);
      padding: var(--ddd-spacing-6);
      text-align: center;
      border-top: 1px solid var(--ddd-theme-default-slateLight);
      margin-top: var(--ddd-spacing-8);
    }

    .footer-content {
      max-width: var(--ddd-breakpoint-md);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ddd-spacing-4);
      flex-wrap: wrap;
    }

    .footer-logo {
      width: 120px;
      height: 40px;
      background: var(--ddd-theme-default-white);
      
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e2e8f0;
      overflow: hidden;
    }

    .footer-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .copyright {
      font-size: var(--ddd-font-size-sm);
    }
  `;

  constructor() {
    super();
    this.games = [
      // Upcoming Games
      {
        id: 1,
        date: 'Nov 23, 2025',
        time: '2:00 PM',
        team1: 'Nittany Lions FC',
        team2: 'State College FC',
        location: 'Beaver Stadium Field A',
        type: 'championship',
        status: 'upcoming'
      },
      {
        id: 2,
        date: 'Nov 25, 2025',
        time: '4:30 PM',
        team1: 'Penn State United',
        team2: 'Blue & White SC',
        location: 'IM Fields Complex',
        type: 'regular',
        status: 'upcoming'
      },
      {
        id: 3,
        date: 'Nov 27, 2025',
        time: '1:00 PM',
        team1: 'Happy Valley FC',
        team2: 'University Park United',
        location: 'Penn State Practice Fields',
        type: 'regular',
        status: 'upcoming'
      },
      // Completed Games
      {
        id: 4,
        date: 'Nov 15, 2025',
        time: '3:00 PM',
        team1: 'Nittany Lions FC',
        team2: 'Happy Valley FC',
        location: 'Beaver Stadium Field A',
        type: 'regular',
        status: 'completed',
        score1: 4,
        score2: 1
      },
      {
        id: 5,
        date: 'Nov 17, 2025',
        time: '5:30 PM',
        team1: 'State College FC',
        team2: 'Penn State United',
        location: 'State College Municipal Stadium',
        type: 'regular',
        status: 'completed',
        score1: 2,
        score2: 2
      }
    ];
  }

  _navigate(page) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="schedule-container">
        <button class="back-button" @click="${() => this._navigate('home')}">
          ← Back to Home
        </button>

        <div class="header">
          <h1>Game Schedule</h1>
          <p class="subtitle">Penn State Soccer League - Fall 2024</p>
        </div>

        <div class="games-grid">
          ${this.games.map(game => html`
            <div class="game-card ${game.status === 'completed' ? 'game-completed' : ''} ${game.type === 'championship' ? 'game-championship' : ''}">
              <div class="game-header">
                <span class="game-date">${game.date}</span>
                <span class="game-time">${game.time}</span>
                ${game.type === 'championship' ? html`<span class="game-type-badge">Championship</span>` : ''}
              </div>
              <div class="teams">
                <div class="team-matchup">
                  ${game.team1} 
                  ${game.status === 'completed' ? 
                    html`<span class="score">${game.score1} - ${game.score2}</span>` : 
                    html`<span class="vs">vs</span>`
                  } 
                  ${game.team2}
                </div>
              </div>
              <div class="game-location">${game.location}</div>
              ${game.status === 'completed' ? 
                html`<div class="game-status">Final</div>` : 
                html`<div class="game-status upcoming">Upcoming</div>`
              }
            </div>
          `)}
        </div>

        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <img src="./src/assets/psl-logo.svg" alt="Penn State Soccer League" />
            </div>
            <div class="copyright">© 2025 Penn State Soccer League. All rights reserved.</div>
          </div>
        </footer>
      </div>
    `;
  }
}

customElements.define('schedule-page', SchedulePage);
