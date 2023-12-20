import { Link } from "react-router-dom";

export function HomeWithoutAnimation() {
  return (
    <article>
      <h1>Let's go!</h1>
      <ul>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/london">White lines of Canary Wharf</Link>
        </li>
      </ul>
    </article>
  );
}
