import { uselist } from "../Context";



function MovieCard({ movie }) {
  const { addList } = uselist();

  const add = () => {
    addList(movie);
  };

  return (
    <div className="w-40 p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
      <img
        src={`https://picsum.photos/seed/${movie.id}/200/120`}
        alt={movie.title}
        className="w-full h-28 object-cover rounded-lg mb-2"
      />
      <p className="text-sm font-medium truncate">{movie.title}</p>
      <p className="text-xs text-gray-500 capitalize mb-2">{movie.type}</p>
      <button
        onClick={add}
        className="w-full text-xs bg-black text-white rounded-md py-1.5 hover:bg-gray-800 transition"
      >
        + Add
      </button>
    </div>
  );
}

export default MovieCard;