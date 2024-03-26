import {S3Client} from '@aws-sdk/client-s3'

// Create an S3 instance
export const s3 = new S3Client({
  credentials : {
    accessKeyId: 'AKIAXGMJMOP3KJOIXTMD',
    secretAccessKey: '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',
  },
  region: 'sa-east-1'
})