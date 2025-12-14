import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class ChampionshipPage extends DDDSuper(LitElement) {
  static properties = {
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--ddd-font-primary);
    }

    .championship-container {
      min-height: 100vh;
      background: var(--ddd-theme-default-slateLight);
      padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
      color: var(--ddd-theme-default-coalyGray);
    }

    .back-button {
      background: transparent;
      border: 2px solid var(--ddd-theme-default-navy);
      color: var(--ddd-theme-default-navy);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-5);
      
      cursor: pointer;
      font-size: var(--ddd-font-size-sm);
      font-weight: var(--ddd-font-weight-bold);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-2);
      margin-bottom: var(--ddd-spacing-5);
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .back-button:hover {
      background: var(--ddd-theme-default-navy);
      color: var(--ddd-theme-default-white);
      transform: translateY(-1px);
    }

    .article-header {
      max-width: 800px;
      margin: 0 auto var(--ddd-spacing-10) auto;
      background: var(--ddd-theme-default-white);
      
      padding: var(--ddd-spacing-12) var(--ddd-spacing-10);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      text-align: center;
    }

    .category-badge {
      background: var(--ddd-theme-default-yellowLightAccent);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-5);
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-bold);
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg);
      display: inline-block;
      margin-bottom: var(--ddd-spacing-4);
    }

    .article-title {
      font-size: var(--ddd-font-size-4xl);
      color: var(--ddd-theme-default-navy80);
      margin: 0 0 var(--ddd-spacing-5) 0;
      font-weight: var(--ddd-font-weight-black);
      line-height: var(--ddd-lh-120);
    }

    .article-summary {
      font-size: var(--ddd-font-size-xl);
      color: var(--ddd-theme-default-slateMaxLight);
      line-height: var(--ddd-lh-140);
      margin: 0 0 var(--ddd-spacing-8) 0;
      font-weight: 400;
    }

    .meta-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--ddd-spacing-6);
      padding-top: var(--ddd-spacing-5);
      border-top: 1px solid var(--ddd-theme-default-slateLight);
      color: var(--ddd-theme-default-slateMaxLight);
      font-size: var(--ddd-font-size-sm);
    }

    .match-result-card {
      max-width: 800px;
      margin: 0 auto var(--ddd-spacing-10) auto;
      background: var(--ddd-theme-default-white);
      
      padding: var(--ddd-spacing-10);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }

    .result-title {
      color: var(--ddd-theme-default-navy80);
      text-align: center;
      margin: 0 0 var(--ddd-spacing-8) 0;
      font-size: var(--ddd-font-size-2xl);
      font-weight: var(--ddd-font-weight-black);
    }

    .score-display {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-8);
      
      text-align: center;
      margin-bottom: var(--ddd-spacing-8);
    }

    .score-grid {
      display: grid;
      grid-template-columns: 2fr auto 2fr;
      gap: var(--ddd-spacing-5);
      align-items: center;
      max-width: 500px;
      margin: 0 auto;
    }

    .team-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .team-name {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
      margin-bottom: var(--ddd-spacing-2);
    }

    .team-label {
      font-size: var(--ddd-font-size-sm);
      opacity: 0.9;
    }

    .final-score {
      font-size: var(--ddd-font-size-5xl);
      font-weight: var(--ddd-font-weight-black);
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .match-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: var(--ddd-spacing-5);
      margin-bottom: var(--ddd-spacing-8);
    }

    .stat-item {
      background: var(--ddd-theme-default-limestoneLight);
      padding: var(--ddd-spacing-5);
      
      text-align: center;
    }

    .stat-label {
      color: var(--ddd-theme-default-slateMaxLight);
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-bold);
      margin-bottom: var(--ddd-spacing-1);
    }

    .stat-value {
      color: var(--ddd-theme-default-navy80);
      font-weight: var(--ddd-font-weight-black);
    }

    .mvp-section {
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.1), rgba(59, 130, 246, 0.1));
      padding: var(--ddd-spacing-6);
      
      text-align: center;
    }

    .mvp-title {
      color: var(--ddd-theme-default-navy80);
      margin: 0 0 var(--ddd-spacing-4) 0;
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-black);
    }

    .mvp-name {
      color: var(--ddd-theme-default-navy80);
      font-size: var(--ddd-font-size-2xl);
      font-weight: var(--ddd-font-weight-black);
      margin-bottom: var(--ddd-spacing-2);
    }

    .mvp-team {
      color: var(--ddd-theme-default-slateMaxLight);
      font-size: var(--ddd-font-size-base);
      margin-bottom: var(--ddd-spacing-1);
    }

    .mvp-stats {
      color: var(--ddd-theme-default-slateMaxLight);
      font-size: var(--ddd-font-size-sm);
      font-weight: var(--ddd-font-weight-bold);
    }

    .championship-photo {
      max-width: 800px;
      margin: 0 auto var(--ddd-spacing-10) auto;
      background: var(--ddd-theme-default-white);
      
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }

    .photo-img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: block;
    }

    .photo-caption {
      padding: var(--ddd-spacing-5);
      text-align: center;
      color: var(--ddd-theme-default-slateMaxLight);
      font-size: var(--ddd-font-size-sm);
      font-style: italic;
    }

    .article-content {
      max-width: 800px;
      margin: 0 auto;
      background: var(--ddd-theme-default-white);
      
      padding: var(--ddd-spacing-10);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      line-height: var(--ddd-lh-150);
    }

    .content-paragraph {
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: var(--ddd-spacing-5);
      font-size: var(--ddd-font-size-base);
    }

    .content-subheading {
      color: var(--ddd-theme-default-navy80);
      margin: var(--ddd-spacing-10) 0 var(--ddd-spacing-5) 0;
      font-size: var(--ddd-font-size-2xl);
      font-weight: var(--ddd-font-weight-black);
    }

    .content-highlight {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-6);
      margin: var(--ddd-spacing-8) 0;
      font-size: var(--ddd-font-size-lg);
      font-weight: var(--ddd-font-weight-bold);
      text-align: center;
    }

    .content-quote {
      border-left: 4px solid var(--ddd-theme-default-navy80);
      padding: var(--ddd-spacing-6) var(--ddd-spacing-8);
      margin: var(--ddd-spacing-8) 0;
      background: var(--ddd-theme-default-limestoneLight);
      
      font-style: italic;
      color: var(--ddd-theme-default-coalyGray);
      font-size: var(--ddd-font-size-lg);
    }

    .quote-attribution {
      display: block;
      margin-top: var(--ddd-spacing-4);
      font-style: normal;
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-navy80);
      font-size: var(--ddd-font-size-sm);
    }

    .next-season-cta {
      background: linear-gradient(135deg, #059669, #10b981);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-8);
      
      text-align: center;
      margin-top: var(--ddd-spacing-10);
    }

    .cta-title {
      margin: 0 0 var(--ddd-spacing-4) 0;
      font-size: var(--ddd-font-size-2xl);
      font-weight: var(--ddd-font-weight-black);
    }

    .cta-description {
      margin: 0 0 var(--ddd-spacing-6) 0;
      font-size: var(--ddd-font-size-base);
      opacity: 0.95;
    }

    .cta-button {
      background: var(--ddd-theme-default-white);
      color: var(--ddd-theme-default-successGreen);
      border: none;
      padding: var(--ddd-spacing-4) var(--ddd-spacing-9);
      
      font-size: var(--ddd-font-size-base);
      font-weight: var(--ddd-font-weight-bold);
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: var(--ddd-ls-16-lg);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }

    .footer {
      background: var(--ddd-theme-default-white);
      color: var(--ddd-theme-default-slateMaxLight);
      padding: var(--ddd-spacing-8);
      text-align: center;
      border-top: 1px solid var(--ddd-theme-default-slateLight);
      margin-top: var(--ddd-spacing-10);
    }

    .footer-content {
      max-width: 800px;
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
      border: 1px solid var(--ddd-theme-default-slateLight);
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

    @media (max-width: 768px) {
      .championship-container {
        padding: var(--ddd-spacing-6) var(--ddd-spacing-4);
      }

      .article-header {
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6);
      }

      .article-title {
        font-size: var(--ddd-font-size-2xl);
      }

      .score-grid {
        grid-template-columns: 1fr;
        gap: var(--ddd-spacing-4);
      }

      .final-score {
        font-size: var(--ddd-font-size-3xl);
      }

      .match-stats {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }
  `;

  constructor() {
    super();
    this.articleData = {
      title: "Nittany Lions FC Claims 2024 PSL Championship",
      publishDate: "December 8, 2024",
      author: "PSL Sports Desk",
      readTime: "4 min read",
      category: "Championship",
      summary: "In a thrilling final match, Nittany Lions FC defeated Penn State United 3-2 to capture their second consecutive PSL championship title.",
      finalScore: {
        winner: "Nittany Lions FC",
        winnerScore: 3,
        runnerUp: "Penn State United", 
        runnerUpScore: 2
      },
      matchStats: {
        attendance: 245,
        venue: "Beaver Stadium Field A",
        weather: "Clear, 52°F",
        duration: "95 minutes"
      },
      mvp: {
        name: "Marcus Johnson",
        team: "Nittany Lions FC",
        stats: "2 goals, 1 assist"
      },
      content: [
        {
          type: "paragraph",
          text: "Under perfect December weather conditions, Nittany Lions FC secured their second consecutive Premier Student League championship in dramatic fashion, defeating Penn State United 3-2 in a match that had everything - early goals, stunning saves, and a comeback that will be remembered for years."
        },
        {
          type: "highlight", 
          text: "With this victory, Nittany Lions FC becomes only the second team in PSL history to win back-to-back championships."
        },
        {
          type: "paragraph",
          text: "The match started at a blistering pace with Penn State United taking an early 2-0 lead through goals from Sarah Chen and Tyler Brooks in the 12th and 18th minutes. The large crowd of 245 spectators at Beaver Stadium Field A witnessed what appeared to be an upset in the making."
        },
        {
          type: "subheading",
          text: "The Comeback Begins"
        },
        {
          type: "paragraph",
          text: "However, Nittany Lions FC showed the championship mentality that has defined their season. Marcus Johnson pulled one back just before halftime with a spectacular 25-yard strike that left goalkeeper Jake Wilson with no chance. The momentum had shifted."
        },
        {
          type: "paragraph",
          text: "The second half belonged entirely to the Lions. Jordan Smith leveled the score in the 67th minute with a close-range header from Emma Rodriguez's perfectly weighted cross. The stadium erupted as the defending champions had fought their way back into the contest."
        },
        {
          type: "subheading",
          text: "Championship-Winning Moment"
        },
        {
          type: "paragraph",
          text: "The decisive moment came in the 82nd minute when Marcus Johnson completed his brace and the comeback. A quick counter-attack led by Chris Davis found Johnson in space, and the senior forward made no mistake with a composed finish into the bottom corner."
        },
        {
          type: "quote",
          text: "The team showed incredible character today. Being 2-0 down in a championship final would break most teams, but these players have something special. They never stopped believing.",
          attribution: "Coach Sarah Williams, Nittany Lions FC"
        },
        {
          type: "subheading", 
          text: "Post-Match Celebrations"
        },
        {
          type: "paragraph",
          text: "The celebrations began immediately at the final whistle, with players and fans alike singing traditional Penn State songs. Captain Marcus Johnson was presented with the Championship MVP award, recognizing his two-goal performance and leadership throughout the season."
        },
        {
          type: "paragraph",
          text: "Penn State United, despite the heartbreak of defeat, was praised for their outstanding season and sportsmanship. Captain Sarah Chen graciously congratulated the winners and promised her team would be back stronger next year."
        }
      ]
    };
  }

  _navigate(page) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  _renderContentSection(section) {
    switch(section.type) {
      case 'paragraph':
        return html`<p class="content-paragraph">${section.text}</p>`;
        
      case 'subheading':
        return html`<h2 class="content-subheading">${section.text}</h2>`;
        
      case 'highlight':
        return html`<div class="content-highlight">${section.text}</div>`;
        
      case 'quote':
        return html`
          <blockquote class="content-quote">
            "${section.text}"
            <cite class="quote-attribution">— ${section.attribution}</cite>
          </blockquote>
        `;
        
      default:
        return html``;
    }
  }

  render() {
    return html`
      <div class="championship-container">
        <!-- Back Button -->
        <button class="back-button" @click="${() => this._navigate('home')}">
          ← Back to Home
        </button>

        <!-- Article Header -->
        <div class="article-header">
          <div class="category-badge">${this.articleData.category}</div>
          <h1 class="article-title">${this.articleData.title}</h1>
          <p class="article-summary">${this.articleData.summary}</p>
          <div class="meta-info">
            <div><strong>By:</strong> ${this.articleData.author}</div>
            <div><strong>Published:</strong> ${this.articleData.publishDate}</div>
            <div><strong>Read time:</strong> ${this.articleData.readTime}</div>
          </div>
        </div>

        <!-- Match Result Card -->
        <div class="match-result-card">
          <h2 class="result-title">Final Result</h2>
          
          <!-- Score Display -->
          <div class="score-display">
            <div class="score-grid">
              <div class="team-info">
                <div class="team-name">${this.articleData.finalScore.winner}</div>
                <div class="team-label">Champions</div>
              </div>
              
              <div class="final-score">${this.articleData.finalScore.winnerScore} - ${this.articleData.finalScore.runnerUpScore}</div>
              
              <div class="team-info">
                <div class="team-name">${this.articleData.finalScore.runnerUp}</div>
                <div class="team-label">Runners-up</div>
              </div>
            </div>
          </div>
          
          <!-- Match Stats -->
          <div class="match-stats">
            <div class="stat-item">
              <div class="stat-label">VENUE</div>
              <div class="stat-value">${this.articleData.matchStats.venue}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">ATTENDANCE</div>
              <div class="stat-value">${this.articleData.matchStats.attendance}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">WEATHER</div>
              <div class="stat-value">${this.articleData.matchStats.weather}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">DURATION</div>
              <div class="stat-value">${this.articleData.matchStats.duration}</div>
            </div>
          </div>
          
          <!-- MVP Section -->
          <div class="mvp-section">
            <h3 class="mvp-title">Championship MVP</h3>
            <div class="mvp-name">${this.articleData.mvp.name}</div>
            <div class="mvp-team">${this.articleData.mvp.team}</div>
            <div class="mvp-stats">${this.articleData.mvp.stats}</div>
          </div>
        </div>

        <!-- Championship Photo -->
        <div class="championship-photo">
          <img 
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            class="photo-img"
            alt="Championship Celebration"
          />
          <div class="photo-caption">
            Nittany Lions FC celebrates their championship victory at Beaver Stadium
          </div>
        </div>

        <!-- Article Content -->
        <div class="article-content">
          ${this.articleData.content.map(section => this._renderContentSection(section))}
          
          <!-- Next Season CTA -->
          <div class="next-season-cta">
            <h3 class="cta-title">Join Next Season!</h3>
            <p class="cta-description">
              Registration for the 2025 season opens January 1st. Be part of the next championship story!
            </p>
            <button class="cta-button" @click="${() => this._navigate('register')}">
              Register Interest
            </button>
          </div>
        </div>

        <!-- Footer -->
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

customElements.define('championship-page', ChampionshipPage);
