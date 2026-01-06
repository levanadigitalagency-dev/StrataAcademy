import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItemData } from './AccordionGroup';

interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      layout
      className="mb-4 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
            <HelpCircle size={20} />
          </div>
          <span className={`font-semibold text-base lg:text-lg ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
            {item.question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98]
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="text-left px-5 pb-5 pt-2  text-gray-700 leading-relaxed max-w-prose">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
