// import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'
import UrlService from '#services/url_service';

import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {
  async index({ params }: any) {
    const slug = params.id

    const resp = await User.create({ url: slug })
    console.log('resp', resp)

    return [
      {
        username: slug,
        res: resp,
      },
    ]
  }

  async create({ request }: any) {
    const resp = await User.create(request.body())
    console.log('resp', resp)

    return [
      {
        res: resp,
      },
    ]
  }

  public async shorten({ request }: any) {
    // const fullUrl = request.body()
    const fullUrl = request.input('url')
    const shortUrl = await UrlService.shortenUrl(fullUrl)
    return { short_url: shortUrl }
  }

  public async redirect({ params, response }: any ) {
    const identifier = params.identifier
    const fullUrl = await UrlService.getFullUrl(identifier)
    if (fullUrl) {
      // return response.redirect(fullUrl)
      return {res: fullUrl}
    } else {
      return response.notFound({ message: 'URL not found' })
    }
  }

}
