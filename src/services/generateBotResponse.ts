const greetingPattern = /\b(oi|ola|olá|bom dia|boa tarde|boa noite)\b/i
const helpPattern = /\b(ajuda|help|o que voce faz|o que você faz)\b/i
const namePattern = /\b(seu nome|quem e voce|quem é você)\b/i

export function generateBotResponse(message: string): string {
  const normalizedMessage = message.trim()

  if (greetingPattern.test(normalizedMessage)) {
    return 'Ola! Como posso ajudar?'
  }

  if (helpPattern.test(normalizedMessage)) {
    return 'Posso responder mensagens simples enquanto esta conversa estiver aberta.'
  }

  if (namePattern.test(normalizedMessage)) {
    return 'Eu sou o Robo deste chat offline.'
  }

  return `Entendi: "${normalizedMessage}". Pode me contar mais?`
}
