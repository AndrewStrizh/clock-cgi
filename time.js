onload = () => {
    const canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 600, 600);


    function drawFrame(t) {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        ctx.setTransform();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 600, 600);
        ctx.lineWidth=20;
        ctx.fillStyle = 'black';
        
        let circle1 = new Path2D();
        circle1.arc(300,300, 280, 0, 2 * Math.PI);
        ctx.stroke(circle1);

        let circle2 = new Path2D();
        circle2.arc(300,300, 10, 0, 2 * Math.PI);
        ctx.fill(circle2);

        for (let i = 0; i < 60; i += 5){
            let cos = Math.cos(6* i * (3.14/180));
            let sin = Math.sin(6* i * (3.14/180));
            ctx.setTransform(cos, sin, -sin, cos, canvas.width/2, canvas.height/2);
            ctx.fillStyle = 'black';
            ctx.fillRect(250, -10, 40, 20);
            ctx.transform(1, 0, 0, 1, 30, 1);
        }


        let cos = Math.cos(6* s * (3.14/180));
        let sin = Math.sin(6* s * (3.14/180));
        ctx.setTransform(cos, sin, -sin, cos, canvas.width/2, canvas.height/2);
        ctx.fillStyle = 'black';
        for (let i = 0; i < 8; i += 1){
            ctx.fillRect(0, -10, 30, 20 - 2*i);
            ctx.transform(1, 0, 0, 1, 30, 1);
        }


        cos = Math.cos(6* m * (3.14/180));
        sin = Math.sin(6* m * (3.14/180));
        ctx.setTransform(cos, sin, -sin, cos, canvas.width/2, canvas.height/2);
        ctx.fillStyle = 'black';
        for (let i = 0; i < 7; i += 1){
            ctx.fillRect(0, -10, 50, 20 - 2.5*i);
            ctx.transform(1, 0, 0, 1, 25, 1);
        }


        cos = Math.cos(30* h * (3.14/180));
        sin = Math.sin(30* h * (3.14/180));
        ctx.setTransform(cos, sin, -sin, cos, canvas.width/2, canvas.height/2);
        ctx.fillStyle = 'black';
        for (let i = 0; i < 6; i += 1){
            ctx.fillRect(0, -10, 50, 20 - 3*i);
            ctx.transform(1, 0, 0, 1, 15, 1);
        }

        requestAnimationFrame(drawFrame);
    }
    requestAnimationFrame(drawFrame);
    canvas.style.transform = "rotate(270deg)";
    document.body.appendChild(canvas);
}