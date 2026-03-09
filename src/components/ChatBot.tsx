import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, Phone } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME = '¡Hola! Soy Uli, el asistente de Uldeco 👋\n¿En qué puedo ayudarte? Puedo resolver tus dudas sobre nuestros servicios o ayudarte a pedir un presupuesto gratuito.';

const SUGGESTIONS = [
  '¿Cuánto cuesta quitar el gotelé?',
  'Quiero pedir presupuesto',
  '¿En qué zonas trabajáis?',
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setShowPulse(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Lo siento, ha ocurrido un error. Puedes llamarnos directamente al 697 87 38 26.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat de ayuda'}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-teal-700 dark:bg-teal-600 text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-teal-600 animate-ping opacity-50" />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {isOpen
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-6 h-6" /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle className="w-6 h-6" /></motion.span>
          }
        </AnimatePresence>
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 left-6 z-50 w-80 bg-white dark:bg-teal-950 rounded-2xl shadow-2xl shadow-teal-900/20 dark:shadow-teal-950/50 border border-teal-100 dark:border-teal-800/50 flex flex-col overflow-hidden"
            style={{ height: 480 }}
          >
            {/* Header */}
            <div className="bg-teal-700 dark:bg-teal-800 px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-olive-500 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">Uli · Asistente Uldeco</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <p className="text-white/70 text-xs truncate">Disponible 24/7</p>
                </div>
              </div>
              <a
                href="tel:+34697873826"
                title="Llamar ahora"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-teal-700 text-white rounded-br-sm'
                      : 'bg-teal-50 dark:bg-teal-900/60 text-teal-900 dark:text-teal-100 rounded-bl-sm border border-teal-100 dark:border-teal-800/50'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-teal-50 dark:bg-teal-900/60 border border-teal-100 dark:border-teal-800/50 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick suggestions */}
              {showSuggestions && !isLoading && (
                <div className="flex flex-col gap-2 pt-1">
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-left text-xs px-3 py-2 rounded-xl border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-800/50 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-3 py-3 border-t border-teal-100 dark:border-teal-800/50 flex gap-2 flex-shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 rounded-full text-sm border border-teal-100 dark:border-teal-800/50 focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 bg-teal-50/30 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100 placeholder-teal-400 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-full bg-teal-700 dark:bg-teal-600 text-white flex items-center justify-center disabled:opacity-40 hover:bg-teal-800 dark:hover:bg-teal-500 transition-colors flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
