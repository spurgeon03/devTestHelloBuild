# Run Project
To run the project first run the next command on front/ folder

```
cd front/ && npm install
```

Then replace the file .env.example to .env in back/ and front/ and replace the below values:

## Front
The value for REACT_APP_GITHUB_TOKEN can't be commit by github policy, this value will be sent in the form for the Dev Test

```
REACT_APP_GITHUB_URL=https://api.github.com/graphql
REACT_APP_GITHUB_TOKEN=
REACT_APP_API_URL=http://localhost:3001/api/
```

## Back

```
COOKIE_NAME=hellobuild-session
COOKIE_SECRET=3s5Kl87HV3q
AUTH_SECRET=hellobuild-secret-key
DB_HOST=192.167.58.4
DB_PORT=3306
DB_DATABASE=dbhello
DB_USER=root
DB_PASSWORD=secret
```

After this changes execute the next command in root folder:

```
docker-compose up -d
```

next init the front with the next command in root folder:

```
cd front/ && npm run start
```

# Server Running
The front will run in the 3000 port and the back will run in 3001 port