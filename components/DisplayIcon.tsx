interface Props {
  name: string;
  height: number;
  width: number;
  content: string;
}

export default function DisplayIcon({ name, height, width, content }: Props) {
  return (
    <div className="group flex items-center border-2 border-primary/20 dark:border-tertiary/20 hover:border-primary dark:hoverborder-tertiary group truncate">
      <div className="flex p-3 border-r-2 border-primary/10 dark:border-tertiary/10 group-hover:border-primary/40 dark:group-hover:border-tertiary/40 dark:text-tertiary">
        <svg
          height={height}
          width={width}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="flex ml-4 truncate pr-4">
        <p className="font-semibold truncate">{name}</p>
      </div>
    </div>
  );
}
