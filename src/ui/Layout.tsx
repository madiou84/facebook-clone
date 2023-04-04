import classNames from "classnames";

interface LayoutProps {
  [key: string]: any;
  className?: string;
  leftComponent: JSX.Element;
  rightComponent: JSX.Element;
  centerComponent: JSX.Element;
  leftComponentClass?: string;
  rightComponentClass?: string;
}

export default function Layout(props: LayoutProps) {
  const {
    className,
    leftComponent,
    rightComponent,
    centerComponent,
    leftComponentClass,
    rightComponentClass,
    ...rest
  } = props;

  return (
    <div {...rest} className={className}>
      <div className={classNames(leftComponentClass, "w-1/4 xl:w-1/4")}>
        {leftComponent}
      </div>

      <div className="w-3/6 xl:w-2/5">{centerComponent}</div>

      <div className={classNames(rightComponentClass, "w-1/4 xl:w-1/4")}>
        {rightComponent}
      </div>
    </div>
  );
}
