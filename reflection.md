**Part A: Review and Improve Portfolio**

AI improvements list:

- ###### **Remove duplicate name attribute on textarea**

- ###### **Add rel="noopener noreferrer" to all external links**

- ###### **Fill in or remove empty project links**

- ###### **Remove commented-out code**

---

###### **ASCII structure diagram**

Portfolio_website/

│

├── index.html

├── styles.css

├── reset.css

├── script.js

├── README.md

│

└── images/

═══════════════════════════════════════

**HTML Structure:**

<html>

&nbsp; ├── <header>

&nbsp; │ ├── Navigation (Desktop + Mobile)

&nbsp; │ └── Hero Section

&nbsp; │

&nbsp; ├── <main>

&nbsp; │ ├── About Section

&nbsp; │ ├── Skills Section

&nbsp; │ ├── Projects Section (3 projects)

&nbsp; │ └── Contact Form

&nbsp; │

&nbsp; └── <footer>

&nbsp; └── Social Links

═══════════════════════════════════════

**CSS Layers:**

reset.css → styles.css → animations

&nbsp; ↓ ↓ ↓

HTML Layout \& Color Fade/Particles

═══════════════════════════════════════

**JavaScript Features:**

✓ Particle Animation

✓ Mobile Menu Toggle

✓ Contact Form Validation

✓ Formspree Integration

✓ Status Messages

═══════════════════════════════════════

**Data Flow:**

User clicks form

&nbsp; ↓

Validation

&nbsp; ↓

Fetch to Formspree

&nbsp; ↓

Success/Error message

**Reflect on learnings:**

---

1. Thanks to a AI suggestion, I learned how the noopener and noreferrer attributes work for links that open in a new tab, and I improved both security against tabnabbing and privacy protection for such links.
2. I use Formspree to send messages from my website directly to my email, so I don’t have my own backend. When I enabled this option, I didn’t notice that I hadn’t removed the previous name attribute and had accidentally added a duplicate. Thanks to AI pointing out the duplicated name attribute in the <textarea>, I learned more about how the message submission works in this setup and corrected my HTML to improve its validity.
3. AI can suggest code changes that unintentionally break working functionality. I realized how important it is to commit my code before applying any modifications, so I can easily roll back if something goes wrong.

---

###### **Part B: Ethics and Risks**

**1. Confidential code and data** - any information or code that we input into AI tools may no longer remain fully confidential, as it can potentially be stored or used for model improvement. Therefore, it is inappropriate to share sensitive or private data in AI systems.
I will carefully assess the level of confidentiality of the data I work with and make deliberate decisions about what can be processed by AI for improvement purposes and what must remain private.

**2. Security vulnerabilities** - any AI-generated code may contain security weaknesses that can introduce vulnerabilities into a project. For this reason, it is essential to personally understand the core security principles relevant to each component of the system and not rely blindly on generated solutions.
Code reviews should be conducted independently and critically. In addition, AI can be used as a supplementary tool to analyze the code against security best practices — but it should serve as support, not as the final authority.
Ultimately, responsibility for the security and integrity of the code remains with the developer.

**3. Company policies** - different companies have different policies regarding the use of AI development tools. It is important to understand the specific guidelines and restrictions within a particular organization to ensure compliance with internal standards and avoid violating development policies.
