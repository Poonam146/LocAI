import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Sparkles,
  Heart,
  Menu,
  X,
  Compass,
  Map,
  Sparkle
} from 'lucide-react';
import { cn } from '../../utils/cn';
import Avatar from '../ui/Avatar';
import { MOCK_USER } from '../../data/mockData';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'Places', path: '/places' },
    { label: 'Trip Planner', path: '/trip-planner' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo & Icon */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            aria-label="LocAI Home"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Loc<span className="text-indigo-600">AI</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Your AI Local Guide
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: Desktop Quick Action Group */}
          <div className="hidden md:flex items-center gap-3">
            {/* Ask LocAI Button */}
            <button
              onClick={() => navigate('/assistant')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-sm shadow-indigo-500/20 transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200 animate-pulse" />
              <span>Ask LocAI</span>
            </button>

            {/* Saved Places Heart Icon */}
            <button
              onClick={() => navigate('/saved')}
              className="p-2 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Saved Places"
              title="Saved Places"
            >
              <Heart className="w-5 h-5" />
            </button>

            <div className="h-4 w-px bg-slate-200 my-auto" />

            {/* User Profile Avatar */}
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="User Profile"
              title={`Logged in as ${MOCK_USER.name} (${MOCK_USER.email})`}
            >
              <Avatar name={MOCK_USER.name} size="sm" status="online" />
              <span className="text-xs font-semibold text-slate-700 pr-1 hidden lg:inline">
                {MOCK_USER.name}
              </span>
            </button>
          </div>

          {/* MOBILE: Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 max-w-full overflow-hidden">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            {/* Ask LocAI Mobile Button */}
            <NavLink
              to="/assistant"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Ask LocAI</span>
            </NavLink>

            {/* Saved Places Mobile Link */}
            <NavLink
              to="/saved"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-rose-50 text-rose-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                )
              }
            >
              <Heart className="w-4 h-4 text-rose-500" />
              <span>Saved Places</span>
            </NavLink>

            {/* User Profile Mobile Link */}
            <NavLink
              to="/profile"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                )
              }
            >
              <Avatar name={MOCK_USER.name} size="sm" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-800 leading-tight">
                  {MOCK_USER.name}
                </span>
                <span className="text-[11px] text-slate-400">{MOCK_USER.email}</span>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
