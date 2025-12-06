'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { EMAIL } from './data'

export function Header() {
 return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex flex-col">
        <Link href="/" className="font-medium text-2xl text-black dark:text-white py-2">
          Tarun Reddi
        </Link>

        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          AI Researcher
        </TextEffect>

        <a
          href={`mailto:${EMAIL}`}
          className="text-zinc-600 underline dark:text-zinc-300"
        >
          <TextEffect
            as="span"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            {EMAIL}
          </TextEffect>
        </a>
      </div>
    </header>
  )
}
