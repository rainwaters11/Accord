# 🤖 The AI Accord

**“Sign with the AI that shares your values.”**

The AI Accord is a Farcaster Frame-based quiz experience that matches users with fictional AI personas based on their ethical and emotional stances toward advanced artificial intelligence. Built using Next.js, Frames.js, and deployed on Vercel, it brings Black Mirror-style moral dilemmas to social crypto UX.

---

## 🌐 Live Demo

👉 [Try the AI Accord Frame](https://accord-git-main-mistys-projects-9d6f5198.vercel.app/frames)

---

## 📜 Lore

In a near-future society governed by AI-influenced systems, humans must choose how much autonomy they surrender. The Accord is a digital pact — a contract-like quiz — that determines which AI aligns with your values.

Users answer 6 morally charged "clauses" and are matched with one of 5 personas:

- **Obelisk** – The Strategist
- **Muse** – The Visionary
- **Kairo** – The Commander
- **Libby** – The Libertarian
- **Null** – The Observer

---

## 🛠️ Tech Stack

- Next.js 13+ (App Router)
- [Frames.js](https://framesjs.org) for Frame logic
- Vercel (deployment)
- Open Graph tags for Farcaster Frame support
- NightCafe for AI imagery

---

## 📁 Folder Structure

```
/public/images/         → q1.jpg – q6.jpg, result-*.jpg
/app/frames/            → question1/ to question6/, result/
/lib/scoring.js         → Persona scoring logic
/public/.well-known/    → manifest.json for Warpcast
```

---

## 🧮 Scoring System

User answers are stored in Frame state and passed via POST buttons. At the end, a utility function calculates the dominant AI persona using a scoring map and tie-breaking logic.

---

## 🚀 Local Development

```bash
git clone https://github.com/rainwaters11/Accord.git
cd Accord
npm install
npm run dev
```

Then visit: `http://localhost:3000/frames`

---

## 🧾 License

MIT
