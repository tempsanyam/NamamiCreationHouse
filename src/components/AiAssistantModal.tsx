import React, { useState, useRef, useEffect } from 'react';
import { OFFICIAL_BRAND } from '../data/mockData';
import { 
  Bot, X, Send, Sparkles, MessageSquare, 
  ArrowUpRight, CheckCircle2, User 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  whatsappLink?: string;
}

export const AiAssistantModal: React.FC<AiAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I am **Namami AI**, your senior creative consultant. 

Tell me about your project goals (e.g. *“I need a 4K Jainism temple documentary”* or *“I want 15 Instagram Reels with AI avatars”*). I will recommend creative directions, turnarounds, and generate a custom WhatsApp quote!`,
      whatsappLink: OFFICIAL_BRAND.whatsAppUrl
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsgText = input.trim();
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: userMsgText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMsgText,
          conversationHistory: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text
          }))
        })
      });

      const data = await response.json();
      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || "Thank you! Please connect directly with our creative lead on WhatsApp (+91 8815954802) for an instant custom quote.",
        whatsappLink: data.whatsappLink || OFFICIAL_BRAND.whatsAppUrl
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: `Thank you for your inquiry regarding "${userMsgText}". Our team is ready to assist you on WhatsApp (+91 8815954802)!`,
          whatsappLink: `https://wa.me/918815954802?text=${encodeURIComponent(`Hello Namami Creation House, I have a project inquiry regarding: ${userMsgText}`)}`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[540px] z-50 rounded-3xl bg-[#0B1F2A]/95 border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 bg-[#102B3A] border-b border-[#D4AF37]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-white flex items-center gap-1">
                  <span>Namami AI Consultant</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </h4>
                <p className="text-[10px] text-amber-300 font-mono">Creative Recommendation Engine</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#16384A] text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-amber-400 text-[#0B1F2A] font-medium rounded-tr-none'
                      : 'bg-[#102B3A]/90 text-slate-200 border border-[#D4AF37]/20 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{m.text}</p>

                  {m.whatsappLink && m.sender === 'ai' && (
                    <a
                      href={m.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-500 transition-colors shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Continue On WhatsApp</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 items-center text-amber-400 text-xs font-mono">
                <Bot className="w-4 h-4 animate-spin" />
                <span>Namami AI is crafting recommendation...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-[#102B3A] border-t border-[#D4AF37]/30 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your creative project goals..."
              className="flex-1 px-4 py-2.5 rounded-full bg-[#0B1F2A] border border-[#D4AF37]/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0B1F2A] font-bold hover:brightness-110 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
