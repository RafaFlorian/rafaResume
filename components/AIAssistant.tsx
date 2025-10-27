
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { askAIAssistant } from '../services/geminiService';

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, role: 'model', text: "Hello! I am John's AI assistant. Ask me anything about his skills, projects, or experience." }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    const modelMessageId = Date.now() + 1;
    setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);

    try {
      const stream = await askAIAssistant(input);
      for await (const chunk of stream) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === modelMessageId
              ? { ...msg, text: msg.text + chunk }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('Error with AI assistant:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === modelMessageId
            ? { ...msg, text: "Sorry, I'm having trouble connecting right now." }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-cyan-500 text-white rounded-full p-4 shadow-lg hover:bg-cyan-400 transition-transform transform hover:scale-110 z-50"
        aria-label="Open AI Assistant"
      >
        <BotIcon />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      <div className={`fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-md h-[70vh] bg-[#0A0A1A]/80 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl flex flex-col transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="font-orbitron text-lg text-cyan-400">AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><CloseIcon /></button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && <div className="w-8 h-8 flex-shrink-0 bg-gray-700 rounded-full flex items-center justify-center"><BotIcon /></div>}
              <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
                <p className="whitespace-pre-wrap">{msg.text}{isLoading && msg.id === messages[messages.length - 1].id && <span className="inline-block w-2 h-2 ml-2 bg-white rounded-full animate-pulse"></span>}</p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
          <div className="flex items-center bg-gray-800 rounded-lg p-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my skills..."
              className="flex-1 bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="bg-cyan-600 text-white rounded-md p-2 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-cyan-500 transition-colors">
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
