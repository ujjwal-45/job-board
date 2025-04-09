import { cn } from "../../lib/utils"
import { HTMLAttributes } from "react";
import {LucideIcon} from "lucide-react"

interface IconCardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    iconClassName?: string;
    icon: LucideIcon;
}

const IconCard = ({className,iconClassName, icon: Icon, ...props}: IconCardProps) => {
    return (
        <div className={cn("inline-block border-2 border-black shadow-md hover:shadow-xs ", className)}
            {...props }
        >
            <Icon size={64} className={cn("text-black", iconClassName)} />
        </div>
    );
}

export default IconCard