
# Notes Keeping Website with Firebase Authentication and Firestore

## Overview
This project is a simple web-based notes application that allows users to log in using Firebase Authentication, create, store, and retrieve notes using Firestore. The app is built with HTML, CSS, JavaScript, Bootstrap, and integrates Firebase services for authentication and data storage.

## Features
- User authentication via Google Login
- Secure cloud storage for notes with Firestore Database
- Real-time database interaction for storing and retrieving notes
- Bootstrap-based UI for a clean and responsive design
- User-specific notes to ensure privacy

## Technologies Used
- HTML, CSS, JavaScript
- Bootstrap
- Firebase Authentication
- Firestore Database

## How It Works
1. Users log in using Email/Password Authentication.
2. They can write and save notes using a simple text area.
3. Notes are stored in Firestore and are linked to the authenticated user.
4. Users can log out, and their session is managed securely.
5. The UI is built using Bootstrap, ensuring a responsive and mobile-friendly experience.

## Project Setup

### Initialize Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a web app and copy the Firebase config object
4. Enable Authentication (Email/Password)
5. Enable Firestore Database