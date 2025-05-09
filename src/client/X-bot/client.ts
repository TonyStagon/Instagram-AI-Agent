import { TwitterApi } from 'twitter-api-v2';
import { TWITTER_API_CREDENTIALS } from '../../secret';
import logger from '../../config/logger';

// Create a Twitter client instance
const twitterClient = new TwitterApi({
  appKey: TWITTER_API_CREDENTIALS.appKey,
  appSecret: TWITTER_API_CREDENTIALS.appSecret,
  accessToken: TWITTER_API_CREDENTIALS.accessToken,
  accessTokenSecret: TWITTER_API_CREDENTIALS.accessTokenSecret,
});

// Read-only client for read operations
const readOnlyClient = twitterClient.readOnly;

// Read-write client for both reading and writing operations
const readWriteClient = twitterClient;

export { twitterClient, readOnlyClient, readWriteClient };