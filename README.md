# Tracking App Backend (Dockerized)

This is the Dockerized backend application for the Tracking App, which allows customers to manage tracking plans and events by Burhan Makda for RudderStack.

## Prerequisites

- Docker

## Getting Started

Follow these steps to set up and run the Dockerized backend.

### 1. Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/bmakda/tracking-app-backend-docker.git
cd tracking-app-backend-docker
```


### 2. Configuration
Create a .env file in the root directory based on the .env.example file:
```sh
cp .env.example .env
```
Edit the .env file and provide the necessary configuration values, such as the MongoDB URI and port.

### 3. Build the Docker Image
Build the Docker image for the backend:
```sh
docker build -t tracking-app-backend-docker .
```

### 4. Run the Docker Container
Run the Docker container:
```sh
docker run -p 3000:3000 -d tracking-app-backend-docker
```

The backend will be accessible at http://localhost:3050.

### 5. API Endpoints

POST /tracking-plans --> Create a new tracking plan along with associated events.

GET /tracking-plans --> Retrieve a list of all tracking plans.

POST /events --> Create a new event.
