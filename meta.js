module.exports = {
    "helpers": {
        "if_or": function(v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
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
        }
    },
    "lint": true,
    "lintConfig": "none",
    "filters": {
        ".eslintrc.js": true,
        ".eslintignore": true,
        "config/test.env.js": false,
        "test/unit/**/*": false,
        "build/webpack.test.conf.js": false,
        "test/e2e/**/*": false,
        "src/router/**/*": false
    },
    complete: function(data){
        data.lint = true;
        data.lintConfig = 'none';
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
