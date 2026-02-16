'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal')
    revealElements.forEach((el) => observer.observe(el))

    // Initial animations for visible elements
    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          setTimeout(() => el.classList.add('revealed'), index * 200);
        }
      });
    }, 100);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-sage/20">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="bg-deep-teal text-white px-4 py-2 rounded font-bold text-lg">
                AIMin
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-deep-teal hover:text-warm-gold transition-colors">Services</a>
              <a href="#about" className="text-deep-teal hover:text-warm-gold transition-colors">About Anna</a>
              <a href="#retreats" className="text-deep-teal hover:text-warm-gold transition-colors">Retreats</a>
              <a href="#contact" className="btn-primary">Connect</a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-deep-teal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-sage via-light-sage to-soft-teal">
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in">
          <h1 className="text-hero mb-6">
            Conscious Living<br />
            <span className="text-warm-gold">& Leadership</span>
          </h1>
          <p className="text-large mb-8 max-w-2xl mx-auto opacity-90">
            Transform your leadership through authentic awareness, spiritual development, 
            and the courage to lead from your deepest truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#coaching" className="btn-primary">
              Explore Coaching
            </a>
            <a href="#retreats" className="btn-secondary">
              View Retreats
            </a>
          </div>
        </div>
      </section>

      {/* Anna Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="text-section-title mb-6">
                Meet Anna
              </h2>
              <p className="text-large text-gray-700 mb-6 leading-relaxed">
                With over 25 years of experience, Anna Ugander bridges the worlds of 
                executive leadership and spiritual development. Having worked with 
                Fortune 500 companies like IKEA, E.ON, and Volvo, she brings a unique 
                perspective to conscious leadership.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Former TV Gladiator, world championship athlete, and seasoned therapist, 
                Anna guides leaders to discover their authentic power through breathwork, 
                shamanic practices, and deep inner work.
              </p>
              <a href="/about" className="btn-primary">
                Anna's Story
              </a>
            </div>
            <div className="scroll-reveal relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-light-sage flex items-center justify-center">
                <div className="text-deep-teal font-playfair text-2xl">
                  Anna Portrait
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-section-title mb-6">
              Pathways to <span className="text-warm-gold">Transformation</span>
            </h2>
            <p className="text-large text-gray-600 max-w-3xl mx-auto">
              Choose your journey of conscious development through personalized coaching, 
              leadership workshops, or transformative retreats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Coaching Card */}
            <div className="service-card scroll-reveal group">
              <div className="h-48 mb-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-soft-teal to-sage flex items-center justify-center">
                <div className="text-white font-lato font-medium">
                  Coaching in Nature
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl text-deep-teal mb-4">
                Coaching & Mentoring
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Monthly coaching sessions combining traditional coaching with Human Design, 
                breathwork, and spiritual guidance for holistic transformation.
              </p>
              <a href="/coaching" className="text-warm-gold font-medium hover:text-deep-teal transition-colors">
                Learn More →
              </a>
            </div>

            {/* Leadership Card */}
            <div className="service-card scroll-reveal group">
              <div className="h-48 mb-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-sage to-light-sage flex items-center justify-center">
                <div className="text-deep-teal font-lato font-medium">
                  Leadership Workshop
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4 18v-6h2.5l-2.54-7.63A3.01 3.01 0 0 0 17.1 6H14.9c-1.3 0-2.4.84-2.85 2.37L9.5 16H12v6h8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl text-deep-teal mb-4">
                Leadership & Management
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Corporate workshops and team development for organizations ready to 
                embrace conscious leadership and values-based management.
              </p>
              <a href="/leadership" className="text-warm-gold font-medium hover:text-deep-teal transition-colors">
                Learn More →
              </a>
            </div>

            {/* Retreats Card */}
            <div className="service-card scroll-reveal group">
              <div className="h-48 mb-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-sage to-soft-teal flex items-center justify-center">
                <div className="text-white font-lato font-medium">
                  Retreat in Nature
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,6V4H10V6H14M20,8A2,2 0 0,1 22,10V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V10C2,8.89 2.9,8 4,8H20Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-2xl text-deep-teal mb-4">
                Transformative Retreats
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Immersive experiences in Sweden and abroad, combining breathwork, 
                shamanic ceremonies, yoga, and deep personal transformation.
              </p>
              <a href="/retreats" className="text-warm-gold font-medium hover:text-deep-teal transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-sage/20">
        <div className="container-custom">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-section-title mb-6">
              Trusted by <span className="text-warm-gold">Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl scroll-reveal">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-deep-teal text-white px-6 py-3 rounded-full text-lg font-bold">
                  IKEA
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 text-center">
                "Anna's unique approach to leadership development has transformed 
                how our teams connect and collaborate. Her insights are invaluable."
              </p>
              <div className="text-sm text-gray-500 text-center">
                — Leadership Team, IKEA
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl scroll-reveal">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-deep-teal text-white px-6 py-3 rounded-full text-lg font-bold">
                  E.ON
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 text-center">
                "Working with Anna brought a new dimension to our management approach. 
                Her methods create lasting change in organizational culture."
              </p>
              <div className="text-sm text-gray-500 text-center">
                — Executive Team, E.ON
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl scroll-reveal">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-deep-teal text-white px-6 py-3 rounded-full text-lg font-bold">
                  Volvo
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 text-center">
                "Anna's workshops on conscious leadership have enhanced our team 
                dynamics and improved our decision-making processes significantly."
              </p>
              <div className="text-sm text-gray-500 text-center">
                — Management Team, Volvo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-deep-teal text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="font-playfair text-4xl md:text-6xl mb-6">
              Ready to Lead from <span className="text-warm-gold">Within?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Begin your journey of conscious leadership with a complimentary discovery call. 
              Explore how authentic awareness can transform your leadership and life.
            </p>
            <a href="/contact" className="btn-primary bg-warm-gold hover:bg-warm-gold/90">
              Book Your Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-white text-navy px-4 py-2 rounded font-bold mb-4 inline-block">
                AIMin
              </div>
              <p className="text-gray-300 leading-relaxed">
                Conscious living and leadership development for authentic transformation.
              </p>
            </div>

            <div>
              <h4 className="font-playfair text-xl mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/coaching" className="block text-gray-300 hover:text-warm-gold transition-colors">Coaching & Mentoring</a>
                <a href="/leadership" className="block text-gray-300 hover:text-warm-gold transition-colors">Leadership Development</a>
                <a href="/retreats" className="block text-gray-300 hover:text-warm-gold transition-colors">Retreats</a>
              </div>
            </div>

            <div>
              <h4 className="font-playfair text-xl mb-4">Company</h4>
              <div className="space-y-2">
                <a href="/about" className="block text-gray-300 hover:text-warm-gold transition-colors">About Anna</a>
                <a href="/blog" className="block text-gray-300 hover:text-warm-gold transition-colors">Blog</a>
                <a href="/contact" className="block text-gray-300 hover:text-warm-gold transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-playfair text-xl mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="https://open.spotify.com/artist/anna" className="block text-gray-300 hover:text-warm-gold transition-colors">Spotify</a>
                <a href="https://youtube.com/anna" className="block text-gray-300 hover:text-warm-gold transition-colors">YouTube</a>
                <a href="mailto:anna@aimin.se" className="block text-gray-300 hover:text-warm-gold transition-colors">anna@aimin.se</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} AIMin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}