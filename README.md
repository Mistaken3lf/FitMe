# Welcome To FitMe

### Heroku Meteor Setup Instructions:

- If you have not already install the heroku toolbelt please do so before
you continue. If your using cloud9 the toolbelt is already installed.

##### Login to your heroku account
`heroku login` then enter your credentials.

##### If you dont already have an app created follow these instructions. If you already have an app skip these steps.
Step 1: `heroku create yourAppName`

##### Set the buildpack
Step 2: `heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git`

##### Create a mongoLab sandbox database
Step 3: `heroku addons:create mongolab:sandbox`

##### In your heroku dashboard click on your newly created mongoLab addon to view your MONGO_URL
Step 4: `heroku config:add MONGO_URL=YOUR-MONGOLAB-URL`

##### Give your app a domain
Step 5: `heroku config:add ROOT_URL=http://yourappname.herokuapp.com`

##### Configure the settings file for stripe, make sure you have the development settings file in the workspace.
Step 6: `heroku config:add METEOR_SETTINGS="$(cat settings-development.json)"`

##### Deploy your app
Step 7: `git push heroku master`

If you wish to deploy from a different branch than master such as devel, you would do `git push heroku devel:master`

##### If you already have an app created then you just need to set the git remote.

- To set heroku git remote: ` heroku git:remote -a yourappname `

### Using Cloud9 IDE:

#### Clone FitMe

- Click on repositories on the left hand side of your cloud9 dashboard
- Click clone on the FitMe Repo.
- Give the project a name, description and use the blank workspace template.
- Copy this command into your cloud9 terminal to instal meteor: ` curl https://install.meteor.com/ | sh `
- Run a ` meteor update ` before your first run
- To start meteor use `npm run meteor`

##### Project Settings
- Enable soft tabs and set to 2 spaces
- Enable on save, strip white space

### Using git

- View changes made: `git status` this will show you all the files you have changed
- Add all changes: `git add .` this will add all files to the commit
- Add individual files: `git add /path/to/file`
- Commit: `git commit -m "Your commit message here"`, create a commit with all files added
- Push: `git push origin branch-name` push changes to the specified branch
- Pull changes: `git pull origin branch-name`, pull changes anyone has made to a branch
