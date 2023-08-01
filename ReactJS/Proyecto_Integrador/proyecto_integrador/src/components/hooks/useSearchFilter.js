import { useSearchParams } from 'react-router-dom'

export default function useSearchFilter() {
    const [searchParams, setSearchParams] = useSearchParams();

    return searchParams.get('q');
}