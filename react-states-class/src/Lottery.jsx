import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";


export default function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    
    let buyTicket = () =>{
        let newTicket = genTicket(3);
        setTicket(newTicket);
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                 <span>{ticket[0]}</span>
                 <span>{ticket[1]}</span>
                 <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning ? "You Win!" : "Try Again"}</h3>
            <br></br><br></br>

            <button onClick={buyTicket} className="buy-ticket-btn">Buy New Ticket</button>
            <br></br>
            
        </div>
    )
};