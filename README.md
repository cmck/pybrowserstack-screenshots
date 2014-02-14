pybrowserstack-screenshots
==========================

python api wrapper and client for Browserstack Screenshots API including [PhantomCSS](https://github.com/huddle/phantomCSS) support.
Starts screenshot jobs at Browserstack and downloads the screenshots when they are complete.
Tests for visual regressions using PhantomCSS.

### Usage

1. Edit client.py and enter your Browserstack username and API token
2. Create a config file for the device/os/browser combinations you wish to screenshot. See example_config/ for examples.
3. Start the browserstack job and download baseline screenshots:
```bash
python client.py --config <config_file> --phantomcss
```
4. Run client.py a second time, this will produce the screenshots you want to test
5. Test for visual regressions between the two sets: 
```bash
casperjs test comparator.js
```

### client.py params
```bash
-c, --config <config_file>
-p, --phantomcss
```

### other requirements
comparator.js requires casperjs

For more information see http://www.browserstack.com/screenshots/api

For a full list of browsers: http://www.browserstack.com/screenshots/browsers.json