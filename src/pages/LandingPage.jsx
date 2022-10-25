import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../components/hooks/useDebounce';
import { MoviesGrid } from "../components/MoviesGrid/MoviesGrid";
import { Search } from '../components/Search/Search';

export default function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search")

  const debounceSearch = useDebounce(search, 300)
  return (
    <div>
      <Search />
      <MoviesGrid key={debounceSearch} search={debounceSearch}/>
    </div>
  )
}
