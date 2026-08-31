import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Shield, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LocAI Brand & Tagline */}
          <div className="space-y-3 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <MapPin className="w-4 h-4 fill-white/20" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Loc<span className="text-indigo-600">AI</span>
              </span>
            </Link>
            <p className="text-xs font-medium text-slate-500">
              Your AI Local Guide
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Discover nearby spots, explore vibrant neighborhood landmarks, and plan personalized itineraries with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/explore" className="hover:text-indigo-600 transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/places" className="hover:text-indigo-600 transition-colors">
                  Places Directory
                </Link>
              </li>
              <li>
                <Link to="/trip-planner" className="hover:text-indigo-600 transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-indigo-600 transition-colors">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#about" onClick={(e) => e.preventDefault()} className="hover:text-indigo-600 transition-colors">
                  About LocAI
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => e.preventDefault()} className="hover:text-indigo-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-indigo-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-indigo-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-500">
              Follow LocAI for neighborhood guide updates and travel tips.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
                <button
                  key={platform}
                  onClick={(e) => e.preventDefault()}
                  aria-label={platform}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 LocAI. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
