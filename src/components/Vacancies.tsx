import VacancyCard from "./ui/VacancyCard"

const Vacancies = () => {
    return (
      <div className=" flex justify-center items-center mt-40">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold tracking-tight">
                POPULAR JOB VACANCIES
            </h1>
            <VacancyCard />
        </div>
      </div>
  )
}

export default Vacancies