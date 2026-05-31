export const GuestItem = ({ guest, onToggleButton }) => {
  const { id, name, isConfirmed } = guest;

  function toggleButton() {
    onToggleButton(id);
  }

  return (
    <li className={`guest-card ${isConfirmed ? "confirmed" : "not-confirmed"}`}>
      <p className="guest-name">{name}</p>
      <button onClick={toggleButton}>
        {isConfirmed ? "Marcar como ausente" : "Marcar como confirmado"}
      </button>
    </li>
  );
};
