# Destot's Email Powerhouse

Build a production-quality responsive SaaS marketing website for Destot.dev, a company that provides managed business email infrastructure.

Brand and positioning:
- Brand name: Destot
- Domain: Destot.dev
- Primary promise: Reliable email infrastructure for modern businesses
- Services: Email OTP and authentication APIs, transactional email delivery, custom company mail servers, business inboxes, domain setup and verification, SPF/DKIM/DMARC configuration, bulk and automated email sending, bounce/complaint tracking, delivery analytics, migration and managed support.
- Target users: startups, SaaS companies, agencies, e-commerce businesses, enterprises, and companies that need custom email infrastructure.

Design direction:
- Premium modern B2B SaaS visual style, not a generic template.
- Dark navy background with subtle gradients, white typography, electric blue/cyan accents, soft glass panels, clean spacing, tasteful motion, and excellent readability.
- Use Tailwind CSS and shadcn/ui components.
- Fully responsive for mobile, tablet, and desktop.
- Strong accessibility, semantic HTML, keyboard focus states, and good contrast.

Create these pages/routes:
1. Home /
2. Services /services
3. Email OTP API /email-otp
4. Transactional Email /transactional-email
5. Custom Mail Server /custom-mail-server
6. Pricing /pricing
7. About /about
8. Contact /contact
9. Privacy /privacy
10. Terms /terms

Home page sections:
- Sticky navbar with logo text Destot, navigation, and CTA buttons “Talk to an Expert” and “Get Started”.
- Hero headline: “Email infrastructure built for reliability, scale, and control.”
- Hero supporting text explaining OTP, transactional emails, custom mail servers, and managed business email.
- Primary CTA “Talk to an Expert”; secondary CTA “Explore Services”.
- Product-style visual showing delivery metrics, API status, inbox health, and authentication activity.
- Trust/benefit strip: High deliverability, Custom domains, Secure infrastructure, Managed support.
- Services grid with six polished cards.
- “How it works” in four steps: Assess, Configure, Migrate/Integrate, Monitor.
- Developer section with a realistic email OTP API example and response code block.
- Reliability section covering SPF, DKIM, DMARC, retries, bounce handling, and monitoring.
- Use-case cards for SaaS, e-commerce, agencies, and enterprise teams.
- Pricing preview with Starter, Growth, and Custom plans. Do not use fake guaranteed prices; use “Contact us” where needed and clearly label pricing as configurable.
- FAQ accordion.
- Final CTA and detailed footer.

Services page:
- Clear service categories, implementation details, expected outcomes, who each service is for, and CTA.

Email OTP page:
- Explain OTP sending, verification flow, rate limiting, expiration, retries, templates, analytics, webhooks, security, and integration steps.
- Include clean code examples using REST/JSON.

Transactional Email page:
- Explain receipts, alerts, password resets, onboarding, notifications, deliverability, templates, APIs, webhooks, and analytics.

Custom Mail Server page:
- Explain dedicated/custom deployment options, company mailboxes, SMTP/IMAP, DNS records, migration, monitoring, backups, anti-spam, security, and managed maintenance.

Pricing page:
- Three clear packages: Launch, Scale, Enterprise. Use configurable pricing language with a contact CTA rather than inventing exact figures.
- Include comparison table and FAQ.

Contact page:
- Lead form fields: name, work email, company, phone optional, service needed, monthly email volume, message.
- Client-side validation with helpful errors.
- On submit, show a polished success state and store the submission locally for demo purposes; architect it so a backend endpoint can be added later.
- Display contact email as devesh@destot.dev and location as Bengaluru, India.

Technical requirements:
- React + TypeScript.
- Reusable components and clean folder structure.
- Use React Router for routes.
- Add SEO metadata per page, Open Graph basics, favicon placeholder, sitemap and robots files if supported.
- No authentication or database is required in this first version.
- Avoid unsupported claims such as 100% inbox placement or guaranteed uptime.
- Use realistic, clear copy throughout; no lorem ipsum.
- Make all buttons, links, forms, and mobile navigation functional.
- Include a compact announcement banner: “Managed email infrastructure for growing teams.”

Build the complete site now, not just a mockup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a630b8a0-67f8-4a05-9256-08302f55248f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
