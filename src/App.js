import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App({course}) {
  return (
   <>
   <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
   </>
  );
}

export default App;
