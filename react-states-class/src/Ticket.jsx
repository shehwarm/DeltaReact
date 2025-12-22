import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map(num => (
                <TicketNum key={num} num={num} />
            ))}
        </div>
    );
}