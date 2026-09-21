import { ChatComposer } from './components/ChatComposer'
import { MessageList } from './components/MessageList'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-3 py-4 sm:px-6 sm:py-6">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-2xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <header className="px-2 pb-4 sm:px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Chat offline</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">Conversa local</h2>
        </header>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl bg-slate-200/70 ring-1 ring-slate-200">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <MessageList messages={[]} />
          </div>
          <div className="shrink-0 p-3 sm:p-4">
            <ChatComposer />
          </div>
        </div>
      </section>
    </main>
  )
}