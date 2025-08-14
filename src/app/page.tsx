import { Building, CalendarDots, CaretLeft, ChatCircle, GithubLogo, ShareFat, Users } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div>
      <div className="flex items-end bg-[var(--base-profile)] w-full h-48">
      </div>

      <div className="w-3/4 m-auto max-w-[860px]">
        <div className="grid grid-cols-1 gap-5 bg-[var(--base-profile)] p-8 rounded-xl shadow-2xl/50 mt-[-80px] md:grid-cols-[150px_1fr]">
          <div className="flex justify-center"> 
            <img className="rounded-xl w-[140px] max-h-[140px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQ_2sBuilFpehYzzurGgBITB01-ceuBPMlw&s" alt="" />
          </div>

          <div className="grid grid-cols-1 gap-5 justify-between h-full md:gap-0">

            <div className="flex justify-center md:justify-between">
              <h1 className="text-[var(--base-title)] text-2xl font-bold">Cameron Williamson</h1>
              <div className="gap-2 items-center text-xs text-[var(--blue)] hidden md:flex">
                  <p>GITHUB</p>
                <ShareFat size={12} weight="fill" />
              </div>
            </div>

            <div>
              <p className="line-clamp-5 md:line-clamp-2 ">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            </div>

            <div className="flex flex-col gap-6  leading-none md:flex-row md:items-end">
              <div className="flex gap-2">
                <GithubLogo className="text-[var(--base-label)]" size={18} weight="fill" />
                <p>cameronwll</p>
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
      </div>
    </div>
    // <div className="flex w-full gap-50 items-center justify-center border-4 border-[var(--base-border)]">
    //   <div className="self-start">
    //     <GithubLogo size={32} weight="fill" />
    //     <Building size={32} weight="fill" />
    //     <Users size={32} weight="fill" />
    //     <CalendarDots size={32} weight="fill" />
    //     <CaretLeft size={32} weight="fill" />
    //     <ChatCircle size={32} weight="fill" />
    //     <ShareFat size={32} weight="fill" />
    //   </div>
    //   <h1 className="text-9xl">Hello, world!</h1>
    // </div>
  );
}
