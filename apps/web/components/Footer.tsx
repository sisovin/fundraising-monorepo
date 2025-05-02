import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fundraising Platform. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
