import Image from '@/components/shared/image';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useIsDarkMode } from '@/hooks/use-is-dark-mode';
import lightLogo from '@/assets/images/rytu-721-icon-dark-theme.png';
import darkLogo from '@/assets/images/rytu-721-icon-light-theme.png';

const Logo: React.FC<React.SVGAttributes<object>> = (props) => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();

  return (
    <div className="flex cursor-pointer outline-none" {...props}>
      <span className="relative flex overflow-hidden">
        {isMounted && isDarkMode && (
          <Image src={lightLogo} alt="RYTU" priority width={38} />
        )}
        {isMounted && !isDarkMode && (
          <Image src={darkLogo} alt="RYTU" priority width={38} />
        )}
      </span>
    </div>
  );
};

export default Logo;
