import lauraImage from "../assets/laura.svg";

const About = () => {
  return (
    <main className="px-5 py-10">
        <h1>About Me</h1>
        <img
          className="m-auto my-5"
          src={lauraImage}
          width={160}
          alt="Image of a cartoon lady that is knitting"
        />
    </main>
  )
}

export default About