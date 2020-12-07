const AWS = require('aws-sdk')

export const handler = async () => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.S3_KEY_ID,
    secretAccessKey: process.env.S3_SECRET,
    region: 'us-east-1',
  })

  try {
    const s3Result = await s3
      .getObject({
        Bucket: 'rwshiptrust',
        Key: '2016 Annual DP Audit and Trials Summary Rev. 0 - Michael Crombie McCall .pdf',
      })
      .promise()

    const s3File = s3Result.Body.toString('utf-8')

    console.log('file contents', s3File)
    return { statusCode: 200, body: 'File downloaded successfully' }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: err.message }
  }
}
