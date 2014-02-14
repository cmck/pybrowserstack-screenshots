pybrowserstack-screenshots
==========================

python api wrapper and client for Browserstack Screenshots API.
Starts screenshot jobs at Browserstack and downloads the screenshots when they are complete.

## Usage

1. Edit client.py and enter your Browserstack username and API token
2. Create a config file for the device/os/browser combinations you wish to screenshot. See example_config/ for examples.
3. python client.py

Screenshots get downloaded to output/

For more information see http://www.browserstack.com/screenshots/api

For a full list of browsers: http://www.browserstack.com/screenshots/browsers.json