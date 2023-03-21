export const FormError = ({
  isVisible,
  message,
}: {
  isVisible: boolean;
  message: string;
}) => {
  if (!isVisible) return <></>;
  return (
    <div>
      <p className="text-red-500 text-sm">{message}</p>
    </div>
  );
};
