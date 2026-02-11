interface BadgeProps {
  variant: "completed" | "canceled" | "pending"; // Badge type
  status: string; // Status of the badge
  className?: string; // Additional className
}

const Badge: React.FC<BadgeProps> = ({ variant, status, className }) => {
  // Tailwind classes for each variant
  const variantClasses = {
    completed: {
      container: "bg-completed-500/70 border-completed-600 text-white",
    },
    canceled: {
      container: "bg-canceled-500/70 border-canceled-600 text-white",
    },
    pending: {
      container: "bg-pending-300/90 border border-pending-400 text-night-dark",
    },
  };

  return (
    <div
      className={`w-32 h-8 border ${variantClasses[variant].container} font-medium rounded-2xl flex justify-center items-center ${className}`}
    >
      <span>{status}</span>
    </div>
  );
};

export default Badge;
