// utils/googleSheets.js
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

// Load credentials from JSON file
const credentials = require(path.join(__dirname, "..", "google-service-account.json"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function getSheetsClient() {
  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}

module.exports = getSheetsClient;
