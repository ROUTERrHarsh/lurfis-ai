export default async function handler(req, res) {
  const { messages } = req.body

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: 'You are Lurfis AI, a helpful personal AI assistant.' },
        ...messages
      ]
    })
  })

  const data = await response.json()
  const reply = data.choices[0].message.content
  res.status(200).json({ reply })
}
