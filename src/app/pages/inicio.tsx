import Card from "../components/card/card";
import Perfil from "../components/perfil/perfil";
import Pesquisa from "../components/pesquisa/pesquisa";

export default function Inicio() {
    return (
        <div className="mb-24">
            <div className="flex items-end bg-[var(--base-profile)] w-full h-48"></div>

            <div className="w-3/4 m-auto max-w-[860px]">
                <div className="bg-[var(--base-profile)] rounded-xl shadow-2xl/50 mt-[-80px] p-8">
                    <Perfil />
                </div>
                <div className="mt-20">
                    <Pesquisa />
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Card />
                </div>
            </div>
        </div>
    )
}