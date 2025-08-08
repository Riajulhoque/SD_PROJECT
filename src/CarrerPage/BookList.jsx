import React from "react";
import books from "../../public/book.json"; 

function BookList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {books.map((book, index) => (
        <div key={index} className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt={book.bookName}
              className="w-40 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book.bookName}</h2>
            <p>
              <strong>Writer:</strong> {book.writerName} <br />
              <strong>Price:</strong> ৳{book.price} <br />
              <strong className="text-green-600">
                Discount Price: ৳{book.discountPrice}
              </strong>
            </p>
            <div className="card-actions justify-end">
              <button className="btn text-secondary hover:bg-secondary hover:text-white">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
