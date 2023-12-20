// The main script for the extension
// The following are examples of some basic extension functionality

//You'll likely need to import extension_settings, getContext, and loadExtensionSettings from extensions.js
import { extension_settings, getContext, loadExtensionSettings } from "../../../extensions.js";
import { eventSource, event_types } from "../../../script.js";
import { generateQuietPrompt } from "../../../script.js";

// Keep track of where your extension is located, name should match repo name
const extensionName = "st-random-events";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;
const extensionSettings = extension_settings[extensionName];
const defaultSettings = {};
var enabled = true;

var currentEvent = null;


 
// Loads the extension settings if they exist, otherwise initializes them to the defaults.
async function loadSettings() {
  //Create the settings if they don't exist
  extension_settings[extensionName] = extension_settings[extensionName] || {};
  if (Object.keys(extension_settings[extensionName]).length === 0) {
    Object.assign(extension_settings[extensionName], defaultSettings);
  }

  $("#disabled_setting").on("click",()=>{
    enabled=!enabled;
  })
}

eventSource.on(event_types.MESSAGE_RECEIVED, handleIncomingMessage);

async function handleIncomingMessage(data){
  var prompt = await generateQuietPrompt("Create a random event")
  toastr.info(
    `${prompt}`,
    "A popup appeared because you sent a message!"
  );
}


// This function is called when the extension is loaded
jQuery(async () => {
  // This is an example of loading HTML from a file
  const settingsHtml = await $.get(`${extensionFolderPath}/main.html`); 
  $("#extensions_settings").append(settingsHtml);

  loadSettings();
});