How do you yse the $http service to make an HTTP GET request to the /api/v1/me route?

- $http.get('/api/v1/me', function (err, data) { /* ... */ });

X $http.get('/api/v1/me').success(function (data) { /* ... */ })

- $http.get('/api/v1/me').end(function (err, data) { /* ... */ })

- $http.post('/api/v1/me').success(function (data) { /* ... */ })