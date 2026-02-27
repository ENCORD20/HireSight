

const ScoreBadge = ({ score }: { score: number }) => {
  let badgeClass = "bg-badge-red";
  let textClass = "text-badge-red-text";
  let label = "Needs Improvement";

  if (score > 70) {
    badgeClass = "bg-badge-green";
    textClass = "text-badge-green-text";
    label = "Strong";
  } else if (score > 49) {
    badgeClass = "bg-badge-yellow";
    textClass = "text-badge-yellow-text";
    label = "Good Start";
  }

  return (
    <div className={`score-badge ${badgeClass}`}>
      <p className={`${textClass} text-xs font-bold`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
