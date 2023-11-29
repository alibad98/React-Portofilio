import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const showCategory = (selectedCat) => {
    const newArr = myProjects.filter((item) => {
      const cats = item.category.find((myItem) => {
        return myItem === selectedCat;
      });
      return cats === selectedCat;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <div className=" flex section-left">
        <button
          onClick={() => {
            setActive("all");
            setArr(myProjects);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setActive("django");
            showCategory("django");
          }}
          className={active === "django" ? "active" : null}
        >
          Django
        </button>
        <button
          onClick={() => {
            setActive("react");
            showCategory("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setActive("odoo");
            showCategory("odoo");
          }}
          className={active === "odoo" ? "active" : null}
        >
          Odoo
        </button>
        <button
          onClick={() => {
            setActive("other");
            showCategory("other");
          }}
          className={active === "other" ? "active" : null}
        >
          Other
        </button>
      </div>
      <div className="flex section-right">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 14, type: "spring", stiffness: 100 }}
                key={item.projectTitle}
                className="card"
              >
                <img width={266} src={item.img} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.paragraph}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href="sssss" className="icon-link"></a>
                      <a href="sssssss" className="icon-github"></a>
                    </div>

                    <a className="link flex" href="sssss">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}
