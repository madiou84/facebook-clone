export default function MessageToItem({ message }: any) {
  return (
    <div className="flex items-end flex-row-reverse py-4">
      <p className="w-60 px-3 py-2 bg-defaultcolor-500 text-white rounded-2xl">
        {message}
      </p>
    </div>
  );
}
