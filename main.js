const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

if (!app.requestSingleInstanceLock()) { app.quit(); }

let win;
function create() {
  win = new BrowserWindow({
    width: 1100, height: 780, minWidth: 640, minHeight: 480,
    title: "Terminal Tetris",
    backgroundColor: "#000000",
    icon: path.join(__dirname, "icons", "icon-512.png"),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, autoplayPolicy: "no-user-gesture-required" }
  });
  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.setVisualZoomLevelLimits(1, 1);
  // F11 or Alt+Enter toggles fullscreen. Esc stays free for the game's pause key.
  win.webContents.on("before-input-event", (e, i) => {
    if (i.type === "keyDown" && (i.key === "F11" || (i.alt && i.key === "Enter"))) {
      win.setFullScreen(!win.isFullScreen()); e.preventDefault();
    }
  });
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: "deny" }; });
  win.webContents.on("will-navigate", e => e.preventDefault());
  win.on("page-title-updated", e => e.preventDefault()); // keep a clean window title
  win.on("closed", () => { win = null; });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(process.platform === "darwin"
    ? Menu.buildFromTemplate([{ role: "appMenu" }, { role: "windowMenu" }])
    : null);
  create();
  app.on("activate", () => { if (!BrowserWindow.getAllWindows().length) create(); });
});
app.on("second-instance", () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
