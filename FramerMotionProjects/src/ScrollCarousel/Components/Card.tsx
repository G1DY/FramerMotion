const Card = ({ card, idx }: { card: any; idx: number }) => {
  return (
    <div
      key={idx}
      className="group relative w-[10rem] h-[15rem] m-2 overflow-hidden bg-neutral-700"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};
export default Card;
