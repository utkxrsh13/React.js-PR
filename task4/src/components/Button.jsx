export function Button(params) {
  return(
    <button onClick={params.handleOnClick} {...params}>
      {params.text}
    </button>
  );
};