interface StatsCardProps {
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  isFinal?: boolean;
}

export function StatsCard({ number, label, description, icon, isFinal }: StatsCardProps) {
  return (
    <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="text-white mb-2 flex justify-center">{icon}</div>
      <div className={`text-3xl font-bold text-white mb-1 transition-transform duration-500 ease-out ${isFinal ? 'animate-bounce-final' : ''}`}>
        {number}
      </div>
      <div className="text-lg font-semibold text-white mb-1">{label}</div>
      <div className="text-sm text-gray-300">{description}</div>
    </div>
  );
}
