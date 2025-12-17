import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Swiper = () => {
  const [cards] = useState([
    {
      id: 1,
      image: "https://avatars.mds.yandex.net/i?id=b5786c2219b38b94b8b51472202cc0244fc29472-4886004-images-thumbs&n=13",
      title: "Stomach",
      description: "Stomach-related issues...",
    },
    {
      id: 2,
      image: "https://avatars.mds.yandex.net/i?id=caf5350462973466ac80334077a3ab7d09d9f09b-3989655-images-thumbs&n=13",
      title: "Diarrhea",
      description: "Diarrhea can result from...",
    },
    {
      id: 3,
      image: "https://avatars.mds.yandex.net/i?id=a7d309e73327962a53d29487bf5ab7ed19125ddfe653e733-5440551-images-thumbs&n=13",
      title: "High Blood Pressure",
      description: "High blood pressure increases...",
    },
    {
      id: 4,
      image: "https://avatars.mds.yandex.net/i?id=4b6e338406481cc11bc2adaa90bc03f72b4c2ab1-6235668-images-thumbs&n=13",
      title: "Control on Sugar",
      description: "Controlling blood sugar is essential...",
    },
    {
      id: 5,
      image: "https://avatars.mds.yandex.net/i?id=50f8ca6dabd7168f8016ddbb8641c0613137302b0016612b-5648147-images-thumbs&n=13",
      title: "Blood Cancer",
      description: "Blood cancer affects blood cells...",
    },
    {
      id: 6,
      image: "https://avatars.mds.yandex.net/i?id=d08bc8551d1fd48bbbf9382aa4dc43f003086a36-4577816-images-thumbs&n=13",
      title: "Heart Replacement",
      description: "Heart replacement is a critical...",
    },
    {
      id: 7,
      image: "https://avatars.mds.yandex.net/i?id=4d88c956c0dda27840a977142aff2839-5865989-images-thumbs&n=13",
      title: "Brain Tumor",
      description: "Brain tumors can be benign...",
    },
    {
      id: 8,
      image: "https://avatars.mds.yandex.net/i?id=e4bfafe8360d7121fcfc5908963edeacbea5ea6d-9211032-images-thumbs&n=13",
      title: "Lungs",
      description: "Lung health is vital...",
    },
    {
      id: 9,
      image: "https://avatars.mds.yandex.net/i?id=9fab36f6d10c013e2e272fc687e9a1461ec990fc-8280929-images-thumbs&n=13",
      title: "Broken Arm",
      description: "A broken arm usually results...",
    },
  ]);

  return (
    <div>
      <div className="text-4xl text-center text-gray-700 font-bold m-5">
        <h1>Get Treatment</h1>
      </div>

      <div className="overflow-x-auto whitespace-nowrap px-4 py-2">
        <div className="flex gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="inline-block w-64 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-center text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{card.description}</p>
                <div className="flex justify-center mt-4">
                  <Link to="/">
                    <button className="bg-gray-800 text-white text-xs rounded-md px-4 py-2">
                      Get Treatment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};