'use client';

import { useEffect } from 'react';

function isChineseLocale(locale: string): boolean {
  const normalized = locale.toLowerCase();
  return normalized === 'zh' || normalized.startsWith('zh-');
}

export default function Home() {
  useEffect(() => {
    const locale =
      typeof navigator !== 'undefined'
        ? navigator.language || (navigator.languages && navigator.languages[0]) || ''
        : '';
    const target = isChineseLocale(locale) ? '/zh/lysmata' : '/en/lysmata';
    window.location.replace(target);
  }, []);

  return (
    <div className="legacy-home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: 'var(--text-secondary, #666)' }}>Redirecting…</p>
    </div>
  );
}
