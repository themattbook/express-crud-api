# express-crud-api
REST API intended to be a MERN backend

## About the API
I originally created this as an inventory management solution, but it could be modified and used for just about anything. The way this is designed, only users marked "admin" can access the write properties on the database. Non-admin users can get the full list of products. Additional route protection was added to ensure all users require a Bearer token to access the API. This can also be easily modified. I'll eventually add a React frontend as a proof of concept, but for now this will suffice as a boilerplate Node/Express/Mongo backend.
