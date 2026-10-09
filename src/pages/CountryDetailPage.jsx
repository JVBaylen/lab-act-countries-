
import { useParams, Link } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();

  const country = COUNTRIES.find(
    (c) => c.code === countryCode.toUpperCase()
  );

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/countries"
        className="btn btn-ghost mb-4"
      >
        ← Back to Countries
      </Link>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-6xl mb-2">{country.flag}</div>

          <h1 className="text-3xl font-bold">
            {country.name}
          </h1>

          <div className="divider"></div>

          <p>
            <strong>Country Code:</strong> {country.code}
          </p>

          <p>
            <strong>Capital:</strong> {country.capital}
          </p>

          <p>
            <strong>Region:</strong> {country.region}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;