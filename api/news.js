// api/news.js  (place at project root for Vercel serverless)
export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      console.error('NEWS_API_KEY is not set in the environment.');
      return res.status(500).json({ error: 'Server misconfiguration: NEWS_API_KEY missing' });
    }

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('NewsAPI responded with status', response.status, text);
      return res.status(response.status).json({ error: 'NewsAPI error', detail: text });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ error: 'Failed to fetch news' });
  }
}
