export default function Posts({ className, children, ...rest }: any) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
