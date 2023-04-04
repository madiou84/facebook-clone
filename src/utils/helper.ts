export function classNames(...props: any) {
  return props.filter(Boolean).join(" ");
}

export function capitalizeFirstLetter(str: string): string {
  return `${str.charAt(0).toLocaleUpperCase()}${str.slice(1)}`;
}