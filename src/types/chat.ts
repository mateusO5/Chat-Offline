export type ChatRole = 'user' | 'bot'

export type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  createdAt: number
}

export type BotResponseStatus = 'idle' | 'thinking'
