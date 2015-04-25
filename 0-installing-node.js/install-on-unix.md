# Installing Node.js on Windows OS

1. sudo apt-get install nodejs
2. sudo ln -s /usr/local/bin/nodejs /usr/bin/node

# Testing if you installed Node.js correctly

1. *Test Node*

    To see if Node is installed open command line tool (terminal), and type node -v. This should print a version number, so you’ll see something like this v0.10.35.

2. *Test NPM:*

    To see if NPM is installed, type npm -v in Terminal. This should print NPM’s version number so you’ll see something like this 1.4.28

3. *Create a test file and run it:*

    A simple way to test that node.js works is to create a JavaScript file: name it hello.js, and just add the code console.log('Node is installed!');. To run the code simply open your command line program, navigate to the folder where you save the file and type node hello.js. This will start Node and run the code in the hello.js file. You should see the output Node is installed!.