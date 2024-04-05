 
 function hover(){
    console.log("button was hovered")
 }
 
 function Button(){
    return(
    <div>
        <button onMouseOver={hover}>Click me</button>
    </div>
    );
}
export default Button;