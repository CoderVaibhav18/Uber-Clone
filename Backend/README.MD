# Documentation for Backend API Docs
## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user by providing the required data in the request body. Upon successful registration, it returns a JSON Web Token (JWT) and the created user details.

---

### Request Format
#### URL
`/users/register`

#### Method
`POST`

#### Headers
- `Content-Type: application/json`

#### Request Body
The request body must be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "<User's first name> (required, minimum 3 characters)",
    "lastname": "<User's last name> (optional)"
  },
  "email": "<User's email> (required, valid email format)",
  "password": "<User's password> (required, minimum 6 characters)"
}
```

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

### Validation Rules
1. `fullname.firstname`:
   - Required
   - Minimum length: 3 characters
2. `email`:
   - Required
   - Must be in a valid email format
3. `password`:
   - Required
   - Minimum length: 6 characters


### Implementation Details
This endpoint is implemented using `express-validator` for input validation. Upon successful validation, the user's data is hashed and stored in the database.

---

## Endpoint: `/users/login`

### Description
This endpoint is used for user authentication. It validates user credentials and returns a JSON Web Token (JWT) along with user details if the login is successful.

---

### Request Format
#### URL
`/users/login`

#### Method
`POST`

#### Headers
- `Content-Type: application/json`

#### Request Body
The request body must be in JSON format and include the following fields:

```json
{
  "email": "<User's email> (required, valid email format)",
  "password": "<User's password> (required, minimum 6 characters)"
}
```

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

### Validation Rules
1. `email`:
   - Required
   - Must be in a valid email format
2. `password`:
   - Required

If any validation rule is not met, the API will return an error response with a 400 status code.

---

### Response Format
#### Success Response
**Status Code**: `200 OK`

**Response Body**:
```json
{
  "token": "<JWT Token>",
  "user": {
    "fullname": {
      "firstname": "<First Name>",
      "lastname": "<Last Name>"
    },
    "email": "<User's Email>",
    "id": "<User ID>"
  }
}
```

Example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "id": "64b3f7809b97c82b6f85e523"
  }
}
```

#### Error Responses
- **400 Bad Request**: Invalid email or password
  ```json
  {
    "msg": "Invalid email or password"
  }
  ```
- **400 Bad Request**: Validation errors
  ```json
  {
    "errors": [
      {
        "msg": "<Error message>",
        "param": "<Field>",
        "location": "body"
      }
    ]
  }
  ```

---

### Implementation Details
This endpoint is implemented using `express-validator` for input validation. Upon successful validation, user credentials are verified, and a JWT is generated for the authenticated user.

---

## Folder Structure
This documentation is stored in the `backend` folder.
