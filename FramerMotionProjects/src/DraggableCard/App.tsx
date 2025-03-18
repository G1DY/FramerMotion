import DraggableCard from "./DraggableCard";

const App = () => {
  return (
    <div className="justify-center flex items-center h-[100vh] bg-[#f3f3f3]">
      <DraggableCard
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        }}
      >
        Card 1
      </DraggableCard>
      <DraggableCard
        style={{
          background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        }}
      >
        Card 2
      </DraggableCard>
      <DraggableCard
        style={{
          background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 99%)",
        }}
      >
        Card 3
      </DraggableCard>
    </div>
  );
};
export default App;
