export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white'
    }}>
      <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>
        🤖 Lurfis AI
      </h1>
      <p style={{color: '#888', marginBottom: '40px'}}>
        Your Personal AI Assistant
      </p>
      <div style={{
        width: '600px',
        background: '#1a1a1a',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <p style={{color: '#ccc'}}>👋 Hello! I am Lurfis AI. How can I help you?</p>
      </div>
    </div>
  )
}
