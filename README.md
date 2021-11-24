# LiveSwitch Cloud Console API

This project is a simple nodejs wrapper around the swagger API, to make it a little bit cleaner for use in application code.

Install it:

```js
npm install @jvenema/liveswitch-cloud-console-api
```

Use it:

```js
const liveswitchApi = require('@jvenema/liveswitch-cloud-console-api');

(async () => {
    const api = new liveswitchApi.liveswitchApi('api key goes here')
    const applications = await api.getApplications()
})();

```


I personally use it with my login project to get the user to log in, get an API key dynamically, and then grab the applications list:

```js
const liveswitchApi = require('@jvenema/liveswitch-cloud-console-api');
const login = require('@jvenema/liveswitch-cloud-console-login');

(async () => {
    const loginResult = await login()
    const api = new liveswitchApi.liveswitchApi(loginResult.apiKey)
    const applications = await api.getApplications()
})();
```
