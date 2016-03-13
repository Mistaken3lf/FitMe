# Welcome To FitMe

### Heroku Setup Instructions:

##### Create the actual app
Step 1: heroku create yourAppName

##### This is so heroku can build the meteor app
Step 2: heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git

##### You must have a credit card on file for heroku for this step to work
Step 3: heroku addons:create mongolab:sandbox

##### Click on your app name, then on the mongolab addon, your URL will be displayed there
Step 4: heroku config:add MONGO_URL=YOUR-MONGOLAB-URL

##### Give your app a domain
Step 5: heroku config:add ROOT_URL=yourappname.herokuapp.com

##### Configure the settings file for stripe
Step 6: heroku config:add METEOR_SETTINGS="$(cat settings-development.json)"

##### Deploy your app
Step 7: git push heroku master

##### Extras
You must do this if you delete your cloud9 workspace and re-clone, this will
set up the git remote information and allow you to deploy your heroku app!!!

- To set heroku git remote: heroku git:remote -a yourappname

### Cloud9 Configuration:

#### Clone FitMe

- Click on repositories on the left hand side of your cloud9 dashboard
- Click clone on the FitMe Repo.
- Your workspace will be created
- Copy this command into your cloud9 terminal to instal meteor: ` curl https://install.meteor.com/ | sh `
- Run a ` meteor update ` before your first run
- To start meteor use ` meteor --port $IP:$PORT --settings settings-development.json `

##### Project Settings
- Enable soft tabs and set to 2 spaces
- Enable on save, strip white space
