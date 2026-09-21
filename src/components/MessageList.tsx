import type { ChatMessage } from '../types/chat'
import { EmptyState } from './EmptyState'
import { MessageBubble } from './MessageBubble'

type MessageListProps = {
  messages: ChatMessage[]
}

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="flex flex-col gap-5 px-4 py-6 sm:px-6">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  )
}
