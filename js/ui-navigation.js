// =============================================================================
// UI-NAVIGATION.JS - UI Navigation Functions
// =============================================================================
// This file contains functions for handling UI navigation,
// such as switching between operation panels/tabs.
// =============================================================================

/**
 * showPanel - Switch between operation panels (tab navigation)
 * @param {number} panelNumber - Panel number (1-4)
 * Hides all panels and shows the selected one, updates tab styling
 */
function showPanel(panelNumber) {
  let panelIds = ["panel1", "panel2", "panel3", "panel4"];

  // Remove active class from all panels
  for (let i = 0; i < panelIds.length; i++) {
    let panel = document.getElementById(panelIds[i]);
    if (panel !== null) {
      panel.className = "operation-panel";
    }
  }

  // Remove active class from all tabs
  let tabs = document.getElementsByClassName("nav-tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = "nav-tab";
  }

  // Add active class to selected panel and tab
  let index = panelNumber - 1;
  if (panelIds[index]) {
    let activePanel = document.getElementById(panelIds[index]);
    if (activePanel !== null) {
      activePanel.className = "operation-panel active";
    }
  }
  if (tabs[index]) {
    tabs[index].className = "nav-tab active";
  }
}
