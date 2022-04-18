import type { LinksFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";

import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function JokesRoute() {
  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix Jokes"
              aria-label="Remix Jokes"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
          {/* 여기서 중첩 라우팅 되어서 한 페이지에서 다른 라우팅이 같이 보여짐*/}
            <Outlet /> 
          </div>
        </div>
      </main>
    </div>
  );
}