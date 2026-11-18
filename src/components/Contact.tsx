export default function Contact() {
  return (
    <section className="contact" id="contact">
      <span className="eyebrow" style={{ color: 'var(--yellow)' }}>Contact</span>
      <h2>Got a brand that deserves to be <span className="hl">unforgettable?</span></h2>
      <p>
        I’d love to hear about your project. Drop me a line and let’s make something people
        remember.
      </p>
      <a className="mail" href="mailto:ifraheemiffi10@gmail.com">ifraheemiffi10@gmail.com</a>
      <div className="soc">
        <a
          href="https://www.linkedin.com/in/muhammad-ifraheem-74b590202/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://www.behance.net/ifraheemif6cf3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
        >
          Behance
        </a>
        <a href="#" aria-label="Resume (add link)">Resume</a>
      </div>
    </section>
  );
}
