import React from "react";

<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
function Cards({ category, name, title, price, image }) {
=======

function Cards({ category,name,title,price,image }) {
>>>>>>> b65a06e84297fc9796cfac89c5657e1eb71b30c1

  if (!title) {
    return null; // Skip rendering if title is missing
  }
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>{title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
<<<<<<< HEAD


=======
>>>>>>> b65a06e84297fc9796cfac89c5657e1eb71b30c1
