import { useEffect, useState } from "react";
import './index.css'
// components/ScrollIndicator.tsx
export function ScrollIndicator() {
  const sections = ['inicio', 'sobre', 'servicos', 'portfolio', 'contato'];
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 left-5 z-50 flex flex-col gap-3 transform -translate-y-1/2">
      {sections.map((id) => (
        <a key={id} href={`#${id}`} className="group">
          <div
            className={`h-3 w-3 rounded-full border transition-all ${
              active === id ? 'bg-white border-white scale-125' : 'border-[#777] bg-transparent'
            }`}
          />
        </a>
      ))}
    </div>
  );
}
