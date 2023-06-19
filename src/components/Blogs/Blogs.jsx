import "./Blogs.css";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../../utils/motion.js";
import {styles} from "../../styles.js";
import React from "react";
import {SectionWrapper} from "../../hoc/index.js";

const FoldableCard = ({ index, title, category, date, link }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="flex-1 green-pink-gradient rounded-[10px] shadow-card"
        key={index}
    >
        <a href={link} target="_blank" rel="noopener noreferrer">
            <li
                className="articles__article"
                style={{ "--animation-order": index + 1 }}

            >
                <a className="articles__link">
                    <div className="articles__content articles__content--lhs">
                        <h2 className="articles__title">{title}</h2>
                        <div className="articles__footer">
                            <p>{category}</p>
                            <time>{date}</time>
                        </div>
                    </div>
                    <div
                        className="articles__content articles__content--rhs"
                        aria-hidden="true"
                    >
                        <h2 className="articles__title">{title}</h2>
                        <div className="articles__footer">
                            <p>{category}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                </a>
            </li>
        </a>

    </motion.div>
);

function Blogs() {
    const articles = [
        {
            title: "Initializing Your Database with Initial Data in Mongoose",
            category: "MongoDB",
            date: "10 Jun 2023",
            link: "https://medium.com/@arunchaitanya/initializing-your-database-with-initial-data-in-mongoose-3c7853bb0c32"
        },
        {
            title: "Normal Middleware and Error Handling Middleware in Express.Js",
            category: "Express.Js",
            date: "15 Jun 2023",
            link: "https://medium.com/@arunchaitanya/understanding-normal-middleware-and-error-handling-middleware-in-express-js-d3ecbd9b9849"
        },
        {
            title: "Remove preceding 0’s in the numeric input (JS-React.JS)",
            category: "JavaScript",
            date: "24 May 2020",
            link: "https://medium.com/@arunchaitanya/remove-preceding-0s-in-the-numeric-input-js-c69bab0fb58e"
        },
    ];

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    In the blogs section, I share my insights, ideas, and knowledge on various topics related to my field of expertise. Each blog post provides valuable information, practical tips, and thought-provoking discussions, allowing readers to expand their understanding and stay updated on the latest trends in the industry.
                </motion.p>
            </div>

            <ol className="articles mt-20 flex flex-wrap gap-10">
                {articles.map((article, index) => (
                    <FoldableCard key={article.title} index={index} {...article} />
                ))}
            </ol>

        </>

    );
}

export default SectionWrapper(Blogs, "");
