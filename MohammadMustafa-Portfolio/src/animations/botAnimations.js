export function typeBotReply(text, setReply, speed = 10) {
  let index = 0;
  setReply('');
  const timer = window.setInterval(() => {
    index += 1;
    setReply(text.slice(0, index));
    if (index >= text.length) window.clearInterval(timer);
  }, speed);
  return () => window.clearInterval(timer);
}
