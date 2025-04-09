import { Button } from "./ui/Button";
import CategoryCard from "./ui/CategoryCard";



const Categories = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center font-lexend">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">
              THERE ARE <span className="text-purple">20+ JOB</span>
            </h1>
            <h1 className="text-6xl font-bold tracking-tight ">
              <span className="text-green-400">CATEGORIES</span> AVAILABLE
            </h1>
          </div>
          <CategoryCard />
          <Button variant={"outline"}>View All Categories</Button>
        </div>
      </>
    );
}

export default Categories