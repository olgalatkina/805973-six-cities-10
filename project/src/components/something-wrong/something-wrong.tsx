const SomethingWrong = (): JSX.Element => (
  <>
    <h2>Something went wrong</h2>
    <button onClick={() => window.location.reload()}>Click to reload!</button>
  </>
);

export default SomethingWrong;
