import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class NewsCard extends DDDSuper(LitElement) {
  static properties = {
    headline: { type: String },
    summary: { type: String },
    date: { type: String },
    category: { type: String },
    image: { type: String },
    author: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .news-card {
      background: var(--ddd-theme-default-white);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--ddd-theme-default-slateLight);
      transition: all 0.3s ease;
      overflow: hidden;
      cursor: pointer;
    }

    .news-image {
      width: 100%;
      height: 180px;
      background: var(--ddd-theme-default-skyBlue);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ddd-theme-default-white);
      font-size: var(--ddd-font-size-3xl);
      position: relative;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .category-badge {
      position: absolute;
      top: var(--ddd-spacing-3);
      left: var(--ddd-spacing-3);
      background: rgba(0, 0, 0, 0.7);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
      
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-bold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .news-content {
      padding: var(--ddd-spacing-6);
    }

    .news-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--ddd-spacing-3);
      font-size: var(--ddd-font-size-sm);
      color: var(--ddd-theme-default-coalyGray);
    }

    .news-date {
      font-weight: var(--ddd-font-weight-medium);
    }

    .news-author {
      font-style: italic;
    }

    .news-headline {
      font-size: var(--ddd-font-size-xl);
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-coalyGray);
      margin: 0 0 var(--ddd-spacing-3) 0;
      line-height: 1.3;
    }

    .news-summary {
      font-size: var(--ddd-font-size-base);
      color: var(--ddd-theme-default-coalyGray);
      line-height: 1.5;
      margin: 0 0 var(--ddd-spacing-4) 0;
    }

    .read-more {
      display: inline-flex;
      align-items: center;
      color: var(--ddd-theme-default-coalyGray);
      text-decoration: none;
      font-weight: var(--ddd-font-weight-medium);
      font-size: var(--ddd-font-size-sm);
      transition: all 0.3s ease;
    }

    .read-more:hover {
      color: var(--ddd-theme-default-coalyGray);
      transform: translateX(2px);
    }

    .read-more::after {
      content: '';
      margin-left: var(--ddd-spacing-2);
      transition: transform 0.3s ease;
    }

    .read-more:hover::after {
      transform: translateX(2px);
    }

    @media (max-width: 600px) {
      .news-content {
        padding: var(--ddd-spacing-4);
      }
      
      .news-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--ddd-spacing-1);
      }
    }
  `;

  constructor() {
    super();
    this.headline = 'News Headline';
    this.summary = 'News summary or excerpt goes here...';
    this.date = new Date().toLocaleDateString();
    this.category = 'General';
    this.image = '';
    this.author = 'PSL Staff';
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('news-click', {
      bubbles: true,
      composed: true,
      detail: {
        headline: this.headline,
        summary: this.summary,
        date: this.date,
        category: this.category
      }
    }));
  }

  render() {
    return html`
      <article class="news-card" @click="${this._handleClick}">
        <div class="news-image">
          ${this.image ? 
            html`<img src="${this.image}" alt="${this.headline}" />` :
            html`<div style="font-size: var(--ddd-font-size-2xl); font-weight: var(--ddd-font-weight-bold);">NEWS</div>`
          }
          ${this.category ? html`
            <div class="category-badge">${this.category}</div>
          ` : ''}
        </div>
        
        <div class="news-content">
          <div class="news-meta">
            <span class="news-date">${this.date}</span>
            ${this.author ? html`<span class="news-author">by ${this.author}</span>` : ''}
          </div>
          
          <h3 class="news-headline">${this.headline}</h3>
          <p class="news-summary">${this.summary}</p>
          
          <a href="#" class="read-more" @click="${(e) => e.stopPropagation()}">
            Read More
          </a>
        </div>
      </article>
    `;
  }
}

customElements.define('news-card', NewsCard);
