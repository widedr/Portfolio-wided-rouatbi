"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";
import { useLanguage, useT } from "@/lib/LanguageContext";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const { lang } = useLanguage();
  const t = useT();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setError(false);
    const history = messages;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history, lang }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data?.error ?? "chat_failed");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        data-cursor-hover
        aria-label={t.chat.label}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94, transition: { duration: 0.12, ease: "easeOut" } }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-violet shadow-lg shadow-violet/30"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              <X className="h-7 w-7 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="sparkles"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              <Sparkles className="h-7 w-7 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-28 right-6 z-50 flex h-[min(36rem,75vh)] w-[min(24rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet/15">
                  <Sparkles className="h-4 w-4 text-violet" />
                </span>
                <p className="font-display text-sm text-foreground">{t.chat.label}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-cursor-hover
                aria-label={t.chat.close}
                className="text-muted transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2.5 text-sm leading-relaxed text-foreground">
                {t.chat.greeting}
              </div>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto rounded-br-sm bg-violet/20 text-foreground"
                      : "rounded-bl-sm bg-surface-2 text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2.5 text-sm text-muted">
                  {t.chat.thinking}
                </div>
              )}
              {error && (
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-pink/10 px-4 py-2.5 text-sm text-pink">
                  {t.chat.error}
                </div>
              )}
            </div>

            <div className="flex items-end gap-2 border-t border-border p-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.chat.placeholder}
                rows={1}
                className="max-h-24 flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-violet"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                data-cursor-hover
                aria-label={t.chat.send}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet text-white transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
