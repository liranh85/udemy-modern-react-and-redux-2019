# Streamy
A CRUD application with video streaming and authentication using Google OAuth.

## Setup: client
```
cd client
yarn
yarn start
```

## Setup: api
The API server is going to be powered simply by `json-server`
```
cd api
yarn
yarn start
```

## Setup: RTMP
RTMP (Real-Time Messaging Protocol) will be used to both receive and serve video streams. This server will be created by `node-media-server`
```
cd rtmp
yarn
yarn start
```

## Creating a video stream
- Download OBS (Open Broadcaster Software) from https://obsproject.com
- On the bottom left, under Scenes, press the "+" button, and add a new scene
- To the right, under Sources, press the "+" button and choose Capture Display Capture, then add it
- Click the same "+" button again to add an Audio Input Capture
- Go to Preferences -> Stream, then:
  - Set Stream Type to Custom Streaming Server
  - Set URL to rtmp://localhost/live
  - Set Stream key to the id you'd like to broadcast on, e.g. 1. This will then be accessible in the client app in the path '/streams/1'
