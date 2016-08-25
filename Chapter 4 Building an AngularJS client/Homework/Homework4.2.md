Which of the following $http calls violates the same-origin policy for HTTP requests, assuming that your server is running on http://localhost:3000 ?

- $http.get('/test')

- $http.get('http://localhost:3000/test')

- $http.get('//localhost:3000/test')

X $http.get('http://localhost:8080/test')

- $http.get('test')