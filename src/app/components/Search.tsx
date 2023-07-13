import axios from 'axios';

type Country = {
  id: string;
  name: string;
  capital: string;
  population: number;
  continent: string;
};

async function getCountries(searchText = '') {
  const response = await axios.get(
    `http://localhost:3000/api/search?q=${searchText}`
  );

  const data = response.data as Country[];
  return data;
  return [
    {
      id: '1',
      name: searchText,
      capital: 'test',
      population: 100,
      continent: 'test',
    },
  ];
}

export default async function Search({ searchText }: { searchText: string }) {
  const results: Country[] = await getCountries(searchText);

  return (
    <div>
      Hello here is {results[0].name}
      <form method="GET">
        <input type="text" name="q" placeholder="Enter search query" />
        <button type="submit">Search</button>
      </form>
      <p className="my-4">
        Query: <strong>{searchText}</strong>
      </p>
      <div className="container flex flex-wrap mx-auto">
        {results.map((country: any) => (
          <div
            key={country.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3"
          >
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-gray-900 text-xl leading-6 font-medium">
                  {country.name}
                </h3>
                <p className="text-gray-600">{country.capital}</p>
                <p className="text-gray-600">{country.continent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
