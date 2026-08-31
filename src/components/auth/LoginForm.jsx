import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import PasswordInput from './PasswordInput';
import SocialLogin from './SocialLogin';
import Toast from '../ui/Toast';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastState, setToastState] = useState({ isVisible: false, message: '', type: 'info' });

  const navigate = useNavigate();

  const showToast = (message, type = 'info') => {
    setToastState({ isVisible: true, message, type });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Please enter your password.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Demo Authentication behavior (No API, No real credentials stored)
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Demo login successful!', 'success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }, 800);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    showToast('Password reset link coming soon.', 'info');
  };

  const handleSocialClick = (provider) => {
    showToast(`${provider} social login coming soon.`, 'info');
  };

  return (
    <div className="space-y-6">
      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState((prev) => ({ ...prev, isVisible: false }))}
      />

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-slate-500">
          Sign in to continue exploring with LocAI.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Email Field */}
        <Input
          label="Email Address"
          type="email"
          id="login-email"
          placeholder="Enter your email"
          leftIcon={Mail}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          error={errors.email}
        />

        {/* Password Field */}
        <PasswordInput
          label="Password"
          id="login-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          error={errors.password}
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 text-slate-600 font-medium cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors outline-none focus-visible:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Primary Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          rightIcon={!isSubmitting ? ArrowRight : undefined}
          className="w-full mt-2 font-bold bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20"
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      {/* Social Login UI */}
      <SocialLogin onSocialClick={handleSocialClick} />

      {/* Bottom Switcher Navigation */}
      <div className="pt-2 text-center text-xs text-slate-500">
        Don't have an account?{' '}
        <Link
          to="/register"
          className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors ml-1"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
