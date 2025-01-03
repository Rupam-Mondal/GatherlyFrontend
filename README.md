# Gatherly
- [Live link](https://gatherly-frontend-9x1n.vercel.app/home)  ( Initial loading can take some time because I deployed my code in render free tier. It take 50 sec for first request if the code base inactive for so long)



Gatherly is a full-stack project built with React for the frontend and Express for the backend. This application allows users to create and join events, manage event details, and interact with other participants in real-time using WebSockets. The backend handles user authentication, event management, and real-time communication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Backend URL](#backend-url)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Gatherly.git
    ```
2. Navigate to the frontend directory:
    ```sh
    cd GatherlyFullstack/frontend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```
5. For the backend, navigate to the backend directory:
    ```sh
    cd ../backend
    ```
6. Install backend dependencies:
    ```sh
    npm install
    ```
7. Start the backend server:
    ```sh
    npm start
    ```

---

## Usage

Once the application is up and running:

1. Navigate to the frontend URL (typically `http://localhost:5173`).
2. Log in or sign up for an account.
3. Create a new event or join an existing event.
4. Use the real-time chat feature to interact with other participants.

---

## Backend

The backend for this project can be found [here](link-to-backend-repository). It is built with Express and uses WebSockets for real-time communication.

---

## Demo

Here are some screenshots of Gatherly in action:

![Home Page](./public/Demo%20pictures/Demopic1.jpg)


![Event Creation](./public/Demo%20pictures/Demopic2.jpg)


![Real-Time Chat](./public/Demo%20pictures/Demopic3.jpg)


![Event Details](./public/Demo%20pictures/Demopic4.jpg)

---

## Features

- **Real-Time Communication**: Integrated chat feature powered by WebSockets for seamless communication.
- **Event Management**: Create, update, and join events with intuitive forms.
- **Authentication**: Secure user login and registration.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Express, WebSocket (Socket.IO)
- **Database**: MongoDB
- **Others**: Node.js, React Query

---

## Backend URL

The backend code base for this project is [here](https://github.com/Rupam-Mondal/GatherlyBackend).

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

