import type { ChatMessage } from '../types/chat'
import { EmptyState } from './EmptyState'
import { MessageBubble } from './MessageBubble'

type MessageListProps = {
  messages: ChatMessage[]
  isBotThinking: boolean
}

export function MessageList({ messages, isBotThinking }: MessageListProps) {
  if (messages.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="flex flex-col gap-5 px-4 py-6 sm:px-6">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isBotThinking && (
        <div className="flex justify-start" aria-live="polite">
          <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm text-slate-500 ring-1 ring-slate-200">
            Robo esta respondendo...
          </div>
        </div>
      )}
    </div>
  )
}
