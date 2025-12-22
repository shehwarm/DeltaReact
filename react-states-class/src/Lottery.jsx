import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n=3, winningSum=15}){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === winningSum;
    
    let buyTicket = () =>{
        let newTicket = genTicket(n);
        setTicket(newTicket);
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket} />
            {isWinning ? <h2 className="winner">You Win!</h2> : <h2 className="loser">You Lose!</h2>}
            <button onClick={buyTicket} className="buy-ticket-btn">Buy New Ticket</button>
            <br></br>
            
        </div>
    )
};