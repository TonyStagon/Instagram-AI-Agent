import axios from 'axios';
import * as fs from 'fs';
import logger from '../config/logger';

/**
 * Downloads a file from the given URL and saves it to the specified filename
 * 
 * @param url URL of the file to download
 * @param filename Path where the file should be saved
 * @param callback Function to call after download completes
 */
export async function download(url: string, filename: string, callback: () => void) {
  try {
    logger.info(`Downloading file from ${url} to ${filename}`);
    
    // Use axios to get the file as a stream
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    
    // Create a write stream to save the file
    const writer = fs.createWriteStream(filename);
    
    // Pipe the response data to the file
    response.data.pipe(writer);
    
    // Return a Promise that resolves when the file is written
    writer.on('finish', () => {
      logger.info(`File downloaded successfully to ${filename}`);
      callback();
    });
    
    writer.on('error', (err) => {
      logger.error(`Error writing file to ${filename}:`, err);
      throw err;
    });
  } catch (error) {
    logger.error(`Error downloading file from ${url}:`, error);
    throw error;
  }
}