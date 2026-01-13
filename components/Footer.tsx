import React from 'react';
import { LayoutGrid, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pb-12 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
                    <LayoutGrid size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">ChronoTask</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500 mb-8">
              The all-in-one workspace for your tasks, notes, and team collaboration. Designed for speed and efficiency.
            </p>
            <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"><Twitter size={18} /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"><Linkedin size={18} /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"><Facebook size={18} /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 text-sm font-bold text-gray-900">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold text-gray-900">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a> <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full ml-1">Hiring</span></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold text-gray-900">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
            </ul>
          </div>

           <div className="lg:col-span-1">
             <h4 className="mb-6 text-sm font-bold text-gray-900">Download</h4>
             <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                 <span>iOS & Android</span>
             </button>
           </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} ChronoTask Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
             <a href="#" className="hover:text-gray-900">Privacy Policy</a>
             <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;