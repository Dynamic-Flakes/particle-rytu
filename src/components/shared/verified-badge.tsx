import Image from '@/components/shared/image';
import verifiedBadge from '@/assets/images/cert/verified-badge.svg';

export default function VerifiedBadge() {
    return (
        <span className="flex items-center justify-center overflow-hidden rounded-[100px] bg-[var(--color-hint)]">
            <Image src={verifiedBadge} alt="Verified Badge" className="w-full h-full" />
        </span>
    )
}