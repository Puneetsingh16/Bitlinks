export default function About() {
  return (
    <main className="bg-purple-50 min-h-screen py-8 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 md:mb-8">About BitLinks</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              BitLinks is dedicated to providing the simplest and most secure URL shortening service available. 
              We believe that your privacy matters, which is why we created a URL shortener that doesn't track 
              your data or require you to sign up for an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Why Choose BitLinks?</h2>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>No Registration Required:</strong> Start shortening URLs instantly without creating an account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Privacy First:</strong> We don't track, sell, or store any of your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Simple & Fast:</strong> Create custom short URLs in seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Custom URLs:</strong> Choose your own short URL text for better branding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Reliable:</strong> Your shortened URLs work consistently and efficiently</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Our Values</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              <strong>Privacy:</strong> Your data is yours alone. We never collect or share personal information.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              <strong>Simplicity:</strong> No complicated dashboards or confusing features. Just shortened URLs.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong>Transparency:</strong> We're open about what we do and how we operate.
            </p>
          </section>

          <div className="bg-purple-100 border-l-4 border-purple-500 p-4 md:p-6 rounded">
            <p className="text-gray-800 text-base md:text-lg">
              <strong>BitLinks:</strong> Making the web shorter, one link at a time. 
              Start shortening your URLs today and experience the simplicity!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
