const path = require("path");

const SERVICES = [ "api", "social", "others" ];
const STATUSES =  [
  "under-maintenance",
  "degraded-performance",
  "partial-outage",
  "major-outage"
];
const INCIDENTS_DIR = path.resolve("../client/incidents/");

module.exports = { SERVICES, STATUSES, INCIDENTS_DIR };
