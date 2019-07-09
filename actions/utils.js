const inquirer = require("inquirer");
const fs = require("fs");
const yaml = require("js-yaml");
const glob = require("glob");
const path = require("path");
const chalk = require("chalk");
const consola = require("consola");
const parameterize = require("parameterize");

const { INCIDENTS_DIR } = require("../constants");

const askQuestions = (questions) => inquirer.prompt(questions);
const getIncidentData = (incidentPath) => yaml.safeLoad(fs.readFileSync(incidentPath));
const getIncidents = async() => {
  const files = await glob.sync(`${ INCIDENTS_DIR }/*.yml`);
  return files.map((file) => {
    const fileName = path.basename(file);
    const data = getIncidentData(file);

    return {
      value: {
        name: fileName,
        path: file,
      },
      name: `${fileName} > ${chalk.yellow(data.title)}`,
    };
  });
};
const generateIncident = (data) => {
  const { title, severity, service, description } = data;
  const resolved = data.resolved || false;
  const date = data.date || new Date();
  const dateIsoString = date.toISOString().slice(0,10);
  const filename = parameterize(`${ dateIsoString }-${ title }`);
  const filePath = path.resolve(INCIDENTS_DIR, `${ filename }.yml`);
  const incidentData = { title, date, severity, service, resolved, description };

  fs.writeFileSync(filePath, yaml.safeDump(incidentData));

  return { ...incidentData, filePath };
};

module.exports = {
  askQuestions,
  generateIncident,
  getIncidents,
  getIncidentData,
  logger: consola,
}
