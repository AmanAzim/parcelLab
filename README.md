# parcel-lab-app
This REST API application have 2 routes:
1. provides stored information about packages when requested by their tracking number (one at a time).
2. provides weather information when queried by the latitude and longitude of a GPS location. If the information is not available in the database then it is fetched from https://openweathermap.org/ and stored in the database for future. 

## Prepare the app to run
* ```docker-compose build```

## Running Application Locally (You can use Postman to make requests)
* ```docker-compose up```

The API is available at: [http://localhost:5000]

## Routes
`GET /tracking-info/:trackingNumber`  - returns stored information about the shipment (example: http://localhost:5000/tracking-info/da55b7c0-1ad6-11ec-8d02-002b67ce00fa)
`GET /weather?lat=<:latitude>&lon=<:longitude>`  - returns stored weather information (example: http://localhost:5000/weather?lat=44.34&lon=10.99)

## Some prestored tracking_numbers to test
* `da55b7c0-1ad6-11ec-8d02-002b67ce00fa`
* `da563b82-1ad6-11ec-a487-002b67ce00fa`
* `da566c2e-1ad6-11ec-8207-002b67ce00fa`
* `da569cd0-1ad6-11ec-84b9-002b67ce00fa`
* `da590a1a-1ad6-11ec-881f-002b67ce00fa`



