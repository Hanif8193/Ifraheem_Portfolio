import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">
            <i>MI</i>Muhammad Ifraheem
          </a>{' '}
          <button
            className="burger"
            id="bg"
            aria-expanded={open}
            aria-controls="lk"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>{' '}
          <div
            className={`links${open ? ' open' : ''}`}
            id="lk"
            onClick={(event) => {
              if ((event.target as HTMLElement).tagName === 'A') setOpen(false);
            }}
          >
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a className="cta" href="#contact">Resume</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
