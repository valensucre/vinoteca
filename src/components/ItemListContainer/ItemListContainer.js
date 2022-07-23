import "./ItemListContainer.css";

const ItemListContainer = ({ welcome }) => {
  return (
    <div className="container">
      <div className="flex flex-row mt-20 content-center">
        <div className="flex flex-col ml-10 mx-10">
          <h1 className="text-3xl text-gray-600 font-serif mb-2">{welcome}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
