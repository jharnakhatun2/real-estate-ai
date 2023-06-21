import { useNavigate, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.log("🚀 ~ file: NotFound.jsx:5 ~ NotFound ~ error:", error);

  const navigate = useNavigate();

  return (
    <section>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={()=> navigate('/')}>Back to Home</button>
    </section>
  )
}