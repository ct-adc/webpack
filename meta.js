const path = require('path')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "projectType": {
            "type": "list",
            "message": "project type",
            "choices": [
                {
                    "name": "business: for business",
                    "value": "business",
                    "short": "business"
                },
                {
                    "name": "component: for component",
                    "value": "component",
                    "short": "component"
                }
            ]
        },
        "name": {
            "type": "string",
            "required": true,
            "message": 'project name'
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "build": {
            "type": "list",
            "message": "Vue build",
            "choices": [
                {
                    "name": "Runtime + Compiler: recommended for most users",
                    "value": "standalone",
                    "short": "standalone"
                },
                {
                    "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
                    "value": "runtime",
                    "short": "runtime"
                }
            ]
        },
        "router": {
            "type": "confirm",
            "message": "Install vue-router?"
        },
        "autoInstall": {
            type: 'confirm',
            message: 'Should we run `npm install` for you after the project has been created? (recommended)'
        }
    },
    "filters": {
        "build/webpack.umd.conf.js": "projectType === 'component'",
        "src/component/**/*": "projectType === 'component'",
        "src/js/module/**/*": "projectType === 'business'",
        "src/css/**/*": "projectType === 'business'"
    },
    complete: function(data, { chalk }) {
        const green = chalk.green
    
        sortDependencies(data, green)
    
        const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
    
        if (data.autoInstall) {
          installDependencies(cwd, 'npm', green)
            .then(() => {
              return runLintFix(cwd, data, green)
            })
            .then(() => {
              printMessage(data, green)
            })
            .catch(e => {
              console.log(chalk.red('Error:'), e)
            })
        } else {
          printMessage(data, chalk)
        }
      }
};
