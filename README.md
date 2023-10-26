# PassengerXpress - Vehicle Parking and Ticketing System

PassengerXpress is a web-based system designed for efficient vehicle parking management and passenger ticketing at a station. This system provides a user-friendly interface for both station administrators and passengers, streamlining vehicle parking and ticketing processes.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Frontend](#frontend)
- [Backend](#backend)
- [File Structure](#file-structure)

## Getting Started

This section provides an overview of how to set up the PassengerXpress project on your local development environment.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) for running the backend.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management.

### Installing

   ```bash
   git clone https://github.com/Turing-Labs/passengerXpress.git
   cd passengerxpress

   bash
   cd frontend

   # If using npm
   npm install

   # If using Yarn
   yarn install

   bash
   cd ../backend

   # If using npm
   npm install

   # If using Yarn
   yarn install
```

### File Structure

 - passengerxpress/
  - frontend/
    - index.html
    - admin/
      - dashboard.html
      - ticket_generation_form.html
      - fare_adjustment_form.html
      - vehicle_status_tracking.html
      - feedback_interface.html
      - feedback_display.html
      - login.html
    - user/
      - dashboard.html
      - parking_slot_booking_form.html
      - parking_slot_ticket_management.html
      - feedback_form.html
      - display_payment.html
      - login.html
    - common/
  - backend/
    - server.js
    - routes/
      - adminRoutes.js
      - userRoutes.js
    - controllers/
      - adminController.js
      - userController.js
    - models/
      - user.js
      - vehicle.js
      - parkingSlot.js
      - vehicleStatus.js
      - parkingSlotTicket.js
      - feedback.js
      - fareRate.js
      - payment.js
    - ...
  - config/
    - database.js
  - node_modules/
  - package.json
  - .gitignore
  - README.md