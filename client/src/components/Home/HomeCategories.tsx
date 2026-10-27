import { Link } from "react-router-dom";
import { categoriesData } from "../../assets/assets";
import { motion } from "framer-motion";

const HomeCategories = () => {
  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold">Browse Categories</h2>
          <p className="text-sm text-app-text-light mt-1">
            Find exactly what you need using
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden no-scrollbar mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="category-marquee flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {categoriesData.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex flex-col items-center shrink-0 gap-3 p-4"
              >
                <div className="size-18 sm:size-26 sm:p-2 rounded-2xl overflow-hidden bg-orange-100 group-hover:ring-2 ring-orange-300/75 transition-all">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain rounded-full transition-all"
                  />
                </div>
                <span className="text-xs font-medium text-zinc-600 text-center leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
