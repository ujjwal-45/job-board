import { Button } from "./ui/Button";
import VacancyCard from "./ui/VacancyCard"
import { User2 } from "lucide-react"

const Vacancies = () => {
    return (
      <div className=" flex justify-center items-center mt-40 font-lexend">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold tracking-tight">
            <span className="text-green-400">POPULAR JOB</span> VACANCIES
          </h1>
          <div className="flex gap-5 md:flex mt-20">
            <VacancyCard
              Company="Microsoft"
              location="Bengaluru, India"
              JobTitle="SDE Intern"
              JobType="Internship"
              sector="Tech"
              icons={[User2, User2, User2]}
              totalApplicants="+20 Applicants"
            />
            <VacancyCard
              Company="Figma"
              location="Bengaluru, India"
              JobTitle="Product Designer"
              JobType="Full Time"
              sector="Design"
              icons={[User2, User2, User2]}
              totalApplicants="+100 Applicants"
            />
            <VacancyCard
              Company="Barclays"
              location="Pune, India"
              JobTitle="Software Engineer"
              JobType="Full Time"
              sector="Tech"
              icons={[User2, User2, User2]}
              totalApplicants="+50 Applicants"
            />
          </div>
          <div className="flex gap-5 md:flex mt-20">
            <VacancyCard
              Company="Cisco"
              location="Bengaluru, India"
              JobTitle="Network Engineer"
              JobType="Full Time"
              sector="Tech"
              icons={[User2, User2, User2]}
              totalApplicants="+50 Applicants"
            />
            <VacancyCard
              Company="Microsoft"
              location="Bengaluru, India"
              JobTitle="SDE Intern"
              JobType="Internship"
              sector="Tech"
              icons={[User2, User2, User2]}
              totalApplicants="+20 Applicants"
            />
            <VacancyCard
              Company="Google"
              location="Bengaluru, India"
              JobTitle="Cloud Enginner"
              JobType="Full Time"
              sector="Tech"
              icons={[User2, User2, User2]}
              totalApplicants="+20 Applicants"
            />
          </div>
          <div className="flex mt-8 p-2">
            <Button variant={"outline"} size={"xl"}>
              View More
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Vacancies