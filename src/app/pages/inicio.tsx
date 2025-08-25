import Link from "next/link";
import { listIssues } from "../../../lib/github";
import Card from "../components/card/card";
import Perfil from "../components/perfil/perfil";
import Pesquisa from "../components/pesquisa/pesquisa";

export default async function Inicio() {

    const issues = await listIssues();
    const num = "rennegomes"

    return (
        <div className="mb-24">
            <div className="flex items-end bg-[var(--base-profile)] w-full h-48"></div>
            
            <div className="w-1/3 m-auto h-10 blur-2xl bg-[#14589C]/80 mt-[-50px] relative z-0"></div>

            <div className="w-3/4 m-auto max-w-[860px] relative z-20">
                <div className="bg-[var(--base-profile)] rounded-xl shadow-2xl/50 mt-[-80px] p-8">
                    <Perfil params={num} />
                </div>
                <div className="mt-20">
                    <Pesquisa issues={issues} />
                </div>
            </div>
        </div>
    )
}