# 🧩 PathFinder: Grand Labyrinth

A sleek, full-screen **web-based maze runner** built with vanilla JavaScript. Navigate through procedurally generated garden hedges, manage your time, and outsmart the stalker to reach the ultimate goal.

> **Note:** This is a **simple web game** designed to demonstrate procedural generation and 2D collision physics.

---

## 🚀 The Challenge: Can you break Level 10?
The game features a dynamic scaling system that makes the maze significantly harder as you progress.
* **The Scale:** The maze grows in dimensions every two levels.
* **The "Wall":** Most players find Level 8 to be the maximum limit of their skill.
* **The Final Frontier:** Level 10 is designed to be a massive, complex labyrinth. It requires perfect timing and rapid pathfinding. **Can you break the Level 10 barrier?**

---

## 🎮 How to Play
1. **Objective:** Navigate your Doll from the starting point to the **Exit Portal** (`end.png`).
2. **Controls:** * **On-Screen D-Pad:** Use the Up, Down, Left, and Right buttons for mobile-friendly play.
   * **Keyboard:** Use the **Arrow Keys** for professional-speed navigation.
3. **Early Levels (1-3):** Relaxed exploration to learn the movement.
4. **Hard Levels (4-10):**
   * **The Timer:** You must finish before the red progress bar reaches zero.
   * **The Stalker:** A red ghost spawns at the exit and hunts you down. If it touches you, the level resets!

---

## 🛠️ Tech Stack & Pro Features
* **HTML5 Canvas:** For high-performance, full-screen rendering.
* **Recursive Backtracking Algorithm:** A professional-grade maze generator that ensures every maze is 100% solvable with no "islands."
* **Camera Follow System:** The camera stays locked on the doll while the maze moves behind it, creating an immersive experience.
* **Dynamic AI:** The stalker uses basic path-following logic to track the player's movements.
* **Responsive CSS:** Nature-inspired gradients and glassmorphism UI for a modern look.

---

## 📂 Project Structure
```bash
├── index.html      # Game structure and UI overlays
├── style.css       # Full-screen layout and button styling
├── script.js       # Game engine and maze generation logic
├── charector.png   # Your Doll sprite
├── tails.png       # The path tile image
└── end.png         # The level exit portal image