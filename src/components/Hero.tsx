import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        <span className="hero__faded">Hey, there.</span>
      </h1>
      <h2>
        I'm Benício — an UI/UX Designer and Frontend Developer{" "}
        <span className="hero__faded">based in Rio de Janeiro, Brazil.</span>
      </h2>
    </section>
  );
}

export default Hero;
