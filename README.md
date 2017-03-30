# S3 Upload

This example shows how to load a file from a browser straight to S3 using a signed URL from a Node.js server.

The upload is triggered immediately after selecting the file rather than on submitting. This simplifies sending only the URL to our own server on submit.

## Setup

Make sure the CORS configuration of your S3 bucket allows uploads
```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

Duplicate the `.env.sample` file as a `.env` file and update the keys.
Run `npm start`.

#### References

* https://devcenter.heroku.com/articles/s3-upload-node
