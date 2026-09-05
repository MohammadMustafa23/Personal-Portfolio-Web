export function typeNavSignal(message, setSignal, speed = 42) {
  let index = 0;
  const text = message || '';
  setSignal('');
  const timer = window.setInterval(() => {
    index += 1;
    setSignal(text.slice(0, index));
    if (index >= text.length) window.clearInterval(timer);
  }, speed);
  return () => window.clearInterval(timer);
}
