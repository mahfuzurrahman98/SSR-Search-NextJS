import Search from './components/Search';

type searchParamsType = {
  q: string;
};

export default function Home({
  searchParams,
}: {
  searchParams?: searchParamsType;
}) {
  const { q = '' } = searchParams || {};
  return (
    <div>
      <p>Hello</p>
      <p>Query: {q}</p>
      <Search searchText={q} />
    </div>
  );
}
