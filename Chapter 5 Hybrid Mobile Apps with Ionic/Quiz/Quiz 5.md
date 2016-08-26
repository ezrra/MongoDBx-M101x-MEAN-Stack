Which of the following would not add a new a state to the dash tab?

A
```
$stateProvider.state('tab.dash-detail', {
  	url: '/dash/detail',
  	views: {
    	'tab-dash': {
      		templateUrl: 'templates/tab-dash-detail.html'
    	}
  	}
});
```

X B
```
$stateProvider.state('tab.dash-detail', {
  	url: '/dash/detail',
  	views: {
    	'tab-chats': {
      		templateUrl: 'templates/tab-dash-detail.html'
    	}
  	}
});
```

C
```
$stateProvider.state('tab.chat-detail', {
  	url: '/dash/detail',
  	views: {
    	'tab-dash': {
      		templateUrl: 'templates/tab-dash-detail.html'
    	}
  	}
});
```

D
```
$stateProvider.state('tab.dash-detail', {
  	url: '/chat/detail',
  	views: {
    	'tab-dash': {
      		templateUrl: 'templates/tab-dash-detail.html'
    	}
  	}
});
```