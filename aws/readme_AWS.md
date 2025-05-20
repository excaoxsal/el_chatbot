Setup for AWS Infrastructure

Setup:
1. EC2 will run WordPress using Apache and PHP.

2. The database is stored separately in RDS to make it scalable.

3. S3 will store all media files (images and uploaded files).

4. CloudFront will serve files from S3 with low latency (CDN).

5. Auto Scaling and a Load Balancer can be added for high traffic.

Benefits:
1. Scalability: RDS and S3 are self-scalable.

2. Performance: CloudFront accelerates access to media.

3. Reliability: Separate infrastructure prevents single points of failure.

4. Security: It can be combined with IAM, Security Groups and HTTPS.