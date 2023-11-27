import useWishList from "../../../hooks/useWishList";

const WishList = () => {
  const [wishlist] = useWishList();

  return (
    <div>
      <h2 className="text-xl">My WishList:{wishlist.length} </h2>
    </div>
  );
};

export default WishList;
