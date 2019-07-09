# Incidents CLI

CLI tool to manage incidents from Status page.

**Features:**
- :heavy_plus_sign: Create new incident;
- :heavy_check_mark: Update an incident;
- :heavy_multiplication_x: Remove an incident.

Any idea? Feel free to contribute ;)

# How to use?

First, **make sure you have node installed.**

**You have three ways to run the CLI**, We will demonstrate these ways below:

**With npx**
In this way, you don't need install the package as global.

```shell
$ npx incidents COMMAND
```

**With npm**
In this way, you need install the package as global to run directly from terminal.

```shell
$ npm install -g incidents
$ incidents COMMAND
```

**Run from source**
In this way, you need to run `index.js` using node.

```shell
$ node index.js COMMAND
## or
$ node . COMMAND
```

## Usage

```sh-session
$ incidents --help
Usage: incidents [options] [command]

Options:
  -h, --help                 output usage information

Commands:
  new-incident     Creates a new incident after answering a few questions.
  delete-incident  Delete an incident.
  update-incident  Update an incident.
```

## Commands

### new-incident

Generates a new incident yml file based on the answers given.

**Usage**
```
$ incidents new-incident
```

**Usage Example**
```sh-session
$ incidents new-incident
? What is the cause of the incident?
~/workspace/incidents/cli (master)
$ incidents new-incident
? What is the cause of the incident? N+1 problem
? What is the severity of the incident? degraded-performance
? What is the affected system? api
? Add a concise description of the incident. Something happened, we are investig
ating.
? Open the incident for editing? No
✔ Incident N+1 problem generated at /Users/leonardoflores/workspace/incidents/client/incidents/2019-06-09-n1-problem.yml
```

### update-incident

**Usage**
```
$ incidents update-incident
```

**Usage Example**
```sh-session
$ incidents update-incident
? What incident do you want to update? 2019-06-09-n1-problem.yml > N+1 problem
? The incident has been resolved? Yes
? What is the severity of the incident? degraded-performance
? What are the affected systems? api
? Are you sure you want to update the incident? Yes
✔ Incident N+1 problem updated at /Users/leonardoflores/workspace/incidents/client/incidents/2019-06-09-n1-problem.yml
```

### delete-incident

**Usage**
```
$ incidents delete-incident
```

**Usage Example**
```sh-session
$ incidents delete-incident
? What incident do you want to delete? 2019-06-09-n1-problem.yml > N+1 problem
? Are you sure you want to delete the incident? Yes
✔ 2019-06-09-n1-problem.yml removed.
```

# Contribute

Feel free to contribute to the Incidents CLI! Clone the repository, create a new branch from master and code! When you finish, open a Pull Request explaining the changes. :sunglasses:
