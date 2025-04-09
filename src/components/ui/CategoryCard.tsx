import AvatarIcon from "./Avatar";
import { Card } from "./Card";
import { Palette } from "lucide-react";
import { ChevronRight } from "lucide-react";

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 space-y-10 font-lexend tracking-tight ">
      <div className="flex justify-center items-center gap-10">
        {/* {1} */}
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

export default CategoryCard;
