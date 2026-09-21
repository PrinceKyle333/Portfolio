import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailItem = SOCIAL_LINKS.find((l) => l.type === 'email');
  const emailValue = emailItem?.displayValue || 's.reston.princekylechristian@cmu.edu.ph';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailValue);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-36 border-b border-neutral-200 bg-neutral-50/50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">05 //</span>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            CONNECT & COLLABORATE
          </span>
          <div className="h-px bg-neutral-200 flex-1 ml-4" />
        </div>

        <div className="max-w-4xl space-y-12">
          {/* Main Headings */}
          <div className="space-y-6">
            <h2
              id="contact-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950"
            >
              Let&apos;s build something useful.
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Have a project, collaboration, or opportunity in mind? Feel free to reach out.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <a
              href={`mailto:${emailValue}?subject=Project%20Collaboration%20with%20Prince%20Kyle`}
              id="contact-btn-get-in-touch"
              className="group inline-flex items-center gap-3 px-8 py-5 text-lg font-medium text-white bg-neutral-950 hover:bg-neutral-800 transition-all focus-visible:outline-2 shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Placeholders for Contact Channels */}
          <div className="pt-8 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Email Channel */}
            <div className="border border-neutral-200 bg-white p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-950 flex items-center gap-1 px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-neutral-900" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-xs text-neutral-900 break-all">
                {emailValue}
              </div>

              <a
                href={`mailto:${emailValue}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors pt-1"
              >
                <span>Compose email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* GitHub Channel */}
            <div className="border border-neutral-200 bg-white p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </span>
                <span className="text-[10px] font-mono text-neutral-400">PLACEHOLDER</span>
              </div>

              <div className="font-mono text-xs text-neutral-900">
                github.com/princekyle-reston
              </div>

              <a
                href="https://github.com/princekyle-reston"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors pt-1"
              >
                <span>View repositories</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Channel */}
            <div className="border border-neutral-200 bg-white p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </span>
                <span className="text-[10px] font-mono text-neutral-400">PLACEHOLDER</span>
              </div>

              <div className="font-mono text-xs text-neutral-900">
                linkedin.com/in/princekyle-reston
              </div>

              <a
                href="https://linkedin.com/in/princekyle-reston"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors pt-1"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
