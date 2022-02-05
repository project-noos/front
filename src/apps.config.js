import displaySpotify from "./components/apps/spotify";
import displayVsCode from "./components/apps/vscode";
import { displayChrome } from "./components/apps/chrome";

const apps = [
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Yaru/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },

  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Yaru/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayVsCode,
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: "./themes/Yaru/apps/spotify.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySpotify, // India Top 50 Playlist 😅
  },
];

export default apps;
