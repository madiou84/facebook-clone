import { classNames } from "../../utils/helper";

export default function ButtonCreateSalon({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={classNames(
        "px-3 py-2 border border-opacity-30 border-primary-200 text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 ease-in",
        className
      )}
    >
      Créer un salon
    </button>
  );
}
