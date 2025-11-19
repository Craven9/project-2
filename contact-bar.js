export class ContactBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="
        background-color: #1e3a8a;
        color: white;
        padding: 15px;
        text-align: center;
        font-family: Arial, sans-serif;
      ">
        <p style="margin: 0; font-size: 16px;">
          Contact Us: (814) 555-0123 | 
          <span id="email-link" style="
            color: #60a5fa;
            cursor: pointer;
            text-decoration: underline;
            transition: color 0.3s ease;
          " onmouseover="this.style.color='#93c5fd'" onmouseout="this.style.color='#60a5fa'">
            info@pennstatesoccer.edu
          </span>
        </p>
      </div>

      <!-- Email Modal -->
      <div id="email-modal" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
      ">
        <div style="
          background: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          position: relative;
        ">
          <!-- Close Button -->
          <button id="close-modal" style="
            position: absolute;
            top: 15px;
            right: 20px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #6b7280;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.2s ease;
          " onmouseover="this.style.backgroundColor='#f3f4f6'" onmouseout="this.style.backgroundColor='transparent'">
            ×
          </button>

          <!-- Modal Header -->
          <div style="
            text-align: center;
            margin-bottom: 25px;
          ">
            <div style="
              background: #1e3a8a;
              color: white;
              border-radius: 50%;
              width: 60px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              margin: 0 auto 15px auto;
            ">📧</div>
            <h2 style="
              color: #1e3a8a;
              margin: 0 0 5px 0;
              font-size: 24px;
              font-weight: 700;
            ">Send Email</h2>
            <p style="
              color: #6b7280;
              margin: 0;
              font-size: 14px;
            ">Send a message to info@pennstatesoccer.edu</p>
          </div>

          <!-- Email Form -->
          <form id="email-form">
            <div style="margin-bottom: 20px;">
              <label style="
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Your Name *</label>
              <input type="text" id="sender-name" required style="
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 16px;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
              " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'"
              placeholder="Enter your full name">
            </div>

            <div style="margin-bottom: 20px;">
              <label style="
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Your Email *</label>
              <input type="email" id="sender-email" required style="
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 16px;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
              " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'"
              placeholder="your.email@example.com">
            </div>

            <div style="margin-bottom: 20px;">
              <label style="
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Subject *</label>
              <input type="text" id="email-subject" required style="
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 16px;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
              " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'"
              placeholder="What is your message about?">
            </div>

            <div style="margin-bottom: 25px;">
              <label style="
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              ">Message *</label>
              <textarea id="email-message" required rows="6" style="
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 16px;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
                resize: vertical;
              " onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#e2e8f0'"
              placeholder="Type your message here..."></textarea>
            </div>

            <!-- Form Actions -->
            <div style="
              display: flex;
              gap: 15px;
              justify-content: flex-end;
            ">
              <button type="button" id="cancel-email" style="
                background: transparent;
                border: 2px solid #6b7280;
                color: #6b7280;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                transition: all 0.3s ease;
              " onmouseover="
                this.style.backgroundColor='#6b7280';
                this.style.color='white';
              " onmouseout="
                this.style.backgroundColor='transparent';
                this.style.color='#6b7280';
              ">
                Cancel
              </button>
              <button type="submit" style="
                background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                border: none;
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                transition: all 0.3s ease;
              " onmouseover="
                this.style.transform='translateY(-1px)';
                this.style.boxShadow='0 4px 12px rgba(30, 58, 138, 0.3)';
              " onmouseout="
                this.style.transform='translateY(0)';
                this.style.boxShadow='none';
              ">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
      const emailLink = this.querySelector('#email-link');
      const modal = this.querySelector('#email-modal');
      const closeModal = this.querySelector('#close-modal');
      const cancelEmail = this.querySelector('#cancel-email');
      const emailForm = this.querySelector('#email-form');
      
      // Open modal when email link is clicked
      if (emailLink) {
        emailLink.addEventListener('click', () => {
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
      }
      
      // Close modal functions
      const closeEmailModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        emailForm.reset(); // Clear form
      };
      
      if (closeModal) {
        closeModal.addEventListener('click', closeEmailModal);
      }
      
      if (cancelEmail) {
        cancelEmail.addEventListener('click', closeEmailModal);
      }
      
      // Close modal when clicking outside
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            closeEmailModal();
          }
        });
      }
      
      // Handle form submission
      if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          const name = this.querySelector('#sender-name').value;
          const email = this.querySelector('#sender-email').value;
          const subject = this.querySelector('#email-subject').value;
          const message = this.querySelector('#email-message').value;
          
          // Create mailto link with form data
          const mailtoLink = `mailto:info@pennstatesoccer.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
          
          // Open email client
          window.location.href = mailtoLink;
          
          // Show success message
          alert('Opening your email client...');
          
          // Close modal
          closeEmailModal();
        });
      }
    }, 0);
  }
}

customElements.define('contact-bar', ContactBar);