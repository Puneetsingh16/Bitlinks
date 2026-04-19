import { addUrl, urlExists } from "@/lib/urlStore"

export async function POST(request) {
    try {
    const body = await request.json()
    
    // Validate input
    if (!body.url || !body.shorturl) {
      return Response.json({ success: false, error: true, message: 'URL and short URL are required!' }, { status: 400 })
    }
    
    // Check if the short url exists
    if(urlExists(body.shorturl)){
      return Response.json({success: false, error: true, message: 'URL already exists!'})
    }

    // Add new URL
    addUrl(body.url, body.shorturl)

    return Response.json({ success: true, error: false, message: 'URL shortened successfully!' })
    } catch (error) {
      return Response.json({ success: false, error: true, message: error.message }, { status: 400 })
    }
  }