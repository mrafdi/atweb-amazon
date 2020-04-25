# atweb-amazon
AT Web for Mekari Test (using website Amazon)

How to run:
1. Clone this repo
2. npm install
3. Create .env file, fill the env with values (refer to .env.example file)
    - alternatively, you can type this in terminal -> cp .env.example .env
    - then fill the values
4. To run, use npm test

IMPORTANT: 
Please check the chromedriver version in package.json file. 
Make sure that the chromedriver version is the same as your PC's Chrome version
If not, the test may not run

NOTE:
The Sign In positive case may fail because sometimes Amazon ask for OTP (not always)