import { redirect } from "next/navigation"
import { getUrl } from "@/lib/urlStore"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    
    // Check if URL exists in database
    const originalUrl = getUrl(shorturl)
    
    if(originalUrl){
        redirect(originalUrl)
    }
    else{
        redirect(`${ process.env.NEXT_PUBLIC_HOST}`)
    }
   
    return <div>Redirecting...</div>
  }