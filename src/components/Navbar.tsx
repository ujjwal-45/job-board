import { Briefcase } from "lucide-react"
import { Button } from "./ui/Button"


export const Navbar = () => {
    return (
      <>
        <nav className="flex justify-center items-center h-[40px] md:h-[90px] font-lexend">
          <div className="flex justify-between items-center w-full max-w-7xl">
            <div className="flex justify-start items-center">
              <a href="/">
                <h1 className="text-3xl flex justify-center items-center font-bold">
                  <Briefcase size={38} className="inline m-2" />
                  JobNest
                </h1>
              </a>
            </div>
            <div className="flex justify-center font-light items-center gap-10 text-sm md:text-lg">
              <a
                href="/find_job"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Find job
              </a>
              <a
                href="/institutions"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Job Alerts
              </a>
              <a
                href="/"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Find Candidates
              </a>
              <a
                href="/"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Career Advice
              </a>
            </div>
            <div className="flex gap-4">
              <a href="/" className=" flex gap-2">
                <Button>Login</Button>
                <Button variant={"outline"}>Register now</Button>
              </a>
            </div>
          </div>
        </nav>
        <div className="border-t-2 w-full text-foreground"></div>
      </>
    );
}