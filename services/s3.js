const aws = require('aws-sdk');

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_REGION = process.env.AWS_REGION;
const AWS_SIGNATURE_VERSION = process.env.AWS_SIGNATURE_VERSION;
const S3_BUCKET = process.env.S3_BUCKET;

module.exports = {
  getSignedUrl: function(req, res, next) {
    aws.config.update({ accessKeyId: AWS_ACCESS_KEY , secretAccessKey: AWS_SECRET_KEY });
    aws.config.update({ region: AWS_REGION, signatureVersion: AWS_SIGNATURE_VERSION });
    var s3 = new aws.S3();
    var s3_params = {
      Bucket: S3_BUCKET,
      Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3_params, function(err, data) {
      if (err) return next(err);
      var return_data = {
        signed_request: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${req.query.file_name}`
      };
      res.json(return_data);
    });
  }
};
