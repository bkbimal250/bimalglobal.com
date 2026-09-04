"use client";

import { useState } from "react";

import type { FaqItem } from "@/content/cloud-infrastructure";

export function CloudInfrastructureFaq({ items }: { items: readonly FaqItem[] }) {
  const [openQuestion, setOpenQuestion] = useState(items[0]?.question ?? "");

  return (
    <div className="divide-y divide-[#171817]/15 border-y border-[#171817]/15">
      {items.map((item) => {
        const open = openQuestion === item.question;
        const panelId = `cloud-infrastructure-faq-${item.question
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <article key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 py-7 text-left font-serif text-[clamp(1.7rem,3.8vw,3.5rem)] leading-none tracking-[-0.04em] text-[#171817] transition-colors hover:text-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
              onClick={() =>
                setOpenQuestion((value) =>
                  value === item.question ? "" : item.question,
                )
              }
              type="button"
            >
              <span>{item.question}</span>
              <span aria-hidden="true" className="font-sans text-2xl">
                {open ? "-" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              id={panelId}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 font-sans text-base leading-8 text-[#171817]/66 sm:text-lg sm:leading-9">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
