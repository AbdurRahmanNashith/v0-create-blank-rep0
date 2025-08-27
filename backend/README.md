# E-commerce Backend API

A Node.js + Express backend API for managing products with MongoDB Atlas and Google Drive image storage.

## Features

- **Product Management**: CRUD operations for products
- **Image Upload**: Automatic image upload to Google Drive
- **Category Filtering**: Filter products by category and subcategory
- **Search**: Full-text search across product titles and descriptions
- **Pagination**: Efficient data loading with pagination
- **Validation**: Input validation and error handling

## Setup Instructions

### 1. Install Dependencies

\`\`\`bash
cd backend
npm install
\`\`\`

### 2. Environment Variables

Create a `.env` file in the backend directory with the following variables:

\`\`\`env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority

# Google Drive API Credentials
GOOGLE_DRIVE_CLIENT_ID=your_google_drive_client_id
GOOGLE_DRIVE_CLIENT_SECRET=your_google_drive_client_secret
GOOGLE_DRIVE_REDIRECT_URI=your_redirect_uri
GOOGLE_DRIVE_REFRESH_TOKEN=your_refresh_token
GOOGLE_DRIVE_FOLDER_ID=your_folder_id

# Server Configuration
PORT=5000
NODE_ENV=development
\`\`\`

### 3. Google Drive Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Drive API
4. Create OAuth 2.0 credentials
5. Create a folder in Google Drive for product images
6. Get the folder ID from the URL
7. Use Google OAuth Playground to get refresh token

### 4. MongoDB Atlas Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP addresses
5. Get connection string

### 5. Run the Server

\`\`\`bash
# Development mode
npm run dev

# Production mode
npm start
\`\`\`

## API Endpoints

### Products

- `GET /api/products` - Get all products (with pagination)
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/category/:category/:subCategory` - Get products by subcategory
- `POST /api/products` - Add new product (with image upload)
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/search/:query` - Search products

### Health Check

- `GET /api/health` - Server health check

## Request Examples

### Add Product

\`\`\`bash
curl -X POST http://localhost:5000/api/products \
  -F "title=Sample Product" \
  -F "description=This is a sample product" \
  -F "price=99.99" \
  -F "category=men" \
  -F "subCategory=casual" \
  -F "offer=10% OFF" \
  -F "image=@/path/to/image.jpg"
\`\`\`

### Get Products

\`\`\`bash
curl http://localhost:5000/api/products?page=1&limit=10&category=men
\`\`\`

## Project Structure

\`\`\`
backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   └── productController.js # Product business logic
├── middleware/
│   ├── upload.js            # File upload middleware
│   └── validation.js        # Input validation
├── models/
│   └── Product.js           # Product schema
├── routes/
│   └── productRoutes.js     # API routes
├── services/
│   ├── googleDriveService.js # Google Drive integration
│   └── imageService.js      # Image handling service
├── uploads/                 # Temporary file storage
├── .env                     # Environment variables
├── server.js               # Main server file
└── package.json            # Dependencies
\`\`\`

## Error Handling

The API returns consistent error responses:

\`\`\`json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
\`\`\`

## Success Responses

All successful responses follow this format:

\`\`\`json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
