import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch('https://formsubmit.co/ajax/info@rayze.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          subject,
          message
        })
      });

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 2000);
    } catch (error) {
      setStatus('idle');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] mt-16">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-xl p-8 w-full max-w-md relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative">
                <div className="absolute inset-0 animate-ping">
                  <CheckCircle className="h-16 w-16 text-[#00BF63]" />
                </div>
                <CheckCircle className="h-16 w-16 text-[#00BF63]" />
              </div>
              <h3 className="text-xl font-semibold text-white mt-6">Message Sent!</h3>
              <p className="text-gray-400 mt-2">We'll get back to you soon</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
                <p className="text-gray-400">
                  Have a question? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BF63] focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BF63] focus:border-transparent"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BF63] focus:border-transparent resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#00BF63] text-white py-2 rounded-lg hover:bg-[#00a857] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}