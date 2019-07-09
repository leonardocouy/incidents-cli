#!/usr/bin/env node
const program = require("commander");

const { newIncident, deleteIncident, updateIncident } = require("./actions");

program
  .command("new-incident")
  .description("Creates a new incident after answering a few questions.")
  .action(() => {
    newIncident();
  })

program
  .command("delete-incident")
  .description("Delete an incident.")
  .action(() => deleteIncident())


program
  .command("update-incident")
  .description("Update an incident.")
  .action(() => updateIncident())

program.commands.forEach(c => c.on("--help", () => console.log()))
program.parse(process.argv)
