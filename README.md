
# Caching API

This is a simple caching API built with Node.js and Express.

## Endpoints

- `POST /cache`: Stores a key-value pair.
- `GET /cache/{key}`: Retrieves a value (if exists).
- `DELETE /cache/{key}`: Removes a key-value pair from the cache.

## Requirements

- The cache has a predefined max size. If the max size is set to 10, no more items should be stored further and future POST requests should return an error.

## Running the Project

1. Install dependencies:
    ```sh
    npm install
    ```

2. Start the server:
    ```sh
    node index.js
    ```

The server will run on `http://localhost:3000`.

## Testing the API

You can use Postman or any other API testing tool to test the endpoints.

### Example Requests

- **Store a key-value pair**:
    - Method: `POST`
    - URL: `http://localhost:3000/cache`
    - Body:
        ```json
        {
            "key": "testKey",
            "value": "testValue"
        }
        ```

- **Retrieve a value by key**:
    - Method: `GET`
    - URL: `http://localhost:3000/cache/testKey`

- **Delete a key-value pair**:
    - Method: `DELETE`
    - URL: `http://localhost:3000/cache/testKey`

## Deployment
