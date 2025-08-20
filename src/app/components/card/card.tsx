interface CardPrompt{
    title: string,
    time: string,
    body: string
}

export default function Card(promp: CardPrompt) {
    return(
        <>
        <div className="p-7 bg-[var(--base-post)] rounded-xl border-2 border-transparent min-h-[230px] hover:border-[var(--base-label)]">
            <div className="grid gap-4 md:grid-cols-[280_1fr]">
                <h1 className="line-clamp-2 text-xl text-[var(--base-title)]">{promp.title}</h1>
                <p className="text-[var(--base-span)] text-sm md:mt-1">{promp.time}</p>
            </div>
            <div className="mt-5">
                <p className="line-clamp-4">{promp.body}</p>
            </div>
        </div>
        </>
    )
}