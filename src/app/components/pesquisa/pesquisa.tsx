export default function Pesquisa() {
    return(
        <>
            <div className="flex justify-between">
                <h1 className="text-[var(--base-title)] text-lg">Publicações</h1>
                <p className="text-[var(--base-span)] text-sm">6 publicações</p>
            </div>
            <div className="mt-3">
                <input 
                    type="text"
                    className="w-full p-4 border border-[var(--base-border)] rounded-md focus:outline-none focus:border-[var(--blue)]" 
                    placeholder="Buscar conteúdo" 
                />
            </div>
        </>
    )
}