import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Paintbrush } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "Quitar Gotelé", "Alisado de Paredes", "Pintura Interior", "Pintura Exterior / Fachadas",
  "Estuco Veneciano", "Microcemento", "Papel Pintado", "Pintura Decorativa", "Otro"
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); onClose(); }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-teal-950/50 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white border border-teal-100 rounded-3xl shadow-2xl z-50 overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-6 md:p-8 border-b border-teal-50 flex justify-between items-center bg-white">
              <div>
                <h2 className="font-display text-2xl font-bold text-teal-900 tracking-tight">Agendar Reunión</h2>
                <p className="text-teal-600/70 text-sm mt-1">Cuéntanos tu proyecto y te contactaremos en breve.</p>
              </div>
              <button onClick={onClose} className="p-2 text-teal-400 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">¡Solicitud enviada!</h3>
                  <p className="text-teal-600/70">Nos pondremos en contacto contigo muy pronto para confirmar la reunión.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                        <User className="w-4 h-4 text-teal-400" /> Nombre completo
                      </label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-teal-50/30 focus:bg-white" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-teal-400" /> Teléfono
                      </label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-teal-50/30 focus:bg-white" placeholder="600 000 000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-teal-400" /> Correo electrónico
                    </label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-teal-50/30 focus:bg-white" placeholder="juan@ejemplo.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                      <Paintbrush className="w-4 h-4 text-teal-400" /> Servicio de interés
                    </label>
                    <select required defaultValue="" className="w-full px-4 py-3 rounded-xl border border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-teal-50/30 focus:bg-white appearance-none">
                      <option value="" disabled>Selecciona un servicio...</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-teal-400" /> Fecha preferida
                      </label>
                      <input
                        type="date"
                        min={today}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-teal-100 ${selectedDate ? 'border-teal-500 bg-teal-50 text-teal-900 font-medium' : 'border-teal-100 bg-teal-50/30 focus:bg-white focus:border-teal-500'}`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-teal-400" /> Horario preferido
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-teal-50/30 focus:bg-white appearance-none">
                        <option value="mañana">Mañana (09:00 - 14:00)</option>
                        <option value="tarde">Tarde (16:00 - 20:00)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-800 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-teal-400" /> Detalles del proyecto
                    </label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-teal-50/30 focus:bg-white resize-none" placeholder="Cuéntanos un poco más sobre lo que necesitas..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-teal-700 text-white rounded-xl font-medium hover:bg-teal-800 transition-colors shadow-md shadow-teal-200">
                    Solicitar Reunión
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
