import { checkToken } from "../../utilities/users-service";

export default function HomePage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Welcome to Cloud District!</h1>
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </>
  );
}