# Portfolio: Pusala Kotesh

A world-class, premium, and fully responsive developer portfolio built for **Pusala Kotesh** using React (Vite), Tailwind CSS, Framer Motion, and EmailJS. Features glassmorphism components, floating tech badges, dark/light theme switching, animated metric counters, and timeline milestones.

## 🚀 Quick Start

### 1. Install Dependencies
Clone the repository and install the npm modules:
```bash
npm install
```

### 2. Run the Development Server
Launch the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Compile for Production
Create an optimized production bundle in the `dist` directory:
```bash
npm run build
```

---

## 📬 EmailJS Setup (Contact Form)

The contact form is pre-wired using `@emailjs/browser`. If environment variables are missing, it operates in a simulated **Mock Mode** (retaining full visual fidelity for recruiters). 

To connect the form to your personal email:
1. Register/Login at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service (e.g., Gmail) and note the **Service ID**.
3. Create an Email Template and note the **Template ID**.
4. Retrieve your **Public Key** from the Account tab.
5. Create a `.env` file in your root folder:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

When deployed on platforms like Vercel or Netlify, add these same environment variables in your deployment dashboard settings.

---

## 🎨 Technology Stack
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS v4.0 + PostCSS (class-based dark mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Form Mailer**: EmailJS Browser
- **State**: Context API (Theme switcher)
- **Storage**: LocalStorage (Persistent settings)
- **Mock Assets**: Stable Diffusion generated mockup frames (located in `src/assets/`)
