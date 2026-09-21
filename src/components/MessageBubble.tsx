import type { ChatMessage } from '../types/chat'

type MessageBubbleProps = {
  message: ChatMessage
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUserMessage = message.role === 'user'
  const roleLabel = isUserMessage ? 'Usuario' : 'Robo'

  return (
    <article className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[85%] sm:max-w-[70%]">
        <div className={`mb-1 flex items-center gap-2 text-xs font-medium ${isUserMessage ? 'justify-end text-violet-700' : 'text-slate-500'}`}>
          {!isUserMessage && <span aria-hidden="true">🤖</span>}
          <span>{roleLabel}</span>
          {isUserMessage && <span aria-hidden="true">🙂</span>}
        </div>
        <p className={`whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${isUserMessage ? 'rounded-br-md bg-violet-600 text-white' : 'rounded-bl-md bg-white text-slate-700 ring-1 ring-slate-200'}`}>
          {message.content}
        </p>
      </div>
    </article>
  )
}
