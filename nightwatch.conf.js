module.exports = {
    "src_folders": ["tests"],
    "page_objects_path": "./pages/",
    "output_folder": "test-reports",
    "webdriver": {
      "start_process": true,
      "server_path": "node_modules/.bin/chromedriver",
      "port": 9515
    },
    "test_settings": {
      "default": {
        "silent": true,
        "skip_testcases_on_fail": false,
        "screenshots": {
          "enabled": true,
          "path": "./screenshots",
          "on_failure": true,
          "on_error": true
        },
        "request_timeout_options": {
          "timeout": 10000,
          "retry_attempts": 2
        },
        "globals": {
          "waitForConditionTimeout": 10000 // sometimes internet is slow so wait.
        },
        "desiredCapabilities": {
          "javascriptEnabled": true,
          "acceptSslCerts": true,
          "browserName": "chrome",
          "chromeOptions": {
            "args": [
              "--no-sandbox",
              //"--headless",  // uncomment to run in headless mode 
              "--disable-gpu"
            ],
          },
        },
      }
    }
  }
  