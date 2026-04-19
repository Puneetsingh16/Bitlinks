// URL storage using JSON file (persists across restarts)
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), '.data')
const DATA_FILE = path.join(DATA_DIR, 'urls.json')

// Ensure directory exists
function ensureDir() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
  } catch (err) {
    console.error('Error creating directory:', err)
  }
}

// Load URLs from file
function loadUrls() {
  try {
    ensureDir()
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8')
      return JSON.parse(data) || []
    }
  } catch (err) {
    console.error('Error loading URLs:', err)
  }
  return []
}

// Save URLs to file
function saveUrls(urls) {
  try {
    ensureDir()
    fs.writeFileSync(DATA_FILE, JSON.stringify(urls, null, 2))
  } catch (err) {
    console.error('Error saving URLs:', err)
  }
}

export function addUrl(url, shorturl) {
  const urls = loadUrls()
  urls.push({
    url,
    shorturl,
    createdAt: new Date().toISOString()
  })
  saveUrls(urls)
}

export function getUrl(shorturl) {
  const urls = loadUrls()
  const entry = urls.find(item => item.shorturl === shorturl)
  return entry ? entry.url : null
}

export function urlExists(shorturl) {
  const urls = loadUrls()
  return urls.some(item => item.shorturl === shorturl)
}

export function getAllUrls() {
  return loadUrls()
}
