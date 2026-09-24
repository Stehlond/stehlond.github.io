import Icon from './Icon';
import { CONTACT } from './contact';

const ITEMS = [
  { icon: 'pin', label: `${CONTACT.street}, ${CONTACT.city}`, href: null },
  { icon: 'phone', label: CONTACT.tel, href: `tel:${CONTACT.telHref}` },
  { icon: 'mail', label: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-items">
        {ITEMS.map((item) => {
          const content = (
            <>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </>
          );
          return item.href ? (
            <a key={item.label} href={item.href} className="footer-item">{content}</a>
          ) : (
            <span key={item.label} className="footer-item">{content}</span>
          );
        })}
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <span>© {new Date().getFullYear()} {CONTACT.fullName}, {CONTACT.role}</span>
          <span>{CONTACT.ic} · {CONTACT.bar}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
