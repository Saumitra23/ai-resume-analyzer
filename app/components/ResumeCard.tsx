import { Link } from "react-router"
import ScoreCircle from "./ScoreCircle"

const ResumeCard = ({ resume : {id, jobTitle, imagePath, companyName, feedback} }: { resume: Resume }) => {
  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
        <section className="resume-card-header">  
            <div className="flex flex-col gap-2">
                <h2 className="text-black font-bold break-words">{companyName}</h2>
                <h3 className="text-lg text-gray-500 break-words">{jobTitle}</h3>
            </div>
            <div className="flex flex-row items-center gap-2">
                <ScoreCircle score={feedback.overallScore} />
            </div>
        </section>
        <section className="object-cover rounded-2xl overflow-hidden" >
            <img src={imagePath} alt={companyName}  />
        </section>
    </Link>
  );
};

export default ResumeCard;