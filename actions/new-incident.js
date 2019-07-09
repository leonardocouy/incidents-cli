const opener = require("opener");

const { logger, askQuestions, generateIncident } = require("./utils");
const { SERVICES, STATUSES } = require("../constants");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the cause of the incident?",
    validate: value => {
      if (value.length > 0) {
        return true;
      }

      return "You must have a cause title!";
    }
  },
  {
    type: "list",
    name: "severity",
    message: "What is the severity of the incident?",
    choices: STATUSES,
  },
  {
    type: "list",
    name: "service",
    message: "What is the affected system?",
    choices: SERVICES,
  },
  {
    type: "input",
    name: "description",
    message: "Add a concise description of the incident."
  },
  {
    type: "confirm",
    name: "open",
    message: "Open the incident for editing?",
    default: false
  }
];

module.exports = async() => {
  try {
    const answers = await askQuestions(questions);
    const { title, filePath } = generateIncident(answers);

    logger.success(`Incident ${ title } generated at ${ filePath }`);

    if (answers.open) opener(filePath);
  } catch(err) {
    logger.error(err);
  }
};
