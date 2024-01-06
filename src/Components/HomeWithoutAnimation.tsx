import { Link } from "react-router-dom";

export function HomeWithoutAnimation() {
  return (
    <article>
      <h1> Here is my beautiful creation!</h1>
      <li>
        <Link to="/accordion">Accordion</Link>
      </li>
      <li>
        <Link to="/blog">Scroll Based Animation</Link>
      </li>
    </article>
  );
}
