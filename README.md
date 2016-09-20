# current-
Here is the current file structure (extracted via terminal) 

note that this file structure although recursive does not loop through all folders as MACOS only allows a certain level of recursiveness 

-app
  |  |-agentManagement
  |  |  |-templates
  |  |-cases
  |  |-channelManagement
  |  |  |-directives
  |  |  |-templates
  |  |  |  |-api
  |  |  |  |-directoryWatcher
  |  |  |  |-endpoint
  |  |  |  |  |-infoTopBar
  |  |  |  |  |-innerNav
  |  |  |  |  |-innerView
  |  |  |  |  |  |-dashboard
  |  |  |  |  |  |  |-templates
  |  |  |  |  |  |  |  |-casesFilter
  |  |  |  |  |  |  |  |-dataSwitcher
  |  |  |  |  |  |  |  |-topFiles
  |  |  |  |  |  |  |  |-topUsers
  |  |  |  |  |  |-sources
  |  |  |  |  |  |  |-templates
  |  |  |  |  |  |  |  |-channelType
  |  |  |  |  |  |  |  |-descriptionBlock
  |  |  |  |  |  |  |  |-settingsBlock
  |  |  |  |  |  |-syslog
  |  |  |  |  |  |-targets
  |  |  |  |  |-topbar
  |  |  |  |-newChannel
  |  |  |  |  |-common
  |  |  |  |  |-templates
  |  |  |  |  |  |-step1
  |  |  |  |  |  |  |-channelName
  |  |  |  |  |  |  |-channelType
  |  |  |  |  |  |  |-description
  |  |  |  |  |  |  |-topBar
  |  |  |  |  |  |-step2
  |  |  |  |  |  |  |-mixed
  |  |  |  |  |  |  |-separated
  |  |  |  |  |  |  |  |-inputs
  |  |  |  |  |  |  |  |-outputs
  |  |  |  |  |  |  |  |-settings
  |  |  |  |  |  |  |  |  |-templates
  |  |  |  |-sidebar
  |  |-clusterManagement
  |  |  |-templates
  |  |-common
  |  |-dashboard
  |  |  |-templates
  |  |  |  |-inputsByChannel
  |  |  |  |-outputByChannel
  |  |  |  |-resecTable
  |  |  |  |-toolbarTop
  |  |-policy
  |  |  |-templates
  |  |  |  |-customTable
  |  |  |  |-exceptionRow
  |  |  |  |-policyDashboardTab
  |  |  |  |-policyDefinition
  |  |  |  |  |-switcher
  |  |  |  |  |-templates
  |  |  |  |  |  |-detection
  |  |  |  |  |  |-fileType
  |  |  |  |  |  |  |-collapseTable
  |  |  |  |  |  |  |  |-templates
  |  |  |  |  |  |-settings
  |  |  |  |  |  |  |-mailSubject
  |  |  |  |-policyGraphToolbar
  |  |  |  |-policySideNav
  |  |  |  |-topToolbar
  |  |  |  |-who
  |  |  |  |  |-directives
  |  |  |  |  |  |-channelTopBar
  |  |  |  |  |  |-computerList
  |  |  |  |  |  |-groups
  |  |  |  |  |  |-userList
  |  |-reports
  |  |  |-templates
  |  |-settings
  |  |  |-templates
  |-bower_components
  |  |-angular
  |  |-angular-animate
  |  |-angular-aria
  |  |-angular-material
  |  |  |-modules
  |  |  |  |-closure
  |  |  |  |  |-autocomplete
  |  |  |  |  |-backdrop
  |  |  |  |  |-bottomSheet
  |  |  |  |  |-button
  |  |  |  |  |-card
  |  |  |  |  |-checkbox
  |  |  |  |  |-chips
  |  |  |  |  |-colors
  |  |  |  |  |-content
  |  |  |  |  |-core
  |  |  |  |  |-datepicker
  |  |  |  |  |-dialog
  |  |  |  |  |-divider
  |  |  |  |  |-fabActions
  |  |  |  |  |-fabSpeedDial
  |  |  |  |  |-fabToolbar
  |  |  |  |  |-fabTrigger
  |  |  |  |  |-gridList
  |  |  |  |  |-icon
  |  |  |  |  |-input
  |  |  |  |  |-list
  |  |  |  |  |-menu
  |  |  |  |  |-menuBar
  |  |  |  |  |-navBar
  |  |  |  |  |-panel
  |  |  |  |  |-progressCircular
  |  |  |  |  |-progressLinear
  |  |  |  |  |-radioButton
  |  |  |  |  |-select
  |  |  |  |  |-showHide
  |  |  |  |  |-sidenav
  |  |  |  |  |-slider
  |  |  |  |  |-sticky
  |  |  |  |  |-subheader
  |  |  |  |  |-swipe
  |  |  |  |  |-switch
  |  |  |  |  |-tabs
  |  |  |  |  |-textField
  |  |  |  |  |-toast
  |  |  |  |  |-toolbar
  |  |  |  |  |-tooltip
  |  |  |  |  |-virtualRepeat
  |  |  |  |  |-whiteframe
  |  |  |  |-js
  |  |  |  |  |-autocomplete
  |  |  |  |  |-backdrop
  |  |  |  |  |-bottomSheet
  |  |  |  |  |-button
  |  |  |  |  |-card
  |  |  |  |  |-checkbox
  |  |  |  |  |-chips
  |  |  |  |  |-colors
  |  |  |  |  |-content
  |  |  |  |  |-core
  |  |  |  |  |-datepicker
  |  |  |  |  |-dialog
  |  |  |  |  |-divider
  |  |  |  |  |-fabActions
  |  |  |  |  |-fabSpeedDial
  |  |  |  |  |-fabToolbar
  |  |  |  |  |-fabTrigger
  |  |  |  |  |-gridList
  |  |  |  |  |-icon
  |  |  |  |  |-input
  |  |  |  |  |-list
  |  |  |  |  |-menu
  |  |  |  |  |-menuBar
  |  |  |  |  |-navBar
  |  |  |  |  |-panel
  |  |  |  |  |-progressCircular
  |  |  |  |  |-progressLinear
  |  |  |  |  |-radioButton
  |  |  |  |  |-select
  |  |  |  |  |-showHide
  |  |  |  |  |-sidenav
  |  |  |  |  |-slider
  |  |  |  |  |-sticky
  |  |  |  |  |-subheader
  |  |  |  |  |-swipe
  |  |  |  |  |-switch
  |  |  |  |  |-tabs
  |  |  |  |  |-textField
  |  |  |  |  |-toast
  |  |  |  |  |-toolbar
  |  |  |  |  |-tooltip
  |  |  |  |  |-virtualRepeat
  |  |  |  |  |-whiteframe
  |  |  |  |-layouts
  |  |  |  |-scss
  |  |-angular-material-data-table
  |  |  |-dist
  |  |-angular-material-expansion-panel
  |  |  |-dist
  |  |-angular-messages
  |  |-angular-mocks
  |  |-angular-route
  |  |-angular-translate
  |  |-angular-translate-handler-log
  |  |-angular-translate-loader-static-files
  |  |-angular-ui-router
  |  |  |-release
  |  |  |-src
  |  |-angular-xeditable
  |  |  |-dist
  |  |  |  |-css
  |  |  |  |-js
  |-CSS
  |  |-Font
  |-data
  |-icons
  |-IMG
  |  |-icons
  |-JS
  |  |-config
  |  |-customServices
  |  |-libraries
  |  |  |-expansionPannel
  |-JSON
  |-login
  |  |-services
  |-translations
  
  
voila
