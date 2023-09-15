import { Card } from "@nextui-org/card";
import Image from "next/image";

const ChallengeLearning = ({
  challengesOrLearnings,
  bulletPoints,
  icon,
}: {
  challengesOrLearnings: string;
  bulletPoints: string[];
  icon: string;
}) => {
  return (
    <Card className="challengesLearnings border-0 shadow-none sm:gap-[1.88rem] sm:px-10 sm:py-9">
      <h6
        className={`bodyBold ${
          challengesOrLearnings === "CHALLENGES"
            ? "text-[#E15A46]"
            : "text-[#02BC7D]"
        }  sm:text-[1.25rem] sm:leading-[1.625rem]`}
      >
        {challengesOrLearnings}
      </h6>
      <div className="flex flex-col gap-6">
        {bulletPoints.map((bulletPoint: string) => (
          <div
            key={bulletPoint}
            className="flex flex-row items-start gap-[0.63rem]"
          >
            <Image
              className="mt-[0.19rem]"
              src={icon}
              alt={`${challengesOrLearnings} bullet point image`}
              width={20}
              height={20}
            />
            <p className="smallRegular text-white500 sm:text-[1.125rem] sm:leading-[1.8rem]">
              {bulletPoint}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChallengeLearning;
