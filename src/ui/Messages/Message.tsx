export default function Message({ children }: any) {
  return (
    <div className="w-full px-2 h-96 max-h-96 overflow-y-auto">{children}</div>
  );
}
