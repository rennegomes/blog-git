import { Building, CalendarDots, CaretLeft, ChatCircle, GithubLogo, ShareFat, Users } from "@phosphor-icons/react/dist/ssr";


export default function Home() {
  return (
    <div className="flex w-full gap-50 items-center justify-center border-4 border-[var(--base-border)]">
      <div className="self-start">
        <GithubLogo size={32} weight="fill" />
        <Building size={32} weight="fill" />
        <Users size={32} weight="fill" />
        <CalendarDots size={32} weight="fill" />
        <CaretLeft size={32} weight="fill" />
        <ChatCircle size={32} weight="fill" />
        <ShareFat size={32} weight="fill" />
      </div>
      <h1 className="text-9xl">Hello, world!</h1>
    </div>
  );
}
