export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow">Experience</span>
            <h2>The <span className="bl">journey</span> so far</h2>
          </div>
        </div>
        <div className="tl">
          <div className="job rv">
            <time>Apr 2021 – Present</time>
            <h3>Senior Graphic Designer</h3>
            <div className="co">Web Worx Labs · Canada-based digital agency</div>
            <ul>
              <li>
                Develop visual concepts and creative assets for branding, digital advertising and
                social campaigns across industries.
              </li>
              <li>
                Combine AI-assisted creative tools with Adobe applications for efficient concept
                exploration and production.
              </li>
              <li>Maintain visual consistency and quality across client projects and platforms.</li>
            </ul>
          </div>
          <div className="job rv">
            <time>Jan 2020 – Mar 2021</time>
            <h3>Graphic Designer</h3>
            <div className="co">Synapptec Global</div>
            <ul>
              <li>
                Designed branding, marketing materials and digital content for social media and
                online marketplaces.
              </li>
              <li>
                Worked with the marketing team on content strategies that improved customer
                engagement.
              </li>
              <li>
                Edited product images, social creatives and advertising assets for targeted
                campaigns.
              </li>
            </ul>
          </div>
          <div className="job rv">
            <time>Feb 2019 – Dec 2019</time>
            <h3>Junior Graphic Designer</h3>
            <div className="co">Bachaa Party</div>
            <ul>
              <li>Started my professional journey in graphic design and digital content.</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 40, color: 'var(--muted)' }}>
          <b style={{ color: 'var(--ink)' }}>Education:</b> Advanced Diploma in Media Studies, Arena
          Multimedia.
        </p>
      </div>
    </section>
  );
}
