import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function DetailUser() {
  let username = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const rank = searchParams.get("rank");
  const major = searchParams.get("major");

  const handleRanking = () => {
    setSearchParams({
      rank: "5",
      major: "physics",
    });
  };

  return (
    <>
      <h1>Halo ini halaman {username.username}</h1>
      <p>Rank: {rank}</p>
      <p>Major: {major}</p>
      <button onClick={handleRanking}>ganti ranking</button>
    </>
  );
}

export { DetailUser };
