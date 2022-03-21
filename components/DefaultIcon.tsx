import { memo } from "react";
import figicons from "./Icons/fixtures/Phosphor-Fill.json";

interface Props {
  name: keyof typeof figicons;
}

export default memo(function DefaultIcon({ name }: Props) {
  const content = figicons[name].content;
  return (
    <svg
      height={20}
      width={20}
      viewBox="0 0 32 32"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
});
