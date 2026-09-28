import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenRFQ }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('আসসালামু আলাইকুম Zentra Trade! আমরা চীন থেকে বাল্ক বুটের ডাল / ছোলা আমদানির বর্তমান স্পট রেট ও এল/সি শর্তাবলী জানতে চাচ্ছি।');

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801711000000?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#0B142B] border border-emerald-500/40 shadow-2xl p-5 text-slate-100 animate-in fade-in slide-in-from-bottom-3 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-agro-navy-950 font-bold shadow-md">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Zentra Trade ডেস্ক</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  সিনিয়র ট্রেড ব্রোকার অনলাইনে আছেন
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-4 p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
            <p className="text-slate-400 text-[11px] mb-1">হোয়াটসঅ্যাপে তাৎক্ষণিক জানতে পারেন:</p>
            <ul className="text-slate-300 space-y-1 text-[11px]">
              <li>• চীন-চট্টগ্রাম রুটের বর্তমান CIF রেট</li>
              <li>• খাতুনগঞ্জ ওয়্যারহাউস রেডি স্টক দর</li>
              <li>• বাংলাদেশ ব্যাংক L/C ড্রাফট ও জাহাজ শিডিউল</li>
            </ul>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
            className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-emerald-400 resize-none mb-3"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={handleSendWhatsApp}
              className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-agro-navy-950 font-bold text-xs shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp চ্যাট শুরু করুন</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenRFQ();
              }}
              className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-agro-gold-400 font-bold text-xs transition-colors"
              title="Open Formal RFQ"
            >
              RFQ ফর্ম
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-agro-navy-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
        title="Zentra Trade WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-display tracking-wide font-black">
          Zentra Trade WhatsApp
        </span>
      </button>

    </div>
  );
}
