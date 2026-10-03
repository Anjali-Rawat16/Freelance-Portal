# SkillBook - Freelance Booking Portal

SkillBook is a responsive freelance booking portal that helps users find skilled freelancers, view profiles, create bookings, and manage their bookings.

## Project Overview

This project was developed as a production capstone project for RabTech Academy.

The application includes freelancer search and filtering, simulated user authentication, booking management, and persistent client-side data using localStorage.


## Features

- Freelancer search by name or skill
- Freelancer category filtering
- Freelancer profile viewing
- User signup simulation
- User login and logout
- Persistent login state using localStorage
- Create new bookings
- View saved bookings
- Edit bookings
- Delete bookings
- Booking status display
- Future-date booking validation
- Responsive mobile layout
- Client-side data persistence

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- localStorage
- Responsive Web Design
- Git and GitHub

## Project Structure

```text
RabTech-Freelance-Portal/
├── index.html
├── style.css
├── app.js
└── README.md

## Architecture

```text
User
  ↓
SkillBook Frontend
  ↓
HTML + CSS + JavaScript
  ↓
localStorage
  ├── User Account
  └── Bookings

  ## How to Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` using Live Server.
4. Open the website in your browser.

No backend server or database is required. The project uses browser localStorage for persistent client-side data.