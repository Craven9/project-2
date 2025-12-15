import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class TeamsPage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true },
    teams: { type: Array },
    registeredTeams: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .teams-container {
      min-height: 100vh;
      background: linear-gradient(135deg);
      padding: var(--ddd-spacing-8);
      color: var(--ddd-theme-default-coalyGray);
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
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
    }

    .back-button:hover {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(30, 64, 175, 0.4);
    }

    .header {
      text-align: center;
      margin-bottom: var(--ddd-spacing-12);
    }

    h1 {
      font-size: var(--ddd-font-size-3xl);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: var(--ddd-spacing-2);
      font-weight: var(--ddd-font-weight-black);
    }

    .subtitle {
      color: var(--ddd-theme-default-coalyGray);
      font-size: var(--ddd-font-size-lg);
    }

    .teams-grid {
      max-width: var(--ddd-breakpoint-lg);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit));
      gap: var(--ddd-spacing-8);
    }

    .team-card {
      background: var(--ddd-theme-default-white);
      
      padding: var(--ddd-spacing-8);
      box-shadow: var(--ddd-boxShadow-md);
      transition: all var(--ddd-duration-rapid);
      text-align: center;
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-slateLight);
    }

    .team-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .team-logo {
      width: var(--ddd-spacing-20);
      height: var(--ddd-spacing-20);
      
      margin: 0 auto var(--ddd-spacing-4) auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-white);
    }

    .team-name {
      font-size: 32px !important;
      font-weight: 900 !important;
      color: #000000 !important;
      background: #ffff00 !important;
      margin: 20px 0 !important;
      padding: 20px !important;
      text-align: center !important;
      border: 5px solid #ff0000 !important;
      border-radius: 10px !important;
      box-shadow: 0 8px 16px rgba(0,0,0,0.5) !important;
      position: relative !important;
      z-index: 9999 !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      text-shadow: 2px 2px 4px rgba(255,255,255,0.8) !important;
      font-family: 'Arial Black', Arial, sans-serif !important;
    }

    .team-record {
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: var(--ddd-spacing-4);
      font-weight: var(--ddd-font-weight-medium);
    }

    .team-coach, .team-founded {
      color: var(--ddd-theme-default-coalyGray);
      font-size: var(--ddd-font-size-sm);
      margin-bottom: var(--ddd-spacing-2);
    }

    .team-achievements {
      margin-top: var(--ddd-spacing-4);
      padding-top: var(--ddd-spacing-3);
      border-top: 1px solid var(--ddd-theme-default-slateLight);
    }

    .team-achievements h4 {
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-bold);
      margin: 0 0 var(--ddd-spacing-2) 0;
      color: var(--ddd-theme-default-coalyGray);
    }

    .team-achievements ul {
      margin: 0;
      padding-left: var(--ddd-spacing-4);
      font-size: var(--ddd-font-size-sm);
      color: var(--ddd-theme-default-coalyGray);
    }

    .team-achievements li {
      margin-bottom: var(--ddd-spacing-1);
    }

    .team-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--ddd-spacing-4);
      margin-top: var(--ddd-spacing-6);
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-coalyGray);
    }

    .stat-label {
      font-size: var(--ddd-font-size-xs);
      color: var(--ddd-theme-default-coalyGray);
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg);
      font-weight: var(--ddd-font-weight-medium);
    }

    .footer {
      background: var(--ddd-theme-default-white);
      color: var(--ddd-theme-default-coalyGray);
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
    this.registeredTeams = [];
    this.teams = [
      {
        id: 1,
        name: 'Nittany Lions FC',
        color: '#1e3a8a',
        record: '3-0-1',
        wins: 3,
        losses: 0,
        goals: 15,
        coach: 'Coach Sarah Williams',
        founded: '2019',
        achievements: ['2024 PSL Champions', '2023 Fair Play Award', 'Best Offensive Record 2024']
      },
      {
        id: 2,
        name: 'Penn State United',
        color: '#dc2626',
        record: '2-0-1',
        wins: 2,
        losses: 0,
        goals: 8,
        coach: 'Coach Mike Thompson',
        founded: '2020',
        achievements: ['2023 Defensive Excellence Award', 'Most Improved Team 2024']
      },
      {
        id: 3,
        name: 'Blue & White SC',
        color: '#059669',
        record: '1-0-1',
        wins: 1,
        losses: 0,
        goals: 6,
        coach: 'Coach Lisa Martinez',
        founded: '2021',
        achievements: ['Fastest Rising Team 2024', 'Best Team Spirit Award']
      },
      {
        id: 4,
        name: 'Happy Valley FC',
        color: '#7c3aed',
        record: '0-2-0',
        wins: 0,
        losses: 2,
        goals: 4,

        coach: 'Coach David Park',
        founded: '2022',
        achievements: ['Community Choice Award 2024', 'Best Newcomer Team 2023']
      },
      {
        id: 5,
        name: 'State College FC',
        color: '#ea580c',
        record: '2-0-0',
        wins: 2,
        losses: 0,
        goals: 12,
        coach: 'Coach Amanda Rodriguez',
        founded: '2020',
        achievements: ['Technical Excellence Award 2024', 'Best Tactical Team 2023']
      },
      {
        id: 6,
        name: 'University Park United',
        color: '#0891b2',
        record: '1-1-0',
        wins: 1,
        losses: 1,
        goals: 7,
        coach: 'Coach Jennifer Lee',
        founded: '2021',
        achievements: ['Innovation in Play Award', 'Future Stars Recognition']
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

  _getTeamInitials(teamName) {
    return teamName.split(' ').map(word => word[0]).join('');
  }

  render() {
    return html`
      <div class="teams-container">
        <button class="back-button" @click="${() => this._navigate('home')}">
          ← Back to Home
        </button>

        <div class="header">
          <h1>Teams</h1>
          <p class="subtitle">Penn State Soccer League - Fall 2024</p>
        </div>

        <div class="teams-grid">
          ${[...this.teams, ...this.registeredTeams].map(team => html`
            <div class="team-card">
              <div class="team-logo" style="background-color: ${team.color}">
                ${this._getTeamInitials(team.name)}
              </div>
              <div class="team-name" style="color: #000000 !important; background: #ffff00 !important; padding: 20px !important; font-weight: 900 !important; font-size: 32px !important; border: 5px solid #ff0000 !important; text-align: center !important; border-radius: 10px !important; text-shadow: 2px 2px 4px rgba(255,255,255,0.8) !important; font-family: 'Arial Black', Arial, sans-serif !important; z-index: 9999 !important; position: relative !important;">${team.name}</div>
              <div class="team-record">Record: ${team.record}</div>
              ${team.coach ? html`<div class="team-coach">Coach: ${team.coach}</div>` : ''}
              ${team.founded ? html`<div class="team-founded">Founded: ${team.founded}</div>` : ''}
              <div class="team-stats">
                <div class="stat">
                  <div class="stat-number">${team.wins}</div>
                  <div class="stat-label">Wins</div>
                </div>
                <div class="stat">
                  <div class="stat-number">${team.losses}</div>
                  <div class="stat-label">Losses</div>
                </div>
                <div class="stat">
                  <div class="stat-number">${team.goals}</div>
                  <div class="stat-label">Goals</div>
                </div>
              </div>
              ${team.achievements && team.achievements.length > 0 ? html`
                <div class="team-achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    ${team.achievements.map(achievement => html`<li>${achievement}</li>`)}
                  </ul>
                </div>
              ` : ''}
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

customElements.define('teams-page', TeamsPage);
