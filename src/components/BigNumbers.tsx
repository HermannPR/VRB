'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { NumberCard } from '../data/content';

interface CounterProps {
  target: number;
  format: 'thousands' | 'plain';
  active: boolean;
}

function Counter({ target, format, active }: CounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 100;
    const inc = target / steps;
    let frame = 0;

    const tick = () => {
      start += inc;
      frame++;
      if (start >= target || frame >= steps) {
        setValue(target);
        return;
      }
      setValue(Math.floor(start));
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span>
      {format === 'thousands' ? value.toLocaleString('es-MX') : value}
    </span>
  );
}

interface Props {
  numbers: NumberCard[];
}

export default function BigNumbers({ numbers }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10"
    >
      {numbers.map((card, i) => (
        <motion.div
          key={i}
          variants={item}
          className="group bg-navy-dark px-7 py-12 text-center relative overflow-hidden transition-colors duration-300 hover:bg-navy-mid"
        >
          {/* gold underline on hover */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/5 h-[3px] bg-gold transition-all duration-400" />

          <div className="text-3xl mb-4 opacity-80">{card.icon}</div>

          {'display' in card ? (
            <div className="font-serif text-gold leading-none mb-3 flex items-baseline justify-center gap-1"
                 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800 }}>
              {card.display}
            </div>
          ) : (
            <div className="font-serif text-gold leading-none mb-3 flex items-baseline justify-center gap-0.5"
                 style={{ fontSize: 'clamp(42px, 5vw, 62px)', fontWeight: 800 }}>
              {'prefix' in card && card.prefix && (
                <span style={{ fontSize: '0.48em', fontWeight: 700 }}>{card.prefix}</span>
              )}
              <Counter target={card.target} format={card.format} active={inView} />
              {card.suffix && (
                <span style={{ fontSize: '0.44em', fontWeight: 700 }}>{card.suffix}</span>
              )}
            </div>
          )}

          <p className="text-sm font-semibold text-white tracking-tight mb-1.5">{card.label}</p>
          <p className="text-[11px] text-oxford-light leading-relaxed whitespace-pre-line">{card.sublabel}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
