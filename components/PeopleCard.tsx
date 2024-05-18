/* eslint-disable @next/next/no-img-element */
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PeopleCards } from "./models/cardGrid.model";
import { useState } from "react";

function PeopleCard({ cards }: { cards: PeopleCards[] }) {
  const [toggle, setToggle] = useState(true);

  return (
    cards.map((card: PeopleCards) => (
      <div
        key={card.id}
        className="relative max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg mb-10 h-80 group"
      >
        <div className="px-4 pb-6 h-full">
          <div className="group-hover:flex text-center">
            <div className="my-4 group-hover:my-0">
              <img
                className="h-32 w-32 group-hover:h-16 group-hover:w-16 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-4 transition-all duration-300 ease-in-out"
                src={card.image}
                alt=""
              />
            </div>

            <div className="py-2 font-google-sans m-4 group-hover:py-0 group-hover:text-left">
              <h3 className="font-normal text-[28px] text-gray-800 dark:text-gray-900 mb-1 leading-[35.62px] mt-2">
                {card.title}
              </h3>
              <p className="font-normal text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2 group-hover:text-left">
                {card.content}
              </p>
            </div>

            <div className="inline-flex text-xl gap-5 text-gray-700 dark:text-gray-900 items-center mt-5 group-hover:hidden">
              {card.linkedin && (
                <a
                  href={card.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {card.twitter && (
                <a
                  href={card.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              )}
            </div>
          </div>
          <div className="h-1/2 font-normal text-center text-[14px] text-gray-800 dark:text-gray-900 mt-2 leading-[17.81px] hidden group-hover:flex group-hover:items-center group-hover:justify-center ">
            <p>
              {/* {card.content} */}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              earum. Perferendis fuga molestias voluptatum aspernatur sed minus.
              Tempora facilis nulla soluta voluptatum quae autem, officiis nihil
              voluptate. Error, dolorem officiis!
            </p>
          </div>
        </div>
      </div>
    ))
  );
}

export default PeopleCard;