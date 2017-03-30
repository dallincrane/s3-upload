# S3 Upload

This example shows how to load a file from a browser straight to S3 using a signed URL from a Node.js server.

The upload is triggered immediately after selecting the file rather than on submitting. This simplifies sending only the URL to our own server on submit.

## Setup

Duplicate the `.env.sample` file as a `.env` file and update the keys.
Run `npm start`.

#### References

* https://devcenter.heroku.com/articles/s3-upload-node
