import { type ElementType, type ReactNode } from "react";

type FAQCardHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface FAQCardHeadingProps {
  level: FAQCardHeadingLevel;
  children: ReactNode;
  className?: string;
}

export const FAQCardHeading = ({
  level,
  children,
  className = "",
}: FAQCardHeadingProps) => {
  const Tag = level as ElementType;

  return (
    <Tag className={`text-2xl sm:text-3xl font-medium ${className}`}>
      {children}
    </Tag>
  );
};

interface FAQCardBodyProps {
  children: ReactNode;
  className?: string;
}

export const FAQCardBody = ({ children, className = "" }: FAQCardBodyProps) => {
  return <p className={className}>{children}</p>;
};

interface FAQCardListProps {
  itemContent: ReactNode[];
}

export const FAQCardList = ({ itemContent }: FAQCardListProps) => {
  return (
    <ul className="mt-2">
      {itemContent.map((i, index) => {
        return (
          <li key={index}>
            <div className="flex items-center gap-2">
              <div
                className="bg-bg-dark min-w-4 size-4"
                aria-hidden="true"
                role="presentation"
              />
              <span className="font-medium">{i}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

interface FAQCardProps {
  children: ReactNode;
}
const FAQCard = ({ children }: FAQCardProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default FAQCard;
