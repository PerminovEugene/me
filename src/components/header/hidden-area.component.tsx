import classNames from "classnames";

const HiddenArea = ({
  onClick,
  isVisible,
}: {
  onClick: () => void;
  isVisible: boolean;
}) => (
  <div
    className={classNames(
      "fixed inset-0 w-screen h-screen max-h-screen bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 z-40",
      "md:hidden",
      {
        "opacity-0 pointer-events-none": !isVisible, // Hide when menu is closed
      }
    )}
    onClick={() => onClick()} // Clicking outside closes menu
  />
);
export default HiddenArea;
