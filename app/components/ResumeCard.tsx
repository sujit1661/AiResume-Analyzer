import React from "react";
import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard: React.FC<{ resume: Resume }> = ({ resume }) => {
    return (
        <Link
            to={`resume/${resume.id}`}
            className="resume-card animate-in fade-in duration-1000"
        >
            <div className="resume-card-header flex justify-between items-start">
                {/* Left side: company + job title */}
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">
                        {resume.companyName}
                    </h2>
                    <h3 className="text-lg break-words text-gray-500">
                        {resume.jobTitle}
                    </h3>
                </div>

                {/* Right side: score */}
                <div className="flex flex-col gap-3 items-center flex-shrink-0">
                    <ScoreCircle score={resume.feedback.overallScore} />
                </div>
            </div>

            {/* Image displayed below header */}
            <div className="gradient-border animate-in fade-in duration-1000 mt-4">
                <img
                    className="w-full h-[260px] max-sm:h-[180px] object-cover object-top rounded-xl"
                    src={resume.imagePath}
                    alt={resume.companyName}
                />
            </div>
        </Link>
    );
};

export default ResumeCard;
