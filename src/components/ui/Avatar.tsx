import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";

const AvatarIcon = ({
  icon: Icon,
  className,
  iconClassName,
}: {
  icon: React.ElementType;
  className?: string;
  iconClassName?: string;
}) => (
  <AvatarPrimitive.Root
    className={cn(
      "relative flex h-12 w-12 rounded-full overflow-hidden",
      className
    )}
  >
    {/* Optionally show actual image here */}
    {/* <AvatarPrimitive.Image src="..." alt="user" /> */}

    {/* Fallback icon if image isn't available */}
    <AvatarPrimitive.Fallback
      delayMs={0}
      className="flex h-full w-full items-center justify-center bg-gray-100"
    >
      <Icon className={cn("h-6 w-6 text-gray-800", iconClassName)} />
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);

AvatarIcon.displayName = "Avatar.Icon"

export default AvatarIcon
