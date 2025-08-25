'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Card from "../card/card"

interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

interface PesquisaProps {
  issues: Issue[]
}

export default function Pesquisa({ issues }: PesquisaProps) {
  const [query, setQuery] = useState("")
  const [filtered, setFiltered] = useState<Issue[]>(issues)

  useEffect(() => {
    const results = issues.filter(issue =>
      issue.title.toLowerCase().includes(query.toLowerCase())
    )
    setFiltered(results)
  }, [query, issues])

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-[var(--base-title)] text-lg">Publicações</h1>
        <p className="text-[var(--base-span)] text-sm">{filtered.length} publicações</p>
      </div>
      <div className="mt-3">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 border border-[var(--base-border)] rounded-md focus:outline-none focus:border-[var(--blue)]" 
          placeholder="Buscar conteúdo" 
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filtered.map(post => (
          <Link key={post.number} href={`/posts/${post.number}`}>
            <Card 
              title={post.title} 
              body={post.body} 
              time={new Date(post.created_at).toLocaleDateString('pt-BR')} 
            />
          </Link>
        ))}
      </div>
    </>
  )
}
