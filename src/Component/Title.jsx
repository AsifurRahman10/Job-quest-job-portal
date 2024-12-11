export const Title = ({ title, para }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="font-semibold text-gray-700 mt-4">{para}</p>
    </div>
  );
};
