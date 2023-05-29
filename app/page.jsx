import Feed from "@components/Feed";


const Home = () => (
  <section className="w-full flex-center flex-col" >
    <h1 className="head_text text-center">
      Browse Images
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        On Your Global Gallery
      </span>
    </h1>
    <p className="desc text-center">
      Image Guru is an open source platform that allows you to Browse
      and filter different images according to your preferences.
      Be Global!
    </p>
    <Feed />
  </section>
);

export default Home;
