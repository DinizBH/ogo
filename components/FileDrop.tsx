"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FileDropProps = {
  label: string;
  onFileSelected: (file: File) => Promise<void>;
  previewUrl?: string;
};

export default function FileDrop({ label, onFileSelected, previewUrl }: FileDropProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = async (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    await onFileSelected(file);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      className={`flex flex-col gap-3 rounded-xl border border-dashed p-4 transition ${
        isDragging ? "border-primary bg-primary/10" : "border-border bg-card"
      }`}
      onDragOver={event => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={async event => {
        event.preventDefault();
        setIsDragging(false);
        await handleFiles(event.dataTransfer.files);
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-secondary dark:text-zinc-100">{label}</p>
          <p className="text-xs text-muted-foreground">
            Arraste e solte ou clique para enviar
          </p>
        </div>
        <Button
          type="button"
          variant="secondary"
          className="border border-border bg-background text-foreground hover:bg-muted/60"
          onClick={() => inputRef.current?.click()}
        >
          Selecionar arquivo
        </Button>
      </div>
      {previewUrl ? (
        <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
          <img src={previewUrl} alt="Preview" className="h-36 w-full object-cover" />
        </div>
      ) : null}
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={async event => {
          await handleFiles(event.target.files);
        }}
        className="hidden"
      />
    </div>
  );
}
