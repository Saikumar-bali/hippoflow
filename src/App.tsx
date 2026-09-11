import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { HippoFlowLogo } from './components/HippoFlowLogo';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sign up fields for interactive toggle
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerToast('Logged in successfully to Hippo Flow!');
    }, 600);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerToast('Account created! Welcome to Hippo Flow.');
      setActiveTab('login');
    }, 600);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerToast('Password reset link sent to your email.');
  };

  return (
    <main
      id="blueflame-app"
      className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#424449] select-none"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed top-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0060df] to-[#00b4ff] text-white shadow-xl shadow-[#00b4ff]/25 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Authentication Card */}
      <div
        id="auth-card"
        className="relative w-full max-w-[940px] h-auto min-h-[520px] md:h-[530px] bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,140,255,0.2),0_10px_25px_rgba(0,0,0,0.35)] flex flex-col md:flex-row"
      >
        {/* ================= VECTOR CURVE LAYER (Desktop & Tablet) ================= */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Primary Electric Sky Blue Gradient for Left Shape */}
              <linearGradient id="leftPanelGrad" x1="0%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#0052cc" />
                <stop offset="30%" stopColor="#0080ff" />
                <stop offset="70%" stopColor="#00b4ff" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>

              {/* Top-Right Corner Electric Sky Blue Gradient */}
              <linearGradient id="topRightCornerGrad" x1="50%" y1="50%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0080ff" />
                <stop offset="40%" stopColor="#00b4ff" />
                <stop offset="80%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#67f4ff" />
              </linearGradient>
            </defs>

            {/* TOP-RIGHT CORNER ELECTRIC SKY BLUE SHAPE */}
            <path
              d="M 865,0 
                 C 920,12 980,80 1000,195 
                 L 1000,0 
                 Z"
              fill="url(#topRightCornerGrad)"
            />

            {/* MAIN LEFT ELECTRIC SKY BLUE SHAPE */}
            <path
              d="M 0,0 
                 L 360,0 
                 C 435,30 500,120 500,240 
                 L 500,560 
                 L 175,560 
                 C 95,560 0,515 0,475 
                 L 0,0 
                 Z"
              fill="url(#leftPanelGrad)"
            />
          </svg>
        </div>

        {/* ================= LEFT SECTION (Electric Sky Blue Welcome Back) ================= */}
        <div
          id="left-panel"
          className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-8 md:py-12 md:px-10 bg-[#0080ff] md:bg-transparent overflow-hidden"
        >
          {/* Mobile decorative curves for small screens */}
          <div className="block md:hidden absolute inset-0 w-full h-full pointer-events-none opacity-25">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/20 blur-xl" />
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-cyan-400/30 blur-xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-[290px] mx-auto">
            {/* Hippo Flow Brand Logo Badge */}
            <div
              id="brand-logo-badge"
              className="w-full max-w-[255px] bg-white rounded-2xl py-2.5 px-3.5 flex items-center justify-center shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-[1.02] mb-6"
            >
              <HippoFlowLogo className="w-full" showSubtitle={true} />
            </div>

            {/* Welcome Heading */}
            <h1
              id="welcome-back-heading"
              className="text-white text-[27px] sm:text-[29px] font-bold leading-tight tracking-tight mb-2.5 drop-shadow-[0_2px_4px_rgba(0,40,120,0.4)]"
            >
              Welcome Back!
            </h1>

            {/* Subtitle / Description */}
            <p
              id="welcome-description"
              className="text-white/95 text-[12.5px] sm:text-[13px] leading-relaxed font-normal mb-7 px-2 drop-shadow-[0_1px_3px_rgba(0,40,120,0.35)]"
            >
              To stay connected with us
              <br />
              please login with your personal info
            </p>

            {/* Pill Outline Button: SIGN IN */}
            <button
              id="btn-switch-signin"
              type="button"
              onClick={() => {
                setActiveTab('login');
                triggerToast('Switched to Sign In');
              }}
              className={`w-[180px] py-2.5 rounded-full border-[1.5px] border-white text-white text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer shadow-[0_0_16px_rgba(0,229,255,0.35)] ${
                activeTab === 'login'
                  ? 'bg-white/20 shadow-inner'
                  : 'hover:bg-white/25'
              }`}
            >
              SIGN IN
            </button>
          </div>

          {/* Footer on Left Panel: CREATOR HERE | DIRECTOR HERE */}
          <div
            id="footer-credits"
            className="mt-8 md:mt-0 md:absolute md:bottom-5 md:left-0 md:right-0 text-center text-white/90 text-[9.5px] font-semibold tracking-[0.14em] uppercase pointer-events-none drop-shadow-sm"
          >
            CREATOR HERE &nbsp;|&nbsp; DIRECTOR HERE
          </div>
        </div>

        {/* ================= RIGHT SECTION (Login Form) ================= */}
        {/* Notice md:bg-transparent so the top-right corner SVG shows through */}
        <div
          id="right-panel"
          className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 md:bg-transparent"
        >
          <div className="w-full max-w-[340px] flex flex-col items-center">
            {/* Main Heading: "welcome" */}
            <h2
              id="right-heading"
              className="text-[#0070f3] text-[32px] sm:text-[36px] font-bold tracking-tight leading-none mb-1.5 lowercase"
            >
              {activeTab === 'login' ? 'welcome' : 'sign up'}
            </h2>

            {/* Subheading: "Login in to your account to continue" */}
            <p
              id="right-subheading"
              className="text-[#666666] text-[12.5px] sm:text-[13px] font-normal mb-7 text-center"
            >
              {activeTab === 'login'
                ? 'Login in to your account to continue'
                : 'Create your account to get started'}
            </p>

            {/* Form */}
            <form
              id="auth-form"
              onSubmit={activeTab === 'login' ? handleLogin : handleSignUp}
              className="w-full flex flex-col items-center"
            >
              {/* Full Name for Signup only */}
              {activeTab === 'signup' && (
                <div className="w-full mb-3.5">
                  <input
                    id="input-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name................"
                    className="w-full h-[46px] bg-[#e6f6ff] text-[#003865] placeholder:text-[#00a6ff]/70 text-[13.5px] px-6 rounded-full outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00b4ff] focus:bg-[#daf2ff]"
                  />
                </div>
              )}

              {/* Email Input */}
              <div className="w-full mb-3.5 relative">
                <input
                  id="input-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email................"
                  className="w-full h-[46px] bg-[#e6f6ff] text-[#003865] placeholder:text-[#00a6ff]/70 text-[13.5px] px-6 rounded-full outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00b4ff] focus:bg-[#daf2ff]"
                />
              </div>

              {/* Password Input */}
              <div className="w-full mb-2 relative">
                <input
                  id="input-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password................"
                  className="w-full h-[46px] bg-[#e6f6ff] text-[#003865] placeholder:text-[#00a6ff]/70 text-[13.5px] px-6 pr-12 rounded-full outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00b4ff] focus:bg-[#daf2ff]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00a6ff] hover:text-[#0070f3] transition-colors p-1"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Confirm Password for Signup */}
              {activeTab === 'signup' && (
                <div className="w-full mb-2.5 relative">
                  <input
                    id="input-confirm-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password........"
                    className="w-full h-[46px] bg-[#e6f6ff] text-[#003865] placeholder:text-[#00a6ff]/70 text-[13.5px] px-6 rounded-full outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00b4ff] focus:bg-[#daf2ff]"
                  />
                </div>
              )}

              {/* Forgot password link - centered under password input */}
              {activeTab === 'login' && (
                <div className="w-full flex justify-center mb-5 mt-1">
                  <a
                    id="link-forgot-password"
                    href="#forgot"
                    onClick={handleForgotPassword}
                    className="text-[#666666] text-[11px] hover:text-[#0070f3] hover:underline transition-colors cursor-pointer"
                  >
                    Forgot your password?
                  </a>
                </div>
              )}

              {/* LOG IN / SIGN UP Pill Button */}
              <button
                id="btn-submit-action"
                type="submit"
                disabled={isSubmitting}
                className="w-[145px] h-[36px] bg-gradient-to-r from-[#0070f3] via-[#0099ff] to-[#00d4ff] hover:from-[#005cd2] hover:to-[#00b4ff] active:scale-[0.98] text-white font-bold text-[13px] tracking-wider rounded-full shadow-lg shadow-[#00a6ff]/40 flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-1"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : activeTab === 'login' ? (
                  'LOG IN'
                ) : (
                  'SIGN UP'
                )}
              </button>
            </form>

            {/* Bottom account switch text */}
            <div id="account-switch-text" className="text-[12.5px] text-[#666666] mt-4 text-center">
              {activeTab === 'login' ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button
                    id="btn-switch-signup"
                    type="button"
                    onClick={() => {
                      setActiveTab('signup');
                      triggerToast('Switched to Sign Up');
                    }}
                    className="text-[#0070f3] font-semibold hover:underline cursor-pointer ml-1 inline-block"
                  >
                    sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    id="btn-return-login"
                    type="button"
                    onClick={() => {
                      setActiveTab('login');
                      triggerToast('Switched to Login');
                    }}
                    className="text-[#0070f3] font-semibold hover:underline cursor-pointer ml-1 inline-block"
                  >
                    sign in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
