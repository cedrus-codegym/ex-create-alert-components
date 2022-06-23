function App() {
  return (
    <div className="row col-md-6">
    <Alert message="Hoang dep trai"/>
    </div>
  );
}

const Alert = ({message})=>{
  return (
  <div class="alert alert-warning" role="alert">
  {message}
</div>
)
}

export default App;
