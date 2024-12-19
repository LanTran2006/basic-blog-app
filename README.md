# Blog App

A modern and responsive blog application that allows users to create, edit, delete, and view blog posts. The app is powered by **Express.js**, uses **EJS** for templating, and integrates **JSON Server** for handling blog data. It also supports image uploads using **Multer**.

---

## Features

1. **Homepage**:
   - Displays all blog posts with titles, descriptions, images, and dates.
   - Provides search functionality for finding blogs by title or description.
   - Offers sorting options to sort blogs by date.

2. **Add Blog Page**:
   - Allows users to create a new blog with a title, content, author, category, and image upload.

3. **Edit Blog Page**:
   - Allows users to update the title, content, author, category, and replace the image of an existing blog.

4. **Delete Blog**:
   - Enables users to delete a blog directly from the homepage.

5. **View Blog Details**:
   - Users can view detailed information about a specific blog, including its content and metadata.

6. **Responsive Design**:
   - Fully responsive design for optimal viewing on different devices.

---

## Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript
  - EJS (Embedded JavaScript Templates)

- **Backend**:
  - Node.js with Express.js
  - JSON Server (for mock API)
  - Multer (for image uploads)

- **Other Tools**:
  - Path module for file handling
  - File system module (fs) for managing image files

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the JSON Server:
   ```bash
   npm run start-server
   ```

5. Start the Express.js server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit:
   ```
   http://localhost:5000
   ```

---

## Project Structure

```
blog-app/
├── public/
│   ├── styles/
│   │   └── style.css
│   └── uploads/       # Uploaded images
├── views/
│   ├── index.ejs
│   ├── post-details.ejs
│   ├── add-blog.ejs
│   ├── edit-blog.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── db.json            # Mock data for blogs
├── app.js             # Main server file
├── package.json
└── README.md
```

---

## API Endpoints (JSON Server)

- **GET /posts**: Retrieve all blog posts
- **GET /posts/:id**: Retrieve a single blog post by ID
- **POST /posts**: Create a new blog post
- **PUT /posts/:id**: Update an existing blog post
- **DELETE /posts/:id**: Delete a blog post

---

## Usage Instructions

1. **Add a Blog**:
   - Navigate to the "Add Blog" page and fill in the required details, including uploading an image.

2. **Edit a Blog**:
   - From the homepage, click on a blog's "Edit" button to modify its details.

3. **Delete a Blog**:
   - Click the "Delete" button on a blog from the homepage to remove it.

4. **Search and Sort**:
   - Use the search bar to find blogs by title or description.
   - Use the sort dropdown to sort blogs by their creation date.



.

