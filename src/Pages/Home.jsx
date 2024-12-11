import { Banner } from "../Component/Banner";
import { CategoryJob } from "../Component/CategoryJob";

export const Home = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10">
      <section>
        <Banner></Banner>
      </section>
      <section className="mt-20">
        <CategoryJob></CategoryJob>
      </section>
    </div>
  );
};
