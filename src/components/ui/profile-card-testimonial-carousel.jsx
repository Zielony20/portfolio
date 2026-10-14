import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';

// Adaptacja referencji do React/Vite: natywny obraz, linki i przejście CSS.
export function ProfileCardCarousel({ profile, slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = slides[currentIndex];
  if (!current) return null;
  const changeSlide = direction => setCurrentIndex(index => (index + direction + slides.length) % slides.length);

  return (
    <div className="profile-carousel" aria-roledescription="carousel" aria-label="Professional profile">
      <div className="profile-layout">
        <figure className="profile-image">
          <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.photoAlt} width="640" height="640" fetchPriority="high" />
        </figure>
        <article className="profile-card">
          <p className="eyebrow">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="profile-location">{profile.location} <span aria-hidden="true">·</span> English B2</p>
          <div className="profile-slide" key={current.id} aria-live="polite" aria-atomic="true">
            <h2>{current.title}</h2>
            <p>{current.description}</p>
            <a className="text-link" href={current.href}>{current.linkLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="profile-socials" aria-label="Profiles and contact">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Piotr’s GitHub"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Piotr’s LinkedIn"><LinkedinIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email Piotr"><Mail aria-hidden="true" /></a>
          </div>
        </article>
      </div>
      {slides.length > 1 && (
        <div className="carousel-controls">
          <button className="icon-button" onClick={() => changeSlide(-1)} aria-label="Previous topic"><ChevronLeft aria-hidden="true" /></button>
          <div className="carousel-topics" aria-label="Select a topic">
            {slides.map((slide, index) => (
              <button key={slide.id} className={index === currentIndex ? 'is-current' : ''}
                aria-pressed={index === currentIndex} onClick={() => setCurrentIndex(index)}>{slide.label}</button>
            ))}
          </div>
          <button className="icon-button" onClick={() => changeSlide(1)} aria-label="Next topic"><ChevronRight aria-hidden="true" /></button>
        </div>
      )}
    </div>
  );
}
