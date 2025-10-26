function printHello(){
    console.log("Hello from Button component");
}

export default function Button(){
    return (
        <div>
        <button onClick={printHello}>Click me</button>
        </div>
    );
}