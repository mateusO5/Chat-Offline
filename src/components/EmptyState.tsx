export function EmptyState() {
  return (
    <div className="flex min-h-full items-center justify-center px-6 py-16 text-center">
      <div className="max-w-sm">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-violet-100 text-2xl text-violet-700">
          💬
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Comece uma conversa
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Envie uma mensagem como Usuario ou alterne para Robo para simular uma resposta.
        </p>
      </div>
    </div>
  )
}
