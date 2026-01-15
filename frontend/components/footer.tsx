import { Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Notate</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Your personal knowledge assistant. Capture, organize, and use your information with AI-powered intelligence.
            </p>
          </div>

          {/* Contact & Links */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@wayvi-ai.com"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <Mail className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  contact@wayvi-ai.com
                </a>
                <a
                  href="https://wayvic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  wayvic.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#capture" className="hover:text-blue-600 transition-colors">
                    Capture
                  </a>
                </li>
                <li>
                  <a href="#organize" className="hover:text-blue-600 transition-colors">
                    Organize
                  </a>
                </li>
                <li>
                  <a href="#use" className="hover:text-blue-600 transition-colors">
                    Use
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-blue-600 transition-colors">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} VW.ai (•‿•) All rights reserved
          </p>
          <p className="text-gray-400">
            Crafted for macOS
          </p>
        </div>
      </div>
    </footer>
  )
}
