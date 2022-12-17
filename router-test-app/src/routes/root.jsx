import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          {/** Sidebar header */}
          <h1>React Router Contacts</h1>

          <div>
            {/** Search bar */}
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>

            {/** New button */}
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>

          {/** Sidebar navigation */}
          <nav>
            <ul>
              <li>
                <Link to={`contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>

       { /** Second Section beside Sidebar */}
        <div id="detail">
          <Outlet/>
        </div>
      </>
    );
  }