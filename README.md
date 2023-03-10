
# docker ssi

Build with:
```
docker build -t vernik-image .

Example:
docker build -t test-image .
```

Run with:
```
docker run --rm --name vernik-container -p 5001:80 -v ${PWD}/www:/var/www/html vernik-image

Example:
docker run --rm --name test-container -p 5001:80 -v ${PWD}/www:/var/www/html test-image
```

```
http://localhost:5001/
```
