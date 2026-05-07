import { ArrowUp, SlidersHorizontal } from "lucide-react";

export function PromptInput({ placeholder = "Throw me a hard one. I'm ready.", showOptions = false }: { placeholder?: string; showOptions?: boolean }) {
  return (
    <div className="input-pill rounded-2xl w-full max-w-3xl mx-auto px-5 py-4 flex flex-col gap-6">
      <div className="text-foreground/50 text-base">{placeholder}</div>
      <div className="flex items-center justify-between">
        {showOptions ? (
          <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-white">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        ) : <div />}
        <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
