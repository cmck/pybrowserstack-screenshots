pybrowserstack-screenshots
==========================

python api wrapper and client for Browserstack Screenshots API including [PhantomCSS](https://github.com/huddle/phantomCSS) support.
Starts screenshot jobs at Browserstack and downloads the screenshots when they are complete.
Tests for visual regressions using PhantomCSS.

### Usage

1. Create a config file for the device/os/browser combinations you wish to screenshot. See example_config/ for examples.
2. Start the browserstack job and download baseline screenshots:
```bash
python client.py --config <config_file> --auth <username:token>
```

Note that "auth" attribute (browserstack username and token) is optional. When not specified, values will be taken from "main_config.properties" where all configuration variables are stored.

### PhantomCSS (experimental)
1. Download baseline screenshots:
```bash
python client.py --config <config_file> --phantomcss
```
2. Run client.py a second time to generate new screenshots
3. Test for visual regressions between the two sets using PhantomCSS: 
```bash
casperjs test comparator.js
```

### client.py params
```bash
-a, --auth <username:token>
-c, --config <config_file>
-p, --phantomcss
```

### other requirements
comparator.js requires casperjs: http://casperjs.readthedocs.org/en/latest/
If not initialised, the submodule PhantomCSS can be initialised with 
```bash
git submodule update --init --recursive
```

For more information see http://www.browserstack.com/screenshots/api

For a full list of browsers: http://www.browserstack.com/screenshots/browsers.json
