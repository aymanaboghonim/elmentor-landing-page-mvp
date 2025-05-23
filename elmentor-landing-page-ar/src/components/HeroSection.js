import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <img
          src={process.env.PUBLIC_URL + '/elmentor_logo.png'}
          alt="Elmentor Program logo"
          className="elmentor-logo"
          style={{maxWidth: '180px', marginBottom: '28px'}}
        />
        <h1 className="hero-title">Elmentor Program</h1>
        <p className="hero-subtitle">
          The Elmentor Program is an exclusive, global community of approximately 150 members representing over 20 countries. Our members span a wide range of experience—from early-career professionals to seasoned experts with up to 25 years in the field.
        </p>
        <p className="hero-mission">
          <strong>Our goal:</strong> To create a space where knowledge is exchanged freely, and continuous learning is embedded into everything we do.
        </p>
        <a href="#activities" className="hero-cta" aria-label="Join the Movement">Join the Movement</a>
        <div className="hero-links" role="navigation" aria-label="Key Resources">
          <a href="https://github.com/ElmentorProgram/.github/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="hero-link">مدونة السلوك</a>
          <a href="https://devopsvisions.github.io/" target="_blank" rel="noopener noreferrer" className="hero-link">مدونة المجتمع</a>
          <a href="https://github.com/ElmentorProgram" target="_blank" rel="noopener noreferrer" className="hero-link">مستودع GitHub</a>
          <a href="https://www.facebook.com/mradwandevops" target="_blank" rel="noopener noreferrer" className="hero-link">فيسبوك</a>
          <a href="https://www.youtube.com/@MRadwanArabic" target="_blank" rel="noopener noreferrer" className="hero-link">يوتيوب</a>
          {/* Language Switcher */}
          <a href="https://aymanaboghonim.github.io/elmentor-landing-page-mvp/" className="hero-link" style={{fontWeight:700, border:'1px solid #2563eb', marginLeft:8}} aria-label="Switch to English">English</a>
        </div>
        <div className="hero-video">
          <h3 className="hero-video-title">ما هو برنامج المنتور وكيف يمكن أن يساعدك؟</h3>
          <div className="hero-video-embed">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hZ2oxrJg2Cc?start=5"
              title="ما هو برنامج المنتور وكيف يمكن أن يساعدك؟"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
