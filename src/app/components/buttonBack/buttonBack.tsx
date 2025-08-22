"use client";

import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function ButtonBack(){
    const router = useRouter();
    return(
        <button
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-[var(--blue)] cursor-pointer"
        >
            <CaretLeft size={12} weight="fill" />
            <p>voltar</p>
        </button>
    )
}