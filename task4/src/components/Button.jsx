export function Button({ onClick, text, disabled }) {
  return (
    <button className="m-5 rounded-2xl text-2xl border-2 p-4" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}