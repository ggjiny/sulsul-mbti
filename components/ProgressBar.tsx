interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-100">
      <div
        className="h-[2px] bg-blue-500"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}
