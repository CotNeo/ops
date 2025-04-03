#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const shell = require('shelljs');

program
  .version('1.0.0')
  .description('DevOps Starter Kit - Complete DevOps setup made easy');

program
  .command('init <projectName>')
  .description('Initialize a new project')
  .action(async (projectName) => {
    const spinner = ora('Setting up your project...').start();

    try {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'template',
          message: 'Select project type:',
          choices: [
            'Basic Setup',
            'Frontend (React)',
            'Frontend (Vue)',
            'Backend (Node.js)',
            'Backend (Python)',
            'Full Stack (MERN)',
            'Full Stack (PERN)'
          ]
        },
        {
          type: 'checkbox',
          name: 'features',
          message: 'Select features to include:',
          choices: [
            'Docker',
            'GitHub Actions',
            'Nginx',
            'Database',
            'Redis',
            'Monitoring',
            'AI Integration'
          ]
        }
      ]);

      // Create project directory
      shell.mkdir('-p', projectName);
      shell.cd(projectName);

      // Clone base template
      shell.exec('git clone https://github.com/yourusername/devops-starter-kit-template .');
      shell.rm('-rf', '.git');
      shell.exec('git init');

      spinner.succeed(chalk.green('Project setup completed successfully!'));
      console.log(chalk.blue('\nNext steps:'));
      console.log(chalk.white('1. cd ' + projectName));
      console.log(chalk.white('2. npm install'));
      console.log(chalk.white('3. npm start'));
    } catch (error) {
      spinner.fail(chalk.red('Error setting up project'));
      console.error(error);
    }
  });

program
  .command('deploy')
  .description('Deploy your application')
  .option('-e, --environment <env>', 'Deployment environment', 'production')
  .action((options) => {
    console.log(chalk.blue(`Deploying to ${options.environment}...`));
  });

program
  .command('monitor')
  .description('Setup monitoring')
  .action(() => {
    console.log(chalk.blue('Setting up monitoring...'));
  });

program.parse(process.argv); 