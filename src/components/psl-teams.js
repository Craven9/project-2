import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./psl-button.js";

/**
 * `psl-teams`
 * Teams directory and management page for Penn State Soccer League
 * 
 * @element psl-teams
 */
export class PslTeams extends DDDSuper(LitElement) {

  static get tag() {
    return "psl-teams";
  }

  static get properties() {
    return {
      ...super.properties,
      teams: { type: Array },
      selectedDivision: { type: String },
      searchTerm: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .teams-container {
        max-width: var(--ddd-breakpoint-xl);
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }

      .teams-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }

      .teams-title {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .teams-subtitle {
        font-size: var(--ddd-font-size-lg);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0;
      }

      .teams-filters {
        display: flex;
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-6);
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .filter-group {
        display: flex;
        gap: var(--ddd-spacing-3);
        align-items: center;
      }

      .filter-select,
      .search-input {
        padding: var(--ddd-spacing-3);
        border: 2px solid var(--ddd-theme-default-slateLight);
        
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-coalyGray);
        font-family: var(--ddd-font-primary);
      }

      .search-input {
        min-width: 250px;
      }

      .teams-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit);
        gap: var(--ddd-spacing-6);
      }

      .team-card {
        background: var(--ddd-theme-default-white);
        border: 1px solid var(--ddd-theme-default-slateLight);
        box-shadow: var(--ddd-boxShadow-1);
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .team-header {
        background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue), var(--ddd-theme-default-navy));
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-4);
        position: relative;
      }

      .team-name {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0 0 var(--ddd-spacing-1) 0;
      }

      .team-division {
        font-size: var(--ddd-font-size-sm);
        opacity: 0.9;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .team-info {
        padding: var(--ddd-spacing-4);
      }

      .team-stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-4);
      }

      .stat-item {
        text-align: center;
      }

      .stat-value {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-skyBlue);
        margin: 0;
      }

      .stat-label {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: var(--ddd-spacing-1) 0 0 0;
      }

      .team-details {
        margin-bottom: var(--ddd-spacing-4);
      }

      .detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-2) 0;
        border-bottom: 1px solid var(--ddd-theme-default-slateLight);
      }

      .detail-row:last-child {
        border-bottom: none;
      }

      .detail-label {
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-coalyGray);
        font-weight: var(--ddd-font-weight-medium);
      }

      .detail-value {
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-theme-default-coalyGray);
        font-weight: var(--ddd-font-weight-bold);
      }

      .no-teams {
        text-align: center;
        grid-column: 1 / -1;
        padding: var(--ddd-spacing-8);
        color: var(--ddd-theme-default-slateMaxLight);
        font-size: var(--ddd-font-size-lg);
      }

      @media (max-width: 768px) {
        .teams-container {
          padding: var(--ddd-spacing-4);
        }
        
        .teams-filters {
          flex-direction: column;
          align-items: stretch;
        }

        .filter-group {
          justify-content: space-between;
        }

        .search-input {
          min-width: unset;
          width: 100%;
        }

        .teams-grid {
          grid-template-columns: 1fr;
        }

        .team-stats {
          grid-template-columns: repeat(4, 1fr);
          gap: var(--ddd-spacing-2);
        }
      }
    `];
  }

  constructor() {
    super();
    this.teams = [
      {
        id: 1,
        name: "Penn State Lions",
        division: "Elite",
        captain: "Sarah Johnson",
        wins: 8,
        losses: 2,
        goals: 34,
        founded: "2019",
        homeField: "Beaver Stadium",
        email: "lions@psu.edu"
      },
      {
        id: 2,
        name: "Nittany United",
        division: "Competitive",
        captain: "Mike Rodriguez",
        wins: 6,
        losses: 4,
        goals: 28,
        founded: "2020",
        homeField: "Jeffrey Field",
        email: "united@psu.edu"
      },
      {
        id: 3,
        name: "Blue & White FC",
        division: "Recreational",
        captain: "Emma Davis",
        wins: 5,
        losses: 3,
        goals: 22,
        founded: "2021",
        homeField: "IM Fields East",
        email: "bluewhite@psu.edu"
      },
      {
        id: 4,
        name: "Happy Valley Stars",
        division: "Competitive",
        captain: "Alex Chen",
        wins: 7,
        losses: 3,
        goals: 31,
        founded: "2018",
        homeField: "University Park",
        email: "stars@psu.edu"
      },
      {
        id: 5,
        name: "State College Strikers",
        division: "Elite",
        captain: "Jordan Williams",
        wins: 9,
        losses: 1,
        goals: 42,
        founded: "2017",
        homeField: "Penn State Fields",
        email: "strikers@psu.edu"
      },
      {
        id: 6,
        name: "Campus Crusaders",
        division: "Recreational",
        captain: "Taylor Brown",
        wins: 4,
        losses: 4,
        goals: 18,
        founded: "2022",
        homeField: "IM Fields West",
        email: "crusaders@psu.edu"
      }
    ];
    this.selectedDivision = "";
    this.searchTerm = "";
  }

  get filteredTeams() {
    return this.teams.filter(team => {
      const matchesDivision = !this.selectedDivision || team.division === this.selectedDivision;
      const matchesSearch = !this.searchTerm || 
        team.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        team.captain.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesDivision && matchesSearch;
    });
  }

  _handleDivisionFilter(e) {
    this.selectedDivision = e.target.value;
  }

  _handleSearch(e) {
    this.searchTerm = e.target.value;
  }

  render() {
    const filteredTeams = this.filteredTeams;

    return html`
      <div class="teams-container">
        <div class="teams-header">
          <h1 class="teams-title">League Teams</h1>
          <p class="teams-subtitle">Meet the teams competing in the Penn State Soccer League</p>
        </div>

        <div class="teams-filters">
          <div class="filter-group">
            <label for="division-filter">Division:</label>
            <select 
              id="division-filter" 
              class="filter-select"
              @change="${this._handleDivisionFilter}">
              <option value="">All Divisions</option>
              <option value="Elite">Elite</option>
              <option value="Competitive">Competitive</option>
              <option value="Recreational">Recreational</option>
            </select>
          </div>

          <div class="filter-group">
            <input 
              type="text" 
              class="search-input" 
              placeholder="Search teams or captains..."
              @input="${this._handleSearch}">
          </div>
        </div>

        <div class="teams-grid">
          ${filteredTeams.length > 0 
            ? filteredTeams.map(team => html`
              <div class="team-card">
                <div class="team-header">
                  <h3 class="team-name">${team.name}</h3>
                  <div class="team-division">${team.division} Division</div>
                </div>

                <div class="team-info">
                  <div class="team-stats">
                    <div class="stat-item">
                      <div class="stat-value">${team.wins}</div>
                      <div class="stat-label">Wins</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-value">${team.losses}</div>
                      <div class="stat-label">Losses</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-value">${team.goals}</div>
                      <div class="stat-label">Goals</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-value">${Math.round((team.goals / (team.wins + team.losses)) * 10) / 10}</div>
                      <div class="stat-label">Avg/Game</div>
                    </div>
                  </div>

                  <div class="team-details">
                    <div class="detail-row">
                      <span class="detail-label">Captain:</span>
                      <span class="detail-value">${team.captain}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Founded:</span>
                      <span class="detail-value">${team.founded}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Home Field:</span>
                      <span class="detail-value">${team.homeField}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Contact:</span>
                      <span class="detail-value">${team.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            `)
            : html`
              <div class="no-teams">
                No teams found matching your criteria.
              </div>
            `
          }
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslTeams.tag, PslTeams);
