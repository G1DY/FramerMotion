import AnimationCard from "./AnimationCard";

const WhileInView = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mb-4">
        Scroll Down to see the animation
      </h1>
      <div className="h-screen flex">
        <AnimationCard />
      </div>
    </div>
  );
};
export default WhileInView;
