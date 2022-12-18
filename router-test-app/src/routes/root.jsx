import { Outlet, 
          NavLink, 
          useLoaderData, 
          Form, 
          redirect, 
          useNavigation,
          useSubmit 
} from "react-router-dom";
import { getContacts, createContact } from "../contact";
import { useEffect } from "react";


/** Loader: Data Loader */
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

/** Action: Create contact */
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

/** Main */
export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
  );
  
  return (
      <>     
        <div id="sidebar">
          
          {/** Sidebar header */}
          <h1>React Router Contacts</h1>

          <div>
            {/** Search bar */}
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                    const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}
                className={searching ? "loading" : ''}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            
            {/* New Btn: For creating new contacts */}
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>

          {/** Sidebar navigation */}
          <nav>
            <ul>
              {contacts.length ? (
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact.id}>
                       <NavLink to={`contacts/${contact.id}`}
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                        {/* Nav item Label */}
                        {contact.first || contact.last ? (
                                <>
                                  {contact.first} {contact.last}
                                </>
                              ) : (
                                <i>No Name</i>
                              )}{" "}

                        {/* Favourite Indicator */}
                        {contact.favorite && <span>★</span>}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  <i>No contacts</i>
                </p>
              )}
            </ul>
          </nav>
        </div>

       { /** Second Section beside Sidebar */}
        <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }>
          {/* This displays the children of the parent route */}
          <Outlet/>
        </div>
    </>
  );
}