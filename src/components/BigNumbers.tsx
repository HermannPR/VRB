'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { NumberCard } from '../data/content';

function Counter({ target, format, active }: { target: number; format: 'thousands' | 'plain'; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const steps = 90;
    const inc = target / steps;

    const tick = () => {
      frame++;
      const next = Math.min(Math.floor(inc * frame), target);
      setValue(next);
      if (next < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  return <>{format === 'thousands' ? value.toLocaleString('es-MX') : value}</>;
}

export default function BigNumbers({ numbers }: { numbers: NumberCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="grid grid-cols-2 lg:grid-cols-4"
      style={{ gap: '1px', background: 'rgba(196,151,60,0.1)' }}
    >
      {numbers.map((card, i) => (
        <motion.div
          key={i}
          variants={item}
          className="group relative flex flex-col justify-between bg-navy-dark px-8 py-12 overflow-hidden transition-colors duration-300 hover:bg-navy-mid"
          style={{ minHeight: '220px' }}
        >
          {/* animated gold bottom border */}
          <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gold" />
          {/* subtle top rule */}
          <span className="absolute top-0 left-8 right-8 h-px bg-white/5" />

          <div>
            {'display' in card ? (
              <div
                className="font-serif text-gold font-extrabold leading-none mb-4 tracking-tight"
                style={{ fontSize: 'clamp(34px, 3.6vw, 52px)' }}
              >
                {card.display}
              </div>
            ) : (
              <div
                className="font-serif text-gold font-extrabold leading-none mb-4 tracking-tight flex items-baseline gap-0.5"
                style={{ fontSize: 'clamp(40px, 4.5vw, 60px)' }}
              >
                {'prefix' in card && card.prefix && (
                  <span style={{ fontSize: '0.46em', fontWeight: 700 }}>{card.prefix}</span>
                )}
                <Counter target={card.target} format={card.format} active={inView} />
                {card.suffix && (
                  <span style={{ fontSize: '0.42em', fontWeight: 700 }}>{card.suffix}</span>
                )}
              </div>
            )}
            <p className="text-[13px] font-semibold text-white leading-snug tracking-wide">{card.label}</p>
          </div>

          <p className="text-[11px] text-oxford-light leading-relaxed whitespace-pre-line mt-6 border-t border-white/5 pt-4">
            {card.sublabel}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
