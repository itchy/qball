angular.module('wvGlobal')

  .value('wvConfig', {
    requiredVersion: null,
    shellVersion: '',
    version: '',
    build: '@@version',
    releaseChannel: '@@channel',
    gitHash: '@@gitHash',
    popUps: true,
    releaseNotesUrl: 'http://releasenotes-client.getweave.com/',
    configFile: 'config.ini',
    advancedSettings: {
      skipPinSetup: false
    },
    support: {
      number: '8885795668',
      email: 'support@getweave.com'
    },
    practice: {
      name: '',
      slug: null
    },
    location: {
      name: 'Weave',
      phone: '',
      email: '',
      loaded: false
    },
    workstation: {
      slug: null,
      password: null,
      authenticated: false
    },
    user: {
      name:  null,
      username: null,
      password: null,
      authenticated: false
    },
    infScrollMark: 0.3, // whole number = pixels; float = percent (0.1 = 10%)
    times: {
      formats: {
        resultsDisplay: 'h:mm A'
      }
    },
    dates: {
      formats: {
        display: 'M/D/YYYY',
        compare: 'YYYY-MM-DD',
        verbose: 'dddd, MMMM Do'
      }
    },
    api: {
      baseUrl: 'weaveconnect.com',
      cloud: {
        protocol: 'https://',
        url: null,
        throttle: 500,
        version: 1
      },
      manager: {
        protocol: 'http://',
        rrt: 2500,  // Time in ms. Used to tell sockjs how long to wait until it falls back to a lesser protocol.
        url: null,
        port: null,
        throttle: 500,
        reconnWaitMax: 128
      },
      ga: {
        protocol: 'https://',
        url: 'ssl.google-analytics.com/collect',
        version: 1,
        trackingId: 'UA-53245457-1'
      },
      provisioning: {
        pinPrefix: '*1',
        version: 0,
        protocol: 'https://',
        port: 443,
        url: 'four',
        limit: 4,
        timeout: 90000
      }
    },
    search: {
      limit: 50,
      skip: 0,
      daysInMonth: 30.436875  // See http://stackoverflow.com/questions/5620197/no-kidding-what-is-the-average-amount-of-days-in-a-month
    },
    dialogs: {
      timeout: 4000
    },
    windows: {
      main: {
        pid: null,
        windowTitle: 'N/A'
      },
      popup: {
        width: 350,
        height: 235,
        slideSpeed: 25,
        busyMsgTimeout: 1500,
        backToSummaryTimeout: 7000,
        noNotificationsTimeout: 1500,
        retryCreateTimeout: 2000
      }
    },
    cron: {
      updates: '@@sec @@min @@hour * * 1-5' // Note: node-cron supports 'seconds'
    }
  })

;
