function Error(props) {
  return (
    <div >
        <p>
         404: Page not found
        </p>
        <button
         onClick={(e) => {
          e.preventDefault();
          props.history.push("/home");
        }}
        >back</button>
    </div>
  );
}

export default Error;

