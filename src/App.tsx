import { useEffect, useRef, useState } from 'react'
import { ChatComposer } from './components/ChatComposer'
import { MessageList } from './components/MessageList'
import { generateBotResponse } from './services/generateBotResponse'
import type { ChatMessage, ChatRole } from './types/chat'

const BOT_RESPONSE_DELAY = 700

function createMessage(content: string, role: ChatRole): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: Date.now(),
  }
}

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [pendingResponses, setPendingResponses] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const isBotThinking = pendingResponses > 0

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isBotThinking])

  function handleSend(content: string, role: ChatRole) {
    setMessages((currentMessages) => [...currentMessages, createMessage(content, role)])

    if (role !== 'user') {
      return
    }

    setPendingResponses((currentCount) => currentCount + 1)

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage(generateBotResponse(content), 'bot'),
      ])
      setPendingResponses((currentCount) => currentCount - 1)
    }, BOT_RESPONSE_DELAY)
  }

  return (
    <main className="min-h-screen bg-slate-100 px-3 py-4 sm:px-6 sm:py-6">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-2xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <header className="px-2 pb-4 sm:px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Chat offline</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">Conversa local</h2>
        </header>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl bg-slate-200/70 ring-1 ring-slate-200">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <MessageList messages={messages} isBotThinking={isBotThinking} />
            <div ref={messagesEndRef} />
          </div>
          <div className="shrink-0 p-3 sm:p-4">
            <ChatComposer onSend={handleSend} />
          </div>
        </div>
      </section>
    </main>
  )
}