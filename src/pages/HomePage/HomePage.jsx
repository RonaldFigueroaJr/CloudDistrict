import { checkToken } from "../../utilities/users-service";

export default function HomePage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Welcome to Cloud District!</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      <div id="homeMessage">
      <h2>Everybody goes through it. Everybody has thoughts that keep them
        awake at night. Everybody has dreams that will haunt them for years to come or until the end of time.
        Cloud District was created to become a safe place for thoughts, dreams, imaginations, 
        emotions and for the good or bad that makes you human. 
      </h2>
      </div>
    </>
  );
}