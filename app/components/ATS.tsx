import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Suggestion {
  type: "good" | "improvement";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions?: Suggestion[]; // Made optional just in case, but prompt implied it's passed
}

export default function ATS({ score, suggestions = [] }: ATSProps) {
  let gradientClass = "from-red-100/50";
  let mainIcon = "/icons/ats-bad.svg";
  let subtitle = "Needs Attention";
  let explanation = "Your resume may face challenges passing through Applicant Tracking Systems. Consider major updates.";

  if (score > 69) {
    gradientClass = "from-green-100/50";
    mainIcon = "/icons/ats-good.svg";
    subtitle = "Excellent Score";
    explanation = "Your resume is well-optimized for ATS algorithms and has a high chance of being seen by recruiters.";
  } else if (score > 49) {
    gradientClass = "from-yellow-100/50";
    mainIcon = "/icons/ats-warning.svg";
    subtitle = "Good Potential";
    explanation = "Your resume has a solid foundation but could benefit from specific improvements to boost visibility.";
  }

  return (
    <div
      className={cn(
        "w-full rounded-3xl border border-gray-100 bg-gradient-to-b to-white p-6 shadow-sm transition-all duration-300 hover:shadow-md",
        gradientClass
      )}
    >
      {/* Top Section */}
      <div className="flex items-center gap-5 mb-6">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
          <img
            src={mainIcon}
            alt="ATS Status Icon"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            ATS Score
          </h2>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-gray-900 tracking-tight">
              {score}
            </span>
            <span className="text-lg font-medium text-gray-400">/100</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{subtitle}</h3>
          <p className="mt-1 text-sm text-gray-600 leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Suggestions List */}
        {suggestions.length > 0 && (
          <div className="space-y-3">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white/80 p-3 ring-1 ring-gray-200/50 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <img
                  src={
                    item.type === "good"
                      ? "/icons/check.svg"
                      : "/icons/warning.svg"
                  }
                  alt={item.type}
                  className="mt-0.5 h-5 w-5 shrink-0 opacity-80"
                />
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Closing Line */}
        <div className="pt-2 border-t border-gray-200/30">
          <p className="text-xs font-semibold text-center text-gray-400 uppercase tracking-widest">
            Keep improving to reach the top 10%
          </p>
        </div>
      </div>
    </div>
  );
}
