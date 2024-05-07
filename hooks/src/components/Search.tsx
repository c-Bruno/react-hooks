/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void
}

const Search = ({ onChange }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default memo(Search);
