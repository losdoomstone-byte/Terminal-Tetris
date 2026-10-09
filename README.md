# Terminal Tetris (desktop game)

A W.O.P.R. green-phosphor Tetris. This folder is a ready-to-build desktop app
(Windows, macOS, Linux) with the game icon built in.

## Option A: get the installers with no setup (GitHub does the building)
1. Make a free account at github.com and create a new empty repository.
2. Upload everything in this folder, including the hidden `.github` folder.
3. Open the repo's **Actions** tab, pick **Build desktop game**, click **Run workflow**.
4. In a few minutes, open the finished run and download:
   - `terminal-tetris-windows-latest`: `Terminal Tetris Setup.exe` (installer) and a portable `.exe`
   - `terminal-tetris-macos-latest`: `.dmg` (Intel + Apple Silicon)
   - `terminal-tetris-ubuntu-latest`: `.AppImage`

   Every build file carries the game icon (`build/icon.ico`, `build/icon.icns`, `build/icon.png`).

## Option B: build on your own computer
1. Install Node.js (nodejs.org, the LTS version).
2. In this folder run:
   ```
   npm install
   npm start        # play it right now in a window
   npm run dist     # build the installer for your current system into /dist
   ```

## Option C: installable web app (no download of an installer)
Host this folder on any HTTPS static site (Netlify Drop, GitHub Pages). Then in
Chrome or Edge, click the install icon in the address bar. It installs as an app
with the game icon, works offline, and opens in its own window.

## Notes
- F11 or Alt+Enter toggles fullscreen in the desktop app. Esc is the game's pause key.
- Scores, sound and mode settings are saved on the player's computer.
- Mac: the app is unsigned. On first launch, right-click the app and choose Open.
  Windows may show a SmartScreen warning for the same reason; choose "More info" then "Run anyway".
