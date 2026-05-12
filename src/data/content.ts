export const hero = {
  name: 'Verónica Elena Rivera Barraza',
  badge: 'Abogadas más Influyentes de México · 2024',
  headline: ['Combino pensamiento analítico, ', 'integridad', ' y resiliencia para construir soluciones sólidas incluso bajo presión.'],
  subtext: 'Gerente Nacional de Cumplimiento · Especialista en PLD, Anticorrupción e Integridad Corporativa. 26 años transformando el cumplimiento legal en ventaja estratégica de negocio.',
  award: { source: 'Foro Jurídico · 2024', title: 'Una de las Abogadas más Influyentes de México' },
  ctas: {
    primary: { label: 'Agenda una Consulta', href: 'https://wa.me/526672300300?text=Hola%20Ver%C3%B3nica%2C%20me%20gustar%C3%ADa%20contactarte%20sobre%20tu%20expertise%20en%20cumplimiento%20corporativo.' },
    secondary: { label: 'Ver perfil LinkedIn →', href: 'https://www.linkedin.com/in/veronica-elena-rivera-barraza-/' },
  },
} as const;

export const authority = {
  logos: [
    { code: 'GC',  name: 'Grupo Coppel',     sub: 'Gerente Nacional de Cumplimiento', bg: '#003087' },
    { code: 'TEC', name: 'Tec de Monterrey', sub: 'Catedrática · 2024',              bg: '#003087' },
    { code: 'ACA', name: 'ACAMS',             sub: 'Miembro Certificado · 2024',      bg: '#1B3A6B' },
    { code: 'ANA', name: 'ANADE',             sub: 'Miembro · 2024',                 bg: '#7B1A1A' },
  ],
  award: {
    label: 'Reconocimiento Oficial',
    title: 'Abogadas Influyentes de México 2024',
    href: 'https://forojuridico.mx/abogadas-mas-influyentes-de-mexico-2024/',
  },
} as const;

export type NumberCard =
  | { icon: string; prefix?: string; target: number; format: 'thousands' | 'plain'; suffix?: string; label: string; sublabel: string }
  | { icon: string; display: string; label: string; sublabel: string };

export const numbers: NumberCard[] = [
  { icon: '👥', prefix: '+', target: 140000, format: 'thousands', label: 'Colaboradores capacitados',       sublabel: 'Primer Código de Ética\nde Grupo Coppel' },
  { icon: '🥇', display: '1er Lugar',                             label: 'Ranking Integridad Corporativa 500', sublabel: '3 años consecutivos\n2021 · 2022 · 2023' },
  { icon: '📉', target: 19,     format: 'plain', suffix: '%',     label: 'Reducción en tiempos',            sublabel: 'Atención de denuncias\ncorporativas' },
  { icon: '⚖️', target: 26,     format: 'plain', suffix: '+',     label: 'Años de trayectoria',             sublabel: 'Legal, fiscal y\ncumplimiento corporativo' },
];

export const duality = {
  technical: {
    label: 'Liderazgo Técnico',
    icon: '⚙️',
    title: 'Arquitecta del andamiaje jurídico corporativo',
    tags: ['PLD / AML', 'ISO 37001', 'FCPA', 'Criminal Compliance', 'CNBV', 'Protección de Datos'],
    items: [
      'Diseñó el programa global de integridad de Grupo Coppel en México y Argentina, incluyendo el primer Código de Ética con firma digital de más de 140,000 colaboradores.',
      'Arquitecta del Criminal Compliance Program: protocolo de atención de denuncias con Enfoque Basado en Riesgos Penales e integración de carpeta legal de defensa.',
      'Sistema de Alertas PLD aprobado por la CNBV; registro exitoso de Coppel Transmisores como transmisor de dinero.',
      'Emitió 3,932 certificados de riesgos legales de proveedores en 2024; rechazó 23 proveedores de alto riesgo.',
    ],
  },
  human: {
    label: 'Liderazgo Humano',
    icon: '🌿',
    title: 'Visión con propósito, forjada en resiliencia',
    tags: ['Liderazgo de Equipos', 'Comunicación Efectiva', 'Ética Corporativa', 'Formación de Talento'],
    items: [
      'Incrementó 37 puntos porcentuales el nivel de confianza de denunciantes en el canal corporativo, transformando la cultura organizacional.',
      'La familia como motor de resiliencia; la ética como refugio de integridad. Valores que proyecta en cada equipo que lidera.',
      'Catedrática activa en el Tecnológico de Monterrey, formando a la siguiente generación de profesionales en cumplimiento.',
      'Reconocida por USAID/ONU como Replicadora de Integridad Corporativa (2022), validando su liderazgo de impacto regional.',
    ],
  },
} as const;

export const milestones = [
  {
    period: '2018 — Presente',
    role: 'Gerente Nacional de Cumplimiento',
    company: 'Grupo Coppel · México & Argentina',
    description: 'Responsable del programa global de integridad corporativa, anticorrupción y cumplimiento legal operativo en todos los centros de Grupo Coppel en México y el extranjero.',
    achievements: [
      '1er lugar Ranking Integridad Corporativa 500 por 3 años consecutivos (2021–2023)',
      'Primer Código de Ética con más de 140,000 firmas digitales',
      '19% de reducción en tiempos de atención de denuncias',
      '3,932 certificados de riesgos legales de proveedores emitidos en 2024',
      '37 puntos porcentuales de aumento en confianza del canal de denuncias',
      'Criminal Compliance Program: arquitectura legal contra responsabilidad penal empresarial',
    ],
  },
  {
    period: '2014 — 2016',
    role: 'Oficial de Cumplimiento',
    company: 'Coppel Transmisores · México',
    description: 'Diseñó políticas de control interno, gobierno corporativo y el sistema de alertas PLD del negocio de remesas. Aseguró la continuidad operativa mediante registro ante la CNBV.',
    achievements: [
      'Registro exitoso de nuevo transmisor de dinero ante la CNBV tras pérdida de permiso de entidad previa',
      'Sistema de Alertas PLD diseñado e implementado, aprobado en auditorías regulatorias externas',
      'Auditorías de alta conformidad; gestión de 8 entidades vulnerables',
      'Constitución y capacitación del equipo de analistas de cumplimiento',
      'Doble certificación CAMS y coaching de analistas para sus certificaciones',
    ],
  },
  {
    period: '2009 — 2013',
    role: 'Gerente Jurídico',
    company: 'Corporativo Casas ICI · Zona Noroeste',
    description: 'Estrategia corporativa del grupo inmobiliario en la zona noroeste. Asesoría legal integral: corporativo, mercantil, laboral, administrativo y fiscal.',
    achievements: [
      'Gestión de créditos hipotecarios, puentes y fideicomisos',
      'Negociación con clientes y proveedores en esquemas crediticios complejos',
      'Liquidación de empresas del grupo',
    ],
  },
  {
    period: '2013 — 2014',
    role: 'Asesor Fiscal',
    company: 'Procuraduría de la Defensa del Consumidor (PROFECO)',
    description: 'Orientación, recepción y conclusión de quejas en materia fiscal federal, estatal y cumplimiento de la Ley PLD.',
    achievements: [
      'Asesoría fiscal especializada a contribuyentes en materia federal y estatal',
      'Aplicación de la Ley PLD en contexto de defensa del consumidor',
    ],
  },
] as const;

export const formation = {
  degrees: [
    { icon: '🎓', year: '1999',        degree: 'Maestría en Derecho Fiscal',            institution: 'Universidad Autónoma de Guadalajara' },
    { icon: '⚖️', year: '1998',        degree: 'Licenciatura en Derecho',               institution: 'Universidad Autónoma de Sinaloa' },
    { icon: '🏫', year: '2024 · Actual', degree: 'Catedrática en Cumplimiento y Ética', institution: 'Tecnológico de Monterrey' },
  ],
  certs: [
    'Certificación PLD/FT · ACAMS (2021)',
    'Certificación CNBV · Prevención de Lavado de Dinero',
    'ISO 37001 Antisoborno · Global Standards (2016)',
    'ISO 37002 · Sistemas de Gestión de Denuncias',
    'Criminal Compliance Program · México (2021)',
    'Negociación Harvard (2019)',
    'Cumplimiento Ético Internacional · ITESM (2018)',
    'KYC Foundations & Sanctions Compliance · ACAMS (2024)',
  ],
} as const;

export const contact = {
  whatsapp: { href: 'https://wa.me/526672300300?text=Hola%20Ver%C3%B3nica%2C%20me%20gustar%C3%ADa%20contactarte%20sobre%20tu%20expertise%20en%20cumplimiento%20corporativo.', label: '+52 667 230 0300' },
  email:    { href: 'mailto:riverabarrazaveronicaelena@gmail.com', label: 'riverabarrazaveronicaelena@gmail.com' },
  linkedin: { href: 'https://www.linkedin.com/in/veronica-elena-rivera-barraza-/', label: 'Conectar' },
  location: 'Culiacán, Sinaloa · México',
} as const;
