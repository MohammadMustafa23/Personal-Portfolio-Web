import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, className = '', as: Component = 'div' }) {
  const ref = useScrollReveal();
  return <Component ref={ref} className={`reveal ${className}`}>{children}</Component>;
}
