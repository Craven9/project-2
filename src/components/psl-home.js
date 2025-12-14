import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./hero-banner.js";
import "./game-card.js";
import "./stat-card.js";
import "./news-card.js";
import "./psl-button.js";

/**
 * `psl-home`
 * Home page component for Penn State Soccer League
 * 
 * @element psl-home
 */
export class PslHome extends DDDSuper(LitElement) {

  static get tag() {
    return "psl-home";
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .home-container {
        max-width: var(--ddd-breakpoint-lg);
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }

      .hero-section {
        margin-bottom: var(--ddd-spacing-8);
      }

      .quick-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-8);
      }

      .upcoming-games {
        margin-bottom: var(--ddd-spacing-8);
      }

      .section-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: var(--ddd-spacing-4);
        text-align: center;
      }

      .games-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--ddd-spacing-4);
      }

      .news-section {
        background: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-6);
        
        box-shadow: var(--ddd-boxShadow-1);
        margin-bottom: var(--ddd-spacing-6);
      }

      .cta-section {
        text-align: center;
        background: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-8);
        
        box-shadow: var(--ddd-boxShadow-1);
      }

      .cta-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: var(--ddd-spacing-2);
      }

      .cta-subtitle {
        font-size: var(--ddd-font-size-base);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: var(--ddd-spacing-6);
      }

      @media (max-width: 768px) {
        .home-container {
          padding: var(--ddd-spacing-4);
        }
        
        .quick-stats {
          grid-template-columns: 1fr;
        }
        
        .games-grid {
          grid-template-columns: 1fr;
        }
      }
    `];
  }

  _handleNavigation(path) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="home-container">
        <div class="hero-section">
          <hero-banner
            title="Penn State Soccer League"
            subtitle="Join our soccer league and play with local teams"
            cta-text="Get Started"
            @cta-click="${() => this._handleNavigation('/register')}">
          </hero-banner>
        </div>

        <div class="quick-stats">
          <stat-card
            number="12"
            label="Active Teams"
            color="var(--ddd-theme-default-skyBlue)">
          </stat-card>
          <stat-card
            number="156"
            label="Total Players"
            color="var(--ddd-theme-default-forestGreen)">
          </stat-card>
          <stat-card
            number="28"
            label="Games Played"
            color="var(--ddd-theme-default-orange)">
          </stat-card>
        </div>

        <div class="upcoming-games">
          <h2 class="section-title">Upcoming Games</h2>
          <div class="games-grid">
            <game-card
              date="Dec 5, 2025"
              time="2:00 PM"
              team1="Nittany Lions FC"
              team2="State College FC"
              location="IM Field 6"
              status="upcoming">
            </game-card>
            <game-card
              date="Dec 7, 2025"
              time="3:30 PM"
              team1="Penn State United"
              team2="Happy Valley FC"
              location="IM Field 3"
              status="upcoming">
            </game-card>
          </div>
        </div>

        <div class="news-section">
          <h2 class="section-title">Latest News</h2>
          <news-card
            headline="Championship Game Set for December 15th"
            summary="The top two teams will face off in the championship match to determine this season's champion."
            date="Dec 1, 2025"
            category="Championship">
          </news-card>
        </div>

        <div class="cta-section">
          <h2 class="cta-title">Ready to Join?</h2>
          <p class="cta-subtitle">Register your team today and be part of the Penn State Soccer League community</p>
          <psl-button
            text="Register Team"
            type="primary"
            @click="${() => this._handleNavigation('/register')}">
          </psl-button>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PslHome.tag, PslHome);
