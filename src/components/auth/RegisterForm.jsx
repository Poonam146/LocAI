import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, ArrowRight } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import PasswordInput from './PasswordInput';
import SocialLogin from './SocialLogin';
import Toast from '../ui/Toast';

export const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastState, setToastState] = useState({ isVisible: false, message: '', type: 'info' });

  const navigate = useNavigate();

  const showToast = (message, type = 'info') => {
    setToastState({ isVisible: true, message, type });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Name is required (at least 2 characters).';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter a valid email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (!password) {
      newErrors.password = 'Password must be at least 6 characters.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'Please accept the Terms and Privacy Policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Demo Registration behavior (No API, No real credentials stored)
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Account created successfully!', 'success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }, 800);
  };

  const handleSocialClick = (provider) => {
    showToast(`${provider} social registration coming soon.`, 'info');
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
          Create your LocAI account
        </h1>
        <p className="text-sm text-slate-500">
          Start discovering places tailored to you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name Field */}
        <Input
          label="Full Name"
          type="text"
          id="register-name"
          placeholder="Enter your full name"
          leftIcon={User}
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
          }}
          error={errors.fullName}
        />

        {/* Email Field */}
        <Input
          label="Email Address"
          type="email"
          id="register-email"
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
          id="register-password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          error={errors.password}
        />

        {/* Confirm Password Field */}
        <PasswordInput
          label="Confirm Password"
          id="register-confirm-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
          }}
          error={errors.confirmPassword}
        />

        {/* Terms Checkbox */}
        <div className="space-y-1 pt-1">
          <label className="flex items-start gap-2.5 text-xs text-slate-600 font-medium cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => {
                setAgreedToTerms(e.target.checked);
                if (errors.terms) setErrors((prev) => ({ ...prev, terms: undefined }));
              }}
              className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors mt-0.5"
            />
            <span>
              I agree to the{' '}
              <a href="#terms" onClick={(e) => e.preventDefault()} className="text-indigo-600 hover:underline">
                Terms
              </a>{' '}
              &{' '}
              <a href="#privacy" onClick={(e) => e.preventDefault()} className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && <p className="text-xs text-rose-600 font-medium">{errors.terms}</p>}
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
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>

      {/* Social Login UI */}
      <SocialLogin onSocialClick={handleSocialClick} />

      {/* Bottom Switcher Navigation */}
      <div className="pt-2 text-center text-xs text-slate-500">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors ml-1"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
