import jobFront from "../assets/job_front.svg";
import Carousel from "./Carousel";
import Categories from "./Categories";
import IconCard from "./ui/IconCard";
import { ScrollText } from "lucide-react"
import { Map } from "lucide-react"
import { Users } from "lucide-react"
import {MoveRight} from "lucide-react"
import { UserRoundPlus } from "lucide-react";
import { FileSearch } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { Rocket } from "lucide-react";
import Vacancies from "./Vacancies";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";


const Hero = () => {
    return (
      <>
        <div className="flex max-w-7xl mx-auto items-center px-4 py-12 font-lexend">
          {/* Left Section: Text + Search */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-6xl font-bold leading-tight text-foreground">
                EASY WAY TO GET
              </h1>
              <h1 className="text-6xl font-bold leading-tight text-green-400">
                <span className="text-foreground">YOUR</span> DREAM JOB
              </h1>
            </div>

            <p className="text-lg text-gray-500">
              Let&apos;try our way to get your dream job from different
              countries and job-positions, create opputunities for better life.
            </p>

            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for jobs..."
                className="px-4 py-2 rounded-md w-full max-w-md text-black"
              />
              <Button className="bg-emerald-400"> Search</Button>
            </div>

            <h3 className="font-light">*Find position and job location to work</h3>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={jobFront}
              alt="job-front-image"
              className="w-[480px] h-[480px] object-contain"
            />
          </div>
        </div>
        <div className="bg-primary h-[10rem]">
          <Carousel />
        </div>

        <div className="mt-10 h-[480px]">
          <div className="flex justify-center items-center pt-24">
            <h1 className="text-6xl font-bold">
              WHY WE&apos;ARE <span className="text-amber-200">THE BEST</span>
            </h1>
          </div>
          <p className="flex justify-center items-center pt-5 text-xl text-gray-500">
            We have helping workers to find their dream job for more than 10
            years and it continues to grow
          </p>

          <div className="flex justify-center items-center space-x-60 pt-20 mb-12 ">
            <div className="flex gap-6">
              <div>
                <IconCard icon={ScrollText} className="bg-emerald-300 p-1" />
              </div>
              <div className="flex-col">
                <p className="text-2xl font-semibold">1500+</p>
                <p className="text-xs font-light mt-2">job offer</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <IconCard icon={Map} className="bg-accent p-1" />
              </div>
              <div className="flex-col">
                <p className="text-2xl font-semibold">100+</p>
                <p className="text-xs font-light mt-2">countries</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <IconCard icon={Users} className="bg-purple p-1" />
              </div>
              <div className="flex-col">
                <p className="text-2xl font-semibold">50000+</p>
                <p className="text-xs font-light mt-2">Community member</p>
              </div>
            </div>
          </div>
        </div>
        <Categories />
        {/* Finding job sequence */}

        <div className="mt-10 h-[480px] font-lexend">
          <div className="flex flex-col justify-center items-center pt-24 mb-12">
            <h1 className="text-6xl font-bold">
              IT&apos;S NOW <span className="text-amber-200">SIMPLER</span>
            </h1>
            <h1 className="text-6xl font-bold">
              {" "}
              THAN EVER TO <span className="text-purple">FIND A JOB</span>
            </h1>
          </div>

          <div className="flex justify-center items-center pt-20 gap-20 mx-auto ">
            <div className="flex-col gap-6">
              <div>
                <IconCard icon={UserRoundPlus} className="bg-emerald-300 p-1" />
              </div>
              <div className="w-[120px] mt-4">
                <p className="font-semibold">Create Account</p>
                <p className="text-xs font-light mt-2">
                  Register yourself to join our service
                </p>
              </div>
            </div>
            <MoveRight className="h-10 w-10" />
            <div className="flex-col gap-6 ">
              <div>
                <IconCard icon={FileSearch} className="bg-accent p-1" />
              </div>
              <div className="flex-col w-[120px] mt-4">
                <p className="font-semibold">Find a job</p>
                <p className="text-xs font-light mt-2">
                  Start looking for your dream job
                </p>
              </div>
            </div>
            <MoveRight className="h-10 w-10" />
            <div className="flex-col gap-6 ">
              <div>
                <IconCard
                  icon={MousePointerClick}
                  className="bg-blue-300 p-1"
                />
              </div>
              <div className="flex-col w-[100px] mt-4">
                <p className=" font-semibold">Apply</p>
                <p className="text-xs font-light mt-2">
                  Apply to hundreds of jobs
                </p>
              </div>
            </div>
            <MoveRight className="h-10 w-10" />
            <div className=" flex-col gap-6">
              <div>
                <IconCard icon={Rocket} className="bg-purple p-1" />
              </div>
              <div className="flex-col w-[100px] mt-4">
                <p className="font-semibold">Start Work</p>
                <p className="text-xs font-light mt-2">
                  Start working in your dream job
                </p>
              </div>
            </div>
          </div>
        </div>
        <Vacancies />
      </>
    );
};

export default Hero;
