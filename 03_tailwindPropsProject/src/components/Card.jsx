import React from "react";
//here the code for the card component is written then it is exported and rendered in the "app.jsx" using <Card />

function Card({cardName, btnText}) {    
//cardName parameter is passed,so that all the card have different parameters as required

  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://picsum.photos/301"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {cardName}          
            </h2>
            <p className="text-gray-400">{btnText}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
