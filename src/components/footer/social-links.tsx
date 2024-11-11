import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import ActiveLink from "../shared/links/active-link";

export default function SocialLinks() {
    return (
      <div className="flex items-center justify-center gap-[1.5rem]">
        <ActiveLink href={'/'} className="flex items-center justify-center w-[2.6rem] h-[2.6rem] p-[0.7rem] rounded-full transition-all duration-300 hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">
          <FaXTwitter className="flex items-center justify-center h-full object-contain" />
        </ActiveLink>
        <ActiveLink href={'/'} className="flex items-center justify-center w-[2.6rem] h-[2.6rem] p-[0.7rem] rounded-full transition-all duration-300 hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">
          <BsLinkedin className="flex items-center justify-center h-full object-contain" />
        </ActiveLink>
        <ActiveLink href={'/'} className="flex items-center justify-center w-[2.6rem] h-[2.6rem] p-[0.7rem] rounded-full transition-all duration-300 hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">
          <FaInstagram className="flex items-center justify-center h-full object-contain" />
        </ActiveLink>
        <ActiveLink href={'/'} className="flex items-center justify-center w-[2.6rem] h-[2.6rem] p-[0.7rem] rounded-full transition-all duration-300 hover:translate-y-[-2px] dark:hover:text-[var(--color-accent)]">
          <FaGithub className="flex items-center justify-center h-full object-contain" />
        </ActiveLink>
      </div>
    );
  }