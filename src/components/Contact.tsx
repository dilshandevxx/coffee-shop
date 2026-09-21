import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-coffee-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-coffee-600 font-medium tracking-widest uppercase text-sm mb-3">
            Visit Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-900">
            Come Say Hello
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-coffee-100">
              <MapPin className="w-6 h-6 text-coffee-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-coffee-900">Location</h3>
                <p className="text-coffee-600 text-sm mt-1">
                  42 Roastery Lane<br />
                  Portland, OR 97205
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-coffee-100">
              <Clock className="w-6 h-6 text-coffee-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-coffee-900">Hours</h3>
                <p className="text-coffee-600 text-sm mt-1">
                  Mon – Fri: 7:00 AM – 7:00 PM<br />
                  Sat – Sun: 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-coffee-100">
              <Phone className="w-6 h-6 text-coffee-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-coffee-900">Phone</h3>
                <p className="text-coffee-600 text-sm mt-1">(503) 555-0142</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-coffee-100">
              <Mail className="w-6 h-6 text-coffee-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-coffee-900">Email</h3>
                <p className="text-coffee-600 text-sm mt-1">hello@brewhaven.coffee</p>
              </div>
            </div>
          </div>

          {/* Simple contact form */}
          <form className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-coffee-100 space-y-5">
            <h3 className="font-serif text-xl font-bold text-coffee-900 mb-2">
              Send us a message
            </h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-coffee-700 hover:bg-coffee-600 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
