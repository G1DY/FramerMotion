interface cardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: cardProps) => {
  return (
    <div className="flex m-5 flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="object-cover w-full h-28" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <button className="bg-black mt-4 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Card;
