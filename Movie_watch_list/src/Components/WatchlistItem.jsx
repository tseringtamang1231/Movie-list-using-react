
import { uselist } from "../Context";

function WatchlistItem({ movie }) {
    const {deletList} = uselist();
    const  delet = (e) =>{
      deletList(movie)
    }
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gray-200 rounded-md"></div>
        <span className="text-sm">{movie.title}</span>
      </div>
      <button 
      onClick={delet}
      className="text-gray-400 text-sm">✕</button>
    </div>
  );
}

export default WatchlistItem;