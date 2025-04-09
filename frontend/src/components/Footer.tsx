import React from 'react';
import { Github, Linkedin, Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: MessageSquare, href: 'https://wa.me/your-number', label: 'WhatsApp' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Globe, href: 'https://your-website.com', label: 'Site web' }
  ];

  return (
    <footer className="bg-[#2A5C82] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 SpamGuard. Tous droits réservés.</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-white/80">
          <a href="/mentions-legales" className="hover:text-white">Mentions légales</a>
          {' • '}
          <a href="/confidentialite" className="hover:text-white">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;