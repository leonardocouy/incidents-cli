const fs = require("fs");

const { logger, askQuestions, getIncidents } = require ("./utils");

const questions = [
  {
    type: "list",
    name: "incident",
    message: "What incident do you want to delete?",
    paginated: true,
    choices: getIncidents,
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Are you sure you want to delete the incident?",
    default: false
  }
];

module.exports = async() => {
  try {
    const { incident, confirm } = await askQuestions(questions);

    if (confirm) {
      fs.unlinkSync(incident.path);
      logger.success(`${ incident.name } removed.`);
    }
  } catch (err) {
    logger.error(err);
  }
};
