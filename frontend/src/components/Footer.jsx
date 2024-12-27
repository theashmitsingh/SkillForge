import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 mt-10 border-t border-zinc-600">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Section 1: Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          {/* Section 2: Policies */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Section 3: Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Blog</a></li>
              <li><a href="#" className="hover:text-red-500">Help Center</a></li>
              <li><a href="#" className="hover:text-red-500">FAQs</a></li>
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Facebook</a></li>
              <li><a href="#" className="hover:text-red-500">Twitter</a></li>
              <li><a href="#" className="hover:text-red-500">Instagram</a></li>
              <li><a href="#" className="hover:text-red-500">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" pt-6 text-center text-sm text-zinc-400">
          <p>&copy; 2024 SkillForge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
