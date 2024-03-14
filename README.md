# Ph-University-3

## Overview

Welcome to Ph-hero-3! This project provides API routes for managing courses, categories, reviews, and finding the best course based on certain criteria.

## Routes

### Courses Routes (`/api/courses`)

- **GET /api/courses:** Retrieve a list of all courses.
- **GET /api/courses/{courseId}:** Retrieve details of a specific course by ID.
- **POST /api/courses:** Create a new course.
- **PUT /api/courses/{courseId}:** Update an existing course.
- **DELETE /api/courses/{courseId}:** Delete a course by ID.

### Categories Routes (`/api/categories`)

- **GET /api/categories:** Retrieve a list of all categories.
- **GET /api/categories/{categoryId}:** Retrieve details of a specific category by ID.
- **POST /api/categories:** Create a new category.
- **PUT /api/categories/{categoryId}:** Update an existing category.
- **DELETE /api/categories/{categoryId}:** Delete a category by ID.

### Reviews Routes (`/api/reviews`)

- **GET /api/reviews:** Retrieve a list of all reviews.
- **GET /api/reviews/{reviewId}:** Retrieve details of a specific review by ID.
- **POST /api/reviews:** Create a new review.
- **PUT /api/reviews/{reviewId}:** Update an existing review.
- **DELETE /api/reviews/{reviewId}:** Delete a review by ID.

### Best Course Routes (`/api/course/best`)

- **GET /api/course/best:** Retrieve the best course based on certain criteria, such as highest rating, most reviews, etc.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies using `npm install` or `yarn install`.
3. Set up your environment variables as needed, such as database connection details.
4. Run the server using `npm start` or `yarn start`.
5. Access the API endpoints using the specified routes and methods.

## Contributors

- MD Tajul Islam Tanvir

## License

This project is licensed under the [MIT License](LICENSE).
