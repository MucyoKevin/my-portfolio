import { ProfileImage } from "./ProfileImage";

export function MobileProfileCard() {
  return (
    <div className="lg:hidden w-full bg-white/10 rounded-2xl mb-6 flex items-center gap-4 p-4 shadow">
      <ProfileImage
        width={80}
        height={80}
        className="rounded-xl object-cover w-16 h-16"
      />
      <div>
        <p className="text-lg font-bold">Mucyo Kevin</p>
        <p className="text-sm font-medium text-black/80">Full Stack Developer</p>
      </div>
    </div>
  );
}
