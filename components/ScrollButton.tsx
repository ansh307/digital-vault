"use client";

type Props = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
};

export const ScrollButton = ({ targetId, children, className }: Props) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button onClick={handleScroll} className={className}>
      {children}
    </button>
  );
};
