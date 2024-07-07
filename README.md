## Task-2: File Upload with Node.js and Next.js 📂

### Project Description

In Task-2, we dive into file uploads using Node.js and Next.js. This task focuses on handling file uploads, validation, and storage seamlessly.

### Features

- File Upload Endpoint 📤
- File Validation (e.g., Accept only Images) 🖼️
- Store Uploaded Files on the Server's Filesystem 💾
- Error Handling for File Upload Failures ❗
- Front-end Interface for File Upload 🖱️
- Display Uploaded Files on a Separate Page 📄

### Project Structure

```plaintext
Task-2/
├── client/
├── dist/
└── server/
    ├── node_modules/
    ├── src/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   └── utils/
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/umerfarooq5349/Task-2.git
    cd Task-2
    ```

2. **Install server dependencies:**

    ```sh
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```sh
    cd ../client
    npm install
    ```

### Running the Application

1. **Start the server:**

    ```sh
    cd server
    npm start
    ```

    ![Server Start](https://via.placeholder.com/400x200)

2. **Start the client:**

    ```sh
    cd ../client
    npm run dev
    ```

    ![Client Start](https://via.placeholder.com/400x200)

### API Endpoints

#### File Upload

- **URL:** `/api/upload`
- **Method:** `POST`
- **Description:** Uploads a file.
- **Request Body:** Form data containing the file to be uploaded.
- **Response:**

    ```json
    {
        "message": "File uploaded successfully",
        "filePath": "/uploads/filename.ext"
    }
    ```

### Dependencies

- **Node.js**: LTS version
- **Next.js**: Latest version
- **Express**: Latest version
- **SASS**: For styling
- **TypeScript**: For both Next.js and Node.js

### Author

Umer Farooq

---
