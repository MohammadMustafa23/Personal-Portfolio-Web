const links = [
  ['▣', 'Resume', '/assets/MohammadMustafa_Resume.pdf', 'CHECK OUT MY RESUME!'],
  ['▱', 'GitHub', 'https://github.com/MohammadMustafa23', 'EXPLORE MY CODE ON GITHUB!'],
  ['in', 'LinkedIn', 'https://www.linkedin.com/in/mohammad-mustafa9602a/', 'CONNECT WITH ME ON LINKEDIN!'],
  ['GfG', 'GeeksforGeeks', 'https://www.geeksforgeeks.org/profile/ff774noe7', 'CHECK OUT MY CODING PROFILE!'],
  ['✉', 'Email', 'mailto:mohammadmustafa.dev@gmail.com', 'SEND ME A MESSAGE!'],
];

export default function Footer({ onMessage, onLeaveMessage }) {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerLinks" aria-label="Social and contact links">
          {links.map(([icon, label, href, msg]) => <a className="footerLink" href={href} target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined} rel={href.startsWith('http') || href.endsWith('.pdf') ? 'noreferrer' : undefined} key={label} data-navmsg={msg} onMouseEnter={() => onMessage(msg)} onMouseLeave={onLeaveMessage} onFocus={() => onMessage(msg)} onBlur={onLeaveMessage}><span className="footerIcon">{icon}</span><span>{label}</span></a>)}
        </div>
        <div className="footerRule" />
        <div className="footerBottom"><span>© 2026 Mohammad Mustafa. Built with code &amp; creativity.</span><span>Full-Stack · Generative AI · Always Building.</span></div>
      </div>
    </footer>
  );
}
