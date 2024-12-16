import { useParams, useSearchParams } from "react-router-dom";

function UserDetail() {
  let username = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const rank = searchParams.get("rank");
  const major = searchParams.get("major");

  const handleChangeRank = () => {
    setSearchParams({
      rank: "2",
      major: "chemistry",
    });
  };
  return (
    <div>
      <h1>Detail User {username.username}</h1>
      <p>Rank: {rank}</p> <p>Major: {major}</p>
      <button onClick={handleChangeRank}>ubah rank</button>
    </div>
  );
}

export { UserDetail };
