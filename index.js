import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hello! I am Lurfis AI. How can I help you?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Error! Try again.' }])
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0a', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Arial', color:'white' }}>
      <h1 style={{ fontSize:'3rem', marginBottom:'10px' }}>🤖 Lurfis AI</h1>
      <p style={{ color:'#888', marginBottom:'20px' }}>Your Personal AI Assistant</p>
      <div style={{ width:'650px', background:'#1a1a1a', borderRadius:'12px', padding:'20px' }}>
        <div style={{ height:'400px', overflowY:'auto', marginBottom:'15px' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ marginBottom:'12px', textAlign: m.role==='user' ? 'right' : 'left' }}>
              <span style={{
                background: m.role==='user' ? '#2563eb' : '#2a2a2a',
                padding:'10px 15px', borderRadius:'10px', display:'inline-block', maxWidth:'80%'
              }}>
                {m.content}
              </span>
            </div>
          ))}
          {loading && <p style={{color:'#888'}}>Lurfis AI is thinking...</p>}
        </div>
        <div style={{ display:'flex', gap:'10px' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key==='Enter' && sendMessage()}
            placeholder="Type your message..."
            style={{ flex:1, padding:'12px', borderRadius:'8px', border:'1px solid #333', background:'#2a2a2a', color:'white', fontSize:'16px' }}
          />
          <button onClick={sendMessage} style={{ padding:'12px 20px', background:'#2563eb', color:'white', border:'none', borderRadius:'8px', cursor:'pointer', fontSize:'16px' }}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
