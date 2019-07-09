const {
  logger,
  askQuestions,
  getIncidents,
  getIncidentData,
  generateIncident
} = require ("./utils");
const { SERVICES, STATUSES } = require("../constants");

const questions = [
  {
    type: "list",
    name: "incident",
    message: "What incident do you want to update?",
    paginated: true,
    choices: getIncidents,
  },
  {
    type: "confirm",
    name: "resolved",
    message: "The incident has been resolved?",
    async default({ incident }) {
      const { resolved } = getIncidentData(incident.path);
      return Boolean(resolved);
    },
  },
  {
    type: "list",
    name: "severity",
    message: "What is the severity of the incident?",
    choices: STATUSES,
    async default({ incident }) {
      const { severity } = getIncidentData(incident.path);
      return severity;
    },
  },
  {
    type: "list",
    name: "service",
    message: "What are the affected systems?",
    choices: SERVICES,
    async default({ incident }) {
      const { service } = getIncidentData(incident.path);
      return service;
    },
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Are you sure you want to update the incident?",
    default: false
  }
];

module.exports = async() => {
  try {
    const { incident, ...newIncidentData } = await askQuestions(questions);
    const currentData = getIncidentData(incident.path);
    const updatedData = { ...currentData, ...newIncidentData };

    const { title, filePath } = generateIncident(updatedData);

    logger.success(`Incident ${ title } updated at ${ filePath }`);
  } catch(err) {
    logger.error(err);
  }
};
