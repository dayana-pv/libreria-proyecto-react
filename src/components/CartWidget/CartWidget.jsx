export const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <button className="btn btn-primary">
        <i className="fas fa-shopping-cart fa-lg"></i>
      </button>
      <p className="text-white">{cantCarrito}</p>
    </>
  );
};
