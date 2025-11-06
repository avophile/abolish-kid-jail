# My Kid Stays in School!

A web application that helps parents generate demand letters for manifestation determination hearings, protecting special education students from discriminatory disciplinary actions.

**Formerly "Abolish Kid Jail"** - same mission, more positive messaging focused on keeping kids in school with the support they need.

## About

This application empowers parents to advocate for their children with disabilities by generating professional PDF letters that demand manifestation determination hearings when their special education student faces suspension or other disciplinary action.

**The School-to-Prison Pipeline Starts Here** - When students with disabilities are suspended or expelled without proper consideration of their disability, it's the first step toward incarceration. This tool helps parents fight back by ensuring schools follow federal special education law (IDEA).

## What is a Manifestation Determination Hearing?

A manifestation determination hearing is a **legally required meeting** that must occur when a student with an IEP (Individualized Education Program) receives disciplinary action resulting in removal from school for more than 10 days (consecutive or cumulative).

### Purpose

The hearing team must answer two critical questions:

1. **Was the student's behavior caused by or directly and substantially related to their disability?**
2. **Was the behavior a direct result of the school district's failure to implement the student's IEP?**

If the answer to either question is "yes," the school **cannot proceed** with standard disciplinary action. Instead, they must:
- Conduct a Functional Behavioral Assessment (FBA) if needed
- Develop or revise the Behavior Intervention Plan (BIP)
- Provide appropriate support rather than punishment

### Why This Matters

- **Prevents discrimination** against students with disabilities
- **Stops the school-to-prison pipeline** by addressing root causes instead of punishing disability-related behavior
- **Holds schools accountable** for implementing IEPs correctly
- **Protects students** from expulsion and law enforcement involvement
- **Gives parents power** to advocate effectively for their children

### Triggering Events

A manifestation determination hearing is required when:
- Suspension or removal exceeds 10 school days (consecutive)
- Multiple suspensions total more than 10 days and create a pattern
- Student is placed in an interim alternative educational setting
- Disciplinary action constitutes a "change in placement"

## Using the Application

### Live Application
🌐 **[Use the tool now](https://abolish-kid-jail.netlify.app)** *(Update this URL after deployment)*

### How It Works

1. **Fill out the form** with your information:
   - Your contact information
   - Your child's information
   - School and district information
   - Details about the disciplinary action
   - Any concerns about IEP implementation

2. **Generate your letter** - Click the button and the application creates a professional demand letter based on federal IDEA requirements

3. **Download the PDF** - A professionally formatted PDF is generated and downloaded to your device

4. **Send to the school** - Print or email the letter to your school principal and special education director

5. **Prepare for the hearing** - Use our resources page to understand your rights and prepare

### Privacy & Security

**Your data stays private.** This application runs entirely in your web browser. No information is sent to any server or database. Everything happens on your device, ensuring complete privacy and security.

## How This App Helps

This application guides parents through generating a professional, legally-informed demand letter that:

- Clearly states the legal requirement for a manifestation determination hearing
- References relevant special education law (IDEA)
- Documents the disciplinary action that triggered the requirement
- Demands the school schedule the hearing within required timeframes
- Protects the parent's rights and their child's educational rights

## Features

✅ **Current Features (MVP Live!)**
- Simple, accessible questionnaire interface for parents
- Automatic letter generation based on parent input
- Professional PDF export for printing and delivery to school
- Educational resources page about manifestation determination rights
- Complete privacy - all processing happens in your browser (no data sent to servers)
- Mobile-responsive design
- Keyboard accessible

🔮 **Planned Enhancements**
- Sample documentation templates for preparing for the hearing
- State-specific guidance where applicable
- Multiple language support
- Printable preparation checklists
- Additional letter templates (follow-up, appeal)

## The Bigger Picture

Every year, thousands of students with disabilities are pushed out of schools through suspensions and expulsions that don't account for their disabilities. This leads to:

- Lost educational opportunities
- Increased involvement with law enforcement
- Higher rates of juvenile justice system contact
- Long-term negative outcomes

**By helping parents demand manifestation determination hearings, we're stopping the school-to-prison pipeline at its source.**

## Get Involved

This is an open-source advocacy tool. Contributions welcome from:
- Parents with experience navigating special education advocacy
- Special education attorneys and advocates
- Web developers
- UX designers focused on accessibility
- Educators who understand IEPs and manifestation determinations

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute. See [DEVELOPMENT.md](DEVELOPMENT.md) for technical details.

## Deployment

### Production Deployment

This application is deployed on **Netlify** with automatic deployments from the `main` branch.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

### Local Development

To run locally:
1. Clone this repository
2. Open `index.html` in a web browser
3. That's it! No build process or dependencies needed.

### Deploying Your Own Instance

#### Option 1: Deploy to Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/avophile/abolish-kid-jail)

**Or manually:**

1. Fork this repository
2. Sign up for a free [Netlify account](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your forked repository
5. Configure build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (root)
6. Click "Deploy site"
7. Your site will be live at `https://YOUR-SITE-NAME.netlify.app`

**Benefits of Netlify:**
- ✅ Free SSL certificates (HTTPS)
- ✅ Automatic deployments on git push
- ✅ Deploy previews for pull requests
- ✅ Built-in form handling (for future features)
- ✅ Custom domains support
- ✅ Edge CDN for fast global delivery
- ✅ Security headers configured via `netlify.toml`

#### Option 2: Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/abolish-kid-jail/`

#### Option 3: Deploy Anywhere

This is a static site with no build process. You can host it on:
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static web hosting service

Simply upload all files to your hosting provider.

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **PDF Generation**: jsPDF (loaded via CDN)
- **Hosting**: Netlify (or GitHub Pages, or any static host)
- **Privacy**: 100% client-side - no backend, no data collection
- **Configuration**: `netlify.toml` for Netlify-specific settings

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

This software is provided for educational and advocacy purposes and does not constitute legal advice.

## Support

If you find this tool helpful:
- ⭐ Star this repository
- 🔗 Share it with other parents who need it
- 📝 Contribute improvements
- 💬 Spread awareness about manifestation determination rights

## Additional Resources

- [Wrightslaw - Special Education Law and Advocacy](https://www.wrightslaw.com/)
- [Council of Parent Attorneys and Advocates (COPAA)](https://www.copaa.org/)
- [Parent Center Hub - Find Your State's PTI](https://www.parentcenterhub.org/find-your-center/)
- [U.S. Department of Education - IDEA](https://sites.ed.gov/idea/)

---

*"No child with a disability should be criminalized for behaviors related to their disability. Every student deserves support, not suspension."*
