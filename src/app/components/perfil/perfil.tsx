
import { Building, GithubLogo, ShareFat, Users } from "@phosphor-icons/react/dist/ssr";
import { getIssue } from "../../../../lib/github";


type Props = {
    params: number
};

export default async function Perfil({ params }: Props) {
    const post = await getIssue(params);

    return(
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[150px_1fr]">
            <div className="flex justify-center"> 
                <img className="rounded-xl w-[140px] max-h-[140px]" src={post.user.avatar_url} alt="" />
            </div>

            <div className="grid grid-cols-1 gap-5 justify-between h-full md:gap-0">

                <div className="flex justify-center md:justify-between">
                    <h1 className="text-[var(--base-title)] text-2xl font-bold">{post.user.login}</h1>
                    <div className="items-center hidden md:flex">
                        <a href={`https://github.com/`+ post.user.login} className="gap-2 items-center text-xs text-[var(--blue)] border-b-2 border-transparent hover:border-[var(--blue)] cursor-pointer md:flex" >
                            <p>GITHUB</p>
                            <ShareFat size={12} weight="fill" />
                        </a>
                    </div>
                </div>

                <div>
                    <p className="line-clamp-5 md:line-clamp-2 ">{post.body}</p>
                </div>

                <div className="flex flex-col gap-6  leading-none md:flex-row md:items-end">
                    <div className="flex gap-2">
                        <GithubLogo className="text-[var(--base-label)]" size={18} weight="fill" />
                        <p>{post.user.login}</p>
                    </div>
                    <div className="flex gap-2">
                        <Building className="text-[var(--base-label)]" size={18} weight="fill" />
                        <p>Rocketseat</p>
                    </div>
                    <div className="flex gap-2">
                        <Users className="text-[var(--base-label)] block" size={18} weight="fill" />
                        <p>32 seguidores</p>
                    </div>
                </div>

            </div>
        </div>
    )
}