# Welcome To FitMe

### Heroku Setup Instructions:

- Heroku is already installed on cloud9 workspaces. Make sure you have an account on
heroku and then run ` heroku login ` on your cloud9 terminal and login with
your account credentials before continuing.

##### Create the actual app
Step 1: heroku create yourAppName

##### This is so heroku can build the meteor app
Step 2: heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git

##### You must have a credit card on file for heroku for this step to work
Step 3: heroku addons:create mongolab:sandbox

##### Click on your app name, then on the mongolab addon, your URL will be displayed there
Step 4: heroku config:add MONGO_URL=YOUR-MONGOLAB-URL

##### Give your app a domain
Step 5: heroku config:add ROOT_URL=http://yourappname.herokuapp.com

##### Configure the settings file for stripe
Step 6: heroku config:add METEOR_SETTINGS="$(cat settings-development.json)"

##### Deploy your app
Step 7: git push heroku master

##### Extras
You must do this if you delete your cloud9 workspace and re-clone, this will
set up the git remote information and allow you to deploy your heroku app!!!

- To set heroku git remote: ` heroku git:remote -a yourappname `

### Cloud9 Configuration:

#### Clone FitMe

- Click on repositories on the left hand side of your cloud9 dashboard
- Click clone on the FitMe Repo.
- Your workspace will be created
- Copy this command into your cloud9 terminal to instal meteor: ` curl https://install.meteor.com/ | sh `
- Run a ` meteor update ` before your first run
- To start meteor use `npm run meteor`

##### Project Settings
- Enable soft tabs and set to 2 spaces
- Enable on save, strip white space

### GIT How To

- View changes made: `git status` this will show you all the files you have changed
- Add all changes: `git add .` this will add all files to the commit
- Add individual files: Run `git status` and cloud9 wil highlight the files
in red. Click on them to add them individually by clicing `git add` in the
popup window. Then you can create individual commit messages for each file or
group of files.
- Commit: `git commit -m "Your commit message here"` this will create a commit
with all the files that you have added to it. Try to keep your commit messages
meaningful and go along with the files that you changed. So dont change a bunch
files and then add them all at once and create one commit. Break it up into
smaller commits so we know what has changed in that file.
- Push: `git push origin devel` this will push to the devel branch and be
viewable on gitub.
- Pull changes: `git pull origin devel` this will pull in all changes anyone has
made to the devel branch. Please try to do this before your start changing any
files to make sure you are running the latest code.
