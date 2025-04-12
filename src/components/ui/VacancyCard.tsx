import AvatarIcon from "./Avatar";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Palette } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Button } from "./Button";

interface VacancyProps {
  Company: string;
  location: string;
  JobTitle: string;
  JobType: string;
  sector: string;
  icons: LucideIcon[]
  totalApplicants: string;

}

const VacancyCard = ({ Company, location, JobTitle, JobType, sector, icons, totalApplicants }: VacancyProps) => {
  return (
    <div className="inline-block border-2 border-black shadow-md transition-all hover:shadow-xs p-4 ">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-start gap-2">
          <AvatarIcon icon={Palette} />
          <div className="flex flex-col">
            <h1>{Company}</h1>
            <p className="font-light text-xs text-gray-500">{location}</p>
          </div>
        </div>
        <div className="flex items-end">
          <Bookmark className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-col items-start p-2">
        <h1 className="text-2xl font-medium">{JobTitle}</h1>
        <div className="flex mt-2 gap-2">
          <p className="bg-orange-200 py-1 px-2 rounded-xl text-xs">
            {JobType}
          </p>
          <p className="bg-blue-200 py-1 px-2 rounded-xl text-xs">{sector}</p>
        </div>
      </div>
      <div className="flex gap-3 p-2">
        <div className="flex items-center -space-x-3">
          {icons?.slice(0, 3).map((Icon, idx) => (
            <div
              className={cn(
                "h-6 w-6 rounded-full border-2 border-white bg-red-300 flex items-center justify-center text-black ",
                idx !== 0 && "z-10"
              )}
            >
              <Icon className="h-4 w-4 " />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center font-light ">
          <p>{totalApplicants}</p>
        </div>
      </div>
      <div className="flex gap-3 p-2">
        <Button className="bg-purple-400" size={"xl"}>Apply</Button>
        <Button variant={"outline"}>Details</Button>
      </div>
    </div>
  );
};

export default VacancyCard;
