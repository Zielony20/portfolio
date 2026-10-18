import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { personalData, featuredProjects } from '../src/data/portfolioData.js';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { ProfileCardCarousel } = await server.ssrLoadModule('/src/components/ui/profile-card-testimonial-carousel.jsx');
  const slides = [{ id: 'profile', label: 'Backend', title: 'Backend', description: 'Profil Piotra', href: '#experience', linkLabel: 'Doświadczenie' }];
  const markup = renderToStaticMarkup(createElement(ProfileCardCarousel, { profile: personalData, slides }));
  assert.ok(markup.includes(personalData.name), 'Karta musi przedstawiać Piotra');
  assert.ok(markup.includes(personalData.github), 'Brak rzeczywistego linku GitHub');
  assert.ok(markup.includes(personalData.linkedin), 'Brak rzeczywistego linku LinkedIn');
  assert.ok(markup.includes(personalData.photoAlt), 'Brak opisu zdjęcia');
  assert.ok(markup.includes('href="#experience"'), 'Brak linku do doświadczenia');
  assert.ok(!markup.includes('Next topic'), 'Pojedynczy temat nie wymaga nawigacji');
  assert.equal(renderToStaticMarkup(createElement(ProfileCardCarousel, { profile: personalData, slides: [] })), '', 'Pusta lista tematów nie może powodować błędu');
  const multiple = renderToStaticMarkup(createElement(ProfileCardCarousel, { profile: personalData, slides: [...slides, { ...slides[0], id: 'second', label: 'Security' }] }));
  assert.ok(multiple.includes('Next topic'), 'Brak nawigacji między tematami');
  assert.ok(multiple.includes('aria-pressed="true"'), 'Aktywny temat musi być oznaczony');
  assert.deepEqual(featuredProjects.map((p) => p.id).sort(), ['better-me', 'primavera'], 'Portfolio powinno pokazywać BetterMe i PrimaVera');
  console.log('OK: renderowanie karty, prawdziwe profile, opis zdjęcia, nawigacja i zakres projektów.');
} finally {
  await server.close();
}
