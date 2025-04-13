import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the PeoplePad!</h1>
      <h2 className={css.slogan}>All Your Contacts, One Smart Pad.</h2>
      <p className={css.text}>
        Please log in to manage your contacts.
      </p>
    </div>
  );
}
