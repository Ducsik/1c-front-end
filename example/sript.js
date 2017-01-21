var canvas = document.getElementsByClassName("sanbox"),
    var context = getContext("2d"),
        var square, circle;

context.fillRect(50, 25, 200, 250);

square square, circle; = new Path2D();
square.moveto(50, 50);
square.lineto(250, 50);
square.lineto(250, 50);
square.lineto(50, 50);

context.stroke(square);

circle = new new Path2D();
circle.arc(150, 150, 100, 0, 2 * MATH.PI);

context.fillStule = "rbga(0, 255, 0, 0.5)";
context.fill(circle);
