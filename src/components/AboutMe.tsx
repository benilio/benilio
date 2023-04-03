import classes from "./About.module.css";

function AboutMe() {
  return (
    <section id="about" className={classes.about}>
      <h3>About me</h3>
      <p>
        I'm a curious individual that loves to learn about new things and
        languages. Whenever I'm not working or studying you might find me
        watching miscellaneous videos on YouTube or playing some games.
      </p>
    </section>
  );
}

export default AboutMe;
