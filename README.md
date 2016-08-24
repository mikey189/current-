# current-

Guidelines

- The App SHOULD be didvided in as little componants as possible, no huge controller files, no huge tremplate files, no endless js files
- All API calls should be centralized under services and controllers should handle no to little data. They should be kept as simple as possible so no $http request or anything of the type in this. 
- All services and other logic should be help independantly from the controller, the controller being a middle man that calls the services on demand.
- 

here is the folder structure 

 |-CSS
 |---Font
 |-IMG
 |---icons
 |-JS
 |---customServices
 |---dist
 |-JSON
 |-app
 |---agentManagement
 |-----templates
 |---cases
 |-----templates
 |---channelManagement
 |-----templates
 |---clusterManagement
 |-----templates
 |---common
 |---dashboard
 |-----templates
 |-------bottomLegend
 |-------channelList
 |-------fileWaiting
 |-------outputByChannel
 |-------outputTable
 |-------resecTable
 |-------timeline
 |-------toolbarTop
 |---policy
 |-----templates
 |-------addException
 |-------customTable
 |-------exceptionRow
 |-------json
 |-------policyDashboardTab
 |-------policyDefinition
 |---------detection
 |---------fileType
 |---------settings
 |-----------mailSubject
 |-------policyGraphToolbar
 |-------policySideNav
 |-------topToolbar
 |-------who
 |---reports
 |-----templates
 |---settings
 |-----templates
 |-bower_components
 |---angular
 |---angular-animate
 |---angular-aria
 |---angular-material
 |-----modules
 |---angular-messages
 |---angular-mocks
 |---angular-route
 |---angular-translate
 |---angular-translate-handler-log
 |---angular-translate-loader-static-files
 |-icons
 |-login
 |-translations

