import { GuestItem } from "./GuestItem";

export const GuestList = ({ guests, onToggleButton }) => {
  const confirmados = guests.filter(g => g.isConfirmed);
  const noConfirmados = guests.filter(g => !g.isConfirmed);

  return (
    <>
      <section className="guest-list">
        <h2>Invitados Confirmados</h2>
        <ul>
          {confirmados.map(guest => (
            <GuestItem
              key={guest.id}
              guest={guest}
              onToggleButton={onToggleButton}
            />
          ))}
        </ul>
      </section>

      <section className="guest-list">
        <h2>Invitados No Confirmados</h2>
        <ul>
          {noConfirmados.map(guest => (
            <GuestItem
              key={guest.id}
              guest={guest}
              onToggleButton={onToggleButton}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
