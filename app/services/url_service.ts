// import logger from '@adonisjs/core/services/logger';
import User from '../models/user.js'
import { v4 as uuidv4 } from 'uuid'


export default class UrlService {
    public static async shortenUrl(url: string): Promise<string> {
      const identifier = uuidv4().slice(0, 8) // Generate a unique identifier
      await User.create({ identifier, url }) // Store in the database
        return `ope.com/${identifier}` // Return the short URL
    }
  
    public static async getFullUrl(identifier: string): Promise<string | null> {
      const urlRecord = await User.findBy('identifier', identifier)
      return urlRecord ? urlRecord.url : null
    }

    public static async getAllUrl(): Promise<{ identifier: string, url: string }[] | null> {
      const urlRecords = await User.all();
      return urlRecords.length > 0 ? urlRecords : null;
    }
  }