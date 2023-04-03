import classes from "./Contact.module.css";

function ContactForm() {
  return (
    <section id="contact" className={classes.contact}>
      <h3>Let's get in touch?</h3>
      <span>
        <a href="mailto:benilio129@gmail.com?subject=Hey, there!">
          benilio129@gmail.com
        </a>
      </span>
    </section>
  );
}

export default ContactForm;
