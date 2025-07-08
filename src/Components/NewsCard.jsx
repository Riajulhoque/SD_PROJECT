import { FaStar, FaEye } from 'react-icons/fa';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { Link } from 'react-router';


const NewsCard = ({ news }) => {
  const {
    id ,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="card shadow-lg  rounded-xl bg-white">
      {/* Header */}
      <div className="flex justify-between bg-base-200 items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          {/* <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" /> */}
          <div>
            {/* <h2 className="font-semibold">{author.name}</h2> */}
            <p className="text-sm p-3 text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          {/* <BsBookmark className="cursor-pointer" /> */}
          <BsShare className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold px-4 pt-4">{title}</h1>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={thumbnail_url} alt={title} className="rounded-xl w-full object-cover" />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.slice(0, 250)}...
        <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer"> Read More</Link>
      </div>

      {/* Tags */}
      <div className="px-4 pb-2">
        {tags.map(tag => (
          <span key={tag} className="badge badge-outline mr-2 mb-1">{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pt-10 pb-4">
        <div className="flex col-span-7 items-center text-orange-400 gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? '' : 'text-gray-300'} />
          ))}
          <span className="ml-1 text-gray-700 font-medium">{rating.number}</span>
        </div>
        {/* <div className="savebutton flex items-end">
          <button className=''><BsBookmark className="cursor-pointer" /></button>
        </div> */}
        <div className="flex col-span-4 items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
          <div className="savebutton">
            <BsBookmark className="cursor-pointer" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;
