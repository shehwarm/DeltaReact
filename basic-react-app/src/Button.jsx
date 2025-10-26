function printHello(){
    console.log("Hello from Button component");
}
function printBye(){
    console.log("Bye from Button component");
}
function handleDbClicked(){
    console.log("Double Clicked");
}
export default function Button(){
    return (
        <div>
        <button onClick={printHello}>Click me</button>
        <p onMouseOver={printBye}>nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
        <button onDoubleClick={handleDbClicked}>double click me</button>
        </div>
    );
} 