var mouseEvent = "empty";
    new width= screen.width-70
    new height=screen.height-300
    if(width < 992)
    {
        document.getElementById("myCanavas").width=new_width;
        document.getElementById("myCanavas").height=new_height;
        document.body.style.overflow="hidden";
    }
    function my_touchchstart(e)
    {
       console.log("my_touchstart")
       


    }
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }    
    canvas.addEventListener("mouseleave,my_mousedown")
    function my_mouseleave(e)        
    {
        mouseEvent="mouseleave";   
    }
    function my_mouseup(e)        
    {
        mouseEvent="mouseup";  

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}