import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class HomePage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .home-container {
      min-height: 100vh;
      background: var(--ddd-theme-default-slateLight);
      color: var(--ddd-theme-default-coalyGray);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .home-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 1.5px, transparent 1.5px);
      background-size: 50px 50px, 40px 40px;
      animation: float 20s infinite linear;
      pointer-events: none;
    }

    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-50px, -40px); }
    }

    .hero-section {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--ddd-spacing-10);
      position: relative;
      z-index: 1;
    }

    .hero-content {
      max-width: var(--ddd-breakpoint-md);
      position: relative;
      z-index: 2;
    }

    h1 {
      font-size: var(--ddd-font-size-4xl);
      margin-bottom: var(--ddd-spacing-4);
      font-weight: var(--ddd-font-weight-black);
      line-height: var(--ddd-lh-120);
      color: var(--ddd-theme-default-white);
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .subtitle {
      font-size: var(--ddd-font-size-xl);
      margin-bottom: var(--ddd-spacing-8);
      opacity: 0.95;
      line-height: var(--ddd-lh-140);
      color: var(--ddd-theme-default-white);
    }

    .buttons {
      display: flex;
      gap: var(--ddd-spacing-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
      border: none;
      font-size: var(--ddd-font-size-base);
      font-weight: var(--ddd-font-weight-bold);
      cursor: pointer;
      transition: all var(--ddd-duration-rapid);
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg);
      box-shadow: var(--ddd-boxShadow-sm);
    }

    .btn-primary {
      background: var(--ddd-theme-default-original87Pink);
      color: var(--ddd-theme-default-white);
      border: 2px solid transparent;
    }

    .btn-primary:hover {
      background: var(--ddd-theme-default-original87Pink);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.15);
      color: var(--ddd-theme-default-white);
      border: var(--ddd-border-sm) solid rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    }

    .btn-success {
      background: var(--ddd-theme-default-successGreen);
      color: var(--ddd-theme-default-white);
      border: 2px solid transparent;
    }

    .btn-success:hover {
      background: var(--ddd-theme-default-limeGreen);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .btn-championship {
      background: var(--ddd-theme-default-accent);
      color: var(--ddd-theme-default-coalyGray);
      border: 2px solid transparent;
      font-weight: var(--ddd-font-weight-bold);
    }

    .btn-championship:hover {
      background: var(--ddd-theme-default-alertOrange);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    .navigation {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: var(--ddd-spacing-4) var(--ddd-spacing-8);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .logo {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      color: var(--ddd-theme-default-white);
    }

    .nav-links {
      display: flex;
      gap: var(--ddd-spacing-8);
    }

    .nav-link {
      color: var(--ddd-theme-default-white);
      text-decoration: none;
      font-weight: var(--ddd-font-weight-medium);
      transition: all 0.3s ease;
      padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
      border: 2px solid transparent;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      opacity: 1;
    }

    .footer {
      background: rgba(0, 0, 0, 0.3);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
      text-align: center;
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
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
      background: rgba(255, 255, 255, 0.9);
      
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }

    .footer-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: contrast(1) brightness(1);
    }

    .copyright {
      font-size: var(--ddd-font-size-sm);
      opacity: 0.9;
    }
  `;

  _navigate(page, event) {
    if (event) {
      event.preventDefault();
    }
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="home-container">
        <nav class="navigation">
          <div class="logo">PSL</div>
          <div class="nav-links">
            <button class="nav-link" @click="${(e) => this._navigate('home', e)}">Home</button>
            <button class="nav-link" @click="${(e) => this._navigate('schedule', e)}">Schedule</button>
            <button class="nav-link" @click="${(e) => this._navigate('teams', e)}">Teams</button>
            <button class="nav-link" @click="${(e) => this._navigate('stats', e)}">Stats</button>
          </div>
        </nav>

        <div class="hero-section">
          <div class="hero-content">
            <h1>Penn State Soccer League</h1>
            <p class="subtitle">Experience competitive soccer excellence at Penn State University</p>
            <div class="buttons">
              <button class="btn btn-primary" @click="${(e) => this._navigate('schedule', e)}">
                View Schedule
              </button>
              <button class="btn btn-secondary" @click="${(e) => this._navigate('teams', e)}">
                Explore Teams
              </button>
              <button class="btn btn-success" @click="${(e) => this._navigate('register', e)}">
                Register Team
              </button>
              <button class="btn btn-championship" @click="${(e) => this._navigate('championship', e)}">
                Championship News
              </button>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <img src="./assets/back-seat-bros-logo.svg" alt="Powered by Back Seat Bros" />
            </div>
            <div class="copyright">© 2025 Penn State Soccer League. All rights reserved.</div>
          </div>
        </footer>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
