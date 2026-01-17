# 🧩 PathFinder: Survival Edition

A high-stakes, full-screen **web-based maze runner** built with vanilla JavaScript. Navigate through procedurally generated garden labyrinths, manage your oxygen/time, and outrun the stalker to reach the next portal.

**Live Demo:** [https://gamemazerun.netlify.app/](https://gamemazerun.netlify.app/)

---

## 🚀 The Ultimate Challenge: Can you break Level 10?
This game features a steep difficulty curve designed to test even the most experienced players.
* **Dynamic Scaling:** The maze dimensions increase every level, creating millions of possible layouts.
* **The "Wall":** Level 8 is the point where most players fail due to the complexity and time pressure.
* **The Developer's Record:** The current record to beat is **Level 13**. Reaching this requires perfect navigation and lightning-fast reflexes. **Can you break the Level 10 barrier and challenge the record?**

---

## 🎮 How to Play
1. **Goal:** Navigate your doll character to the **Next Level Portal** (`end.png`).
2. **Controls:**
   * **On-Screen D-Pad:** Mobile-friendly buttons for Straight, Back, Left, and Right.
   * **Keyboard:** Use **Arrow Keys** for professional-level speed.
3. **Challenges (Level 4+):**
   * **Survival Timer:** You must reach the exit before the red energy bar at the top runs out.
   * **The Stalker:** A mysterious red entity will spawn and hunt you down. If it touches you, the level resets!

---

## 🛠️ Tech Stack & Pro Features
* **HTML5 Canvas:** Powers the high-performance, full-screen game engine.
* **Recursive Backtracking Algorithm:** A professional maze generation logic that guarantees every path is solvable and unique.
* **Camera Follow System:** An immersive "Camera" that stays locked on the player while the world scrolls smoothly.
* **Responsive Design:** Optimized for both desktop and mobile web browsers.

---

## 📂 Project Structure
```bash
├── index.html      # Game UI & Canvas layers
├── style.css       # Full-screen styling & Glassmorphism UI
├── script.js       # Maze generation, AI, & Game logic
├── charector.png   # Doll sprite
├── tails.png       # Path/Floor texture
└── end.png         # Exit portal sprite