import React from "react";

import { Header } from "./Header";
import "./page.css";

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Kanika Bijlani" })}
        onLogout={() => setUser(undefined)}
        // onCreateAccount={() => setUser({ name: "Kanika Bijlani" })}
      />

      <section>
        <p>Sample Page</p>
      </section>
    </article>
  );
};
