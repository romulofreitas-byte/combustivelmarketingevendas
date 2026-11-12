export function waMessage(_segment: string, result: string, weak: string) {
  let message =
    "Olá, vim pelo site da Combustível. Sou de uma indústria do ramo industrial e quero agendar o bate-papo de 20 minutos.";
  if (result) {
    message += ` No diagnóstico do site, o resultado foi "${result}" e a frente mais fraca é ${weak}.`;
  }
  return message;
}

export function waNumber() {
  return (process.env.NEXT_PUBLIC_WA_NUMBER ?? "").replace(/\D/g, "");
}
