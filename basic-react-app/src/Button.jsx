function handleClick(event){
    console.log("Hello from Button component");
    console.log(event);
}
function handleMouseOver(){
    console.log("Bye from Button component");
}
function handleDbClicked(){
    console.log("Double Clicked");
}
export default function Button(){
    return (
        <div>
        <button onClick={handleClick}>Click me</button>
        <p onMouseOver={handleMouseOver}>nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
        <button onDoubleClick={handleDbClicked}>double click me</button>
        </div>
    );
} 