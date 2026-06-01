import { Github, Youtube, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Reverse Engineer',
  'Automation Developer',
  'Full Stack Developer',
];

function useTypingAnimation(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isWaiting) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);
        if (next.length === currentWord.length) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isWaiting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
    </div>
  );
}

export default function Hero() {
  const typedText = useTypingAnimation(roles);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background layers */}
      <FloatingOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950 pointer-events-none" />

      {/* Main content */}
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Avatar */}
        <div
          className={`mb-10 inline-block transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
          }`}
        >
          <div className="relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
            <div className="relative w-36 h-36 rounded-full bg-slate-900/80 backdrop-blur-xl p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50">
                <span className="text-5xl font-black bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent select-none">
                  h4rd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:300%_300%]">
            Avatart0Dev
          </span>
        </h1>

        {/* Handle */}
        <p
          className={`text-xl md:text-2xl text-slate-400 mb-3 font-mono tracking-wide transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          @h4rdl0ckl3z
        </p>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-2 text-slate-500 mb-8 transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Thailand (UTC +7)</span>
        </div>

        {/* Typing animation */}
        <div
          className={`mb-6 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-lg md:text-xl text-slate-200 font-mono">
              {typedText}
              <span className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 animate-blink align-middle" />
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I analyze how systems really work — then build solutions on top of that understanding.
          <br />
          <span className="text-slate-500">
            Specialized in system analysis, automation, and end-to-end development.
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://github.com/h4rdl0ckl3z"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 px-8 py-3.5 bg-slate-800/60 hover:bg-slate-700/80 text-white rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/30 backdrop-blur-sm"
          >
            <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCDVWbPPx5-WJtcn8YZ_k0Bg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-red-600/90 to-red-500/90 hover:from-red-500 hover:to-red-400 text-white rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-red-500/20 border border-red-500/20 hover:border-red-400/40"
          >
            <Youtube className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium">YouTube</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          className={`group flex flex-col items-center gap-2 mx-auto transition-all duration-1000 delay-[900ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs text-slate-500 uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors duration-300">
            Scroll
          </span>
          <div className="scroll-indicator">
            <div className="scroll-indicator-dot" />
          </div>
        </button>
      </div>
    </section>
  );
}
