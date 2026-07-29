'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { t } from '@/lib/i18n';
import { ARCH_NODES } from '@/lib/constants';

interface ArchNode {
  id: string;
  label: string;
  layer: string;
  description: { en: string; zh: string };
}

const layerColors: Record<string, string> = {
  cognitive: 'border-blue-400 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600',
  shared: 'border-purple-400 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-600',
  execution: 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600',
};

const layerLabels: Record<string, { en: string; zh: string }> = {
  cognitive: { en: 'Cognitive Layer', zh: '认知层' },
  shared: { en: 'Shared Middleware', zh: '共享中间层' },
  execution: { en: 'Execution Layer', zh: '执行层' },
};

export default function ArchitectureDiagram() {
  const { locale } = useLocale();
  const [selectedNode, setSelectedNode] = useState<ArchNode | null>(null);

  const nodes = Object.values(ARCH_NODES) as ArchNode[];

  const groupedByLayer = nodes.reduce((acc, node) => {
    if (!acc[node.layer]) acc[node.layer] = [];
    acc[node.layer].push(node);
    return acc;
  }, {} as Record<string, ArchNode[]>);

  const layerOrder = ['cognitive', 'shared', 'execution'];

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Layers */}
      <div className="space-y-8">
        {layerOrder.map((layer, li) => (
          <div key={layer}>
            <div className="mb-3 text-center">
              <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {t(layerLabels[layer], locale)}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {groupedByLayer[layer]?.map((node, ni) => (
                <motion.button
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: li * 0.1 + ni * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
                  className={`arch-node rounded-xl border-2 px-5 py-3 font-mono text-sm font-semibold transition-all hover:shadow-lg ${
                    layerColors[layer] || 'border-slate-200 bg-white dark:bg-slate-800'
                  } ${selectedNode?.id === node.id ? 'ring-2 ring-blue-500 shadow-lg scale-105' : ''}`}
                >
                  {node.label}
                </motion.button>
              ))}
            </div>
            {/* Arrows between layers */}
            {li < layerOrder.length - 1 && (
              <div className="my-2 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-300 dark:text-slate-600">
                  <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Description popup */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mx-auto mt-8 max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <h4 className="mb-2 font-mono text-lg font-bold text-slate-900 dark:text-white">
              {selectedNode.label}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t(selectedNode.description, locale)}
            </p>
            <button
              onClick={() => setSelectedNode(null)}
              className="mt-3 text-xs text-blue-600 hover:underline dark:text-blue-400"
            >
              {locale === 'en' ? 'Close' : '关闭'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
