export default function Card() {
    return(
        <>
        <div className="p-7 bg-[var(--base-post)] rounded-xl border-2 border-transparent hover:border-[var(--base-label)]">
            <div className="grid gap-4 md:grid-cols-[280_1fr]">
                <h1 className="text-xl text-[var(--base-title)]">JavaScript data types and data structures</h1>
                <p className="text-[var(--base-span)] text-sm md:mt-1">Há 1 dia</p>
            </div>
            <div className="mt-5">
                <p className="line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
            </div>
        </div>
        </>
    )
}