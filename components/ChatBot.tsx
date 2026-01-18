
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'გამარჯობა! მე ვარ აუტოპორტის ასისტენტი. რით შემიძლია დაგეხმაროთ?'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setLoading(true);

    try {
      // Use process.env.API_KEY directly as per @google/genai guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'You are an auto-import expert for AutoPort Georgia. You help customers with customs calculation and car import. You speak Georgian.'
        }
      });
      // response.text is a property getter, do not call it as a function
      setMessages(prev => [...prev, {role: 'bot', text: response.text || 'ბოდიში...'}]);
    } catch (err) {
      setMessages(prev => [...prev, {role: 'bot', text: 'შეცდომაა...'}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white border border-slate-200 w-80 sm:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-4 bg-[#191c30] flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <Bot size={20} className="text-sky-400" />
              <h4 className="font-bold text-sm">AI ასისტენტი</h4>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#191c30] text-white' : 'bg-white text-[#191c30] border border-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="relative">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none" placeholder="კითხვა..." />
              <button onClick={handleSend} className="absolute right-2 top-2 bg-[#191c30] text-white p-2 rounded-lg"><Send size={16} /></button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-[#191c30] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all group">
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
