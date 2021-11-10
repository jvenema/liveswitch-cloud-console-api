const SwaggerClient = require('swagger-client');

function liveswitchApi(apiKey){
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.liveswitch.io/swagger/1.0/swagger.json';
    
    this.getApplications = async function(){
        var me = this
        var promise = new Promise(function(resolve, reject) {
            new SwaggerClient(me.apiUrl, {
                requestInterceptor: (req) => {
                    req.headers['x-api-key'] = me.apiKey;
                    return req;
                },
            })
            .then(
                // the swagger client loaded - get the applications list
                client => client.apis.ApplicationConfigs.get_ApplicationConfigs(),
                reason => reject('failed to load the spec: ' + reason)
            )
            .then(
                // success with the app list
                applicationsResult => resolve(applicationsResult.body.value),
                reason => reject('failed on api call: ' + reason)
            );
        });
        return promise;
    }
}
module.exports = { liveswitchApi: liveswitchApi  }