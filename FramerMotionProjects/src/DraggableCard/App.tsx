import DraggableCard from "./DraggableCard";

const App = () => {
  return (
    <div>
      <DraggableCard
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        }}
      >
        Card 1
      </DraggableCard>
      <DraggableCard
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        }}
      >
        Card 2
      </DraggableCard>
      <DraggableCard
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        }}
      >
        Card 3
      </DraggableCard>
    </div>
  );
};
export default App;
