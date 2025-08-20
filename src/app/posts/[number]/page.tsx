import { getIssue } from "../../../../lib/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { CalendarDots, CaretLeft, GithubLogo, ShareFat, Users } from "@phosphor-icons/react/dist/ssr";

type Props = { params: { number: string } };

export default async function Post({ params }: Props) {
    const post = await getIssue(params.number);

    return (
        <div className="mb-24">
            <div className="flex items-end bg-[var(--base-profile)] w-full h-48"></div>
            
            <div className="w-1/3 m-auto h-10 blur-2xl bg-[#14589C]/80 mt-[-50px] relative z-0"></div>

            <div className="w-3/4 m-auto max-w-[860px] relative z-20">
                <div className="bg-[var(--base-profile)] rounded-xl shadow-2xl/50 mt-[-80px] p-8">

                    <div className="flex justify-center md:justify-between">
                        <button className="flex items-center gap-2 text-[var(--blue)] cursor-pointer">
                            <CaretLeft size={12} weight="fill" />
                            <p>voltar</p>
                        </button>
                        <div className="items-center hidden md:flex">
                            <div className="gap-2 items-center text-xs text-[var(--blue)] border-b-2 border-transparent hover:border-[var(--blue)] cursor-pointer md:flex" >
                                <a href={`https://github.com/`+ post.user.login}>GITHUB</a>
                                <ShareFat size={12} weight="fill" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-[var(--base-title)] text-2xl font-bold">{post.title}</h1>
                    </div>

                    <div className="flex flex-col gap-6 mt-5 leading-none md:flex-row md:items-end">
                        <div className="flex gap-2">
                            <GithubLogo className="text-[var(--base-label)]" size={18} weight="fill" />
                            <p>{post.user.login}</p>
                        </div>
                        <div className="flex gap-2">
                            <CalendarDots className="text-[var(--base-label)]" size={18} weight="fill" />
                            <p>{new Date(post.created_at).toLocaleDateString('pt-BR')}</p>
                        </div>
                        <div className="flex gap-2">
                            <Users className="text-[var(--base-label)] block" size={18} weight="fill" />
                            <p>32 seguidores</p>
                        </div>
                    </div>

                </div>
                <div className="mt-20">
                </div>
                <div className="mt-12">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.body || ''}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}