import AvatarIcon from "./Avatar";
import { Card } from "./Card";
import { Palette } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Button } from "./Button";

const VacancyCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 space-y-10 font-lexend tracking-tight ">
      <div className="flex justify-center items-center gap-10">
        {/* {1} */}
        <Card className="w-[280px] h-auto p-2">
          <div className="flex items-center space-x-12">
            <div className="flex items-start mt-6">
              <AvatarIcon className="h-10 w-10" icon={Palette} />
              <div>
                <p>Microsoft</p>
                <p className="text-xs text-neutral-500">Bengaluru, India</p>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <Bookmark className="w-5" />
            </div>
          </div>
          <Card.Title>SDE Intern</Card.Title>
          <div className="flex w-auto items-center space-x-6">
            <Card.Description className="bg-blue-400 rounded-md p-1 text-xs text-foreground">
              Full time
            </Card.Description>
            <Card.Description className="bg-red-400 rounded-md p-1 text-xs text-foreground">
              Tech
            </Card.Description>
            <Button className="">Apply</Button>
          </div>
        </Card>
        {/* {2} */}
        <Card className="w-[240px] h-auto p-2">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>{" "}
        </Card>
        {/* {3} */}
        <Card className="w-[240px] h-auto p-2">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>{" "}
        </Card>
        {/* {4} */}
        <Card className="w-[240px] h-auto p-2">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>{" "}
        </Card>
      </div>
      <div className="flex justify-center items-center gap-10">
        {/* {5} */}
        <Card className="w-[240px] h-auto p-2">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>{" "}
        </Card>
        {/* {6} */}
        <Card className="w-[240px] h-auto p-2">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>
        </Card>
        {/* {7} */}
        <Card className="w-[240px] h-auto p-2 ">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>
        </Card>
        {/* {8} */}
        <Card className="w-[240px] h-auto p-2 ">
          <div className="flex items-start mt-6">
            <AvatarIcon className="h-15 w-15" icon={Palette} />
          </div>
          <Card.Title>Design</Card.Title>
          <div className="flex items-center space-x-6">
            <Card.Description>New 120 jobs posted</Card.Description>
            <ChevronRight className="h-10 w-5" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VacancyCard;
