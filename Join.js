var J = J || {};

// Join webgl top with low seadragon
J.Join = function(low,top,go,offscreen) {

    var self = this;
    this.ready = function(shaders) {

        // Use WebGL
        if (!top.canvas) {

            // Link the shaders
            var link = go(shaders);
            var moveloop = function(){

                // Speedy rendering call forever
                window.requestAnimationFrame(moveloop);
                link();
            };
            moveloop();

            // If debug webGL
            if (top.debug) {
                var id = 'seer_' + 'test';
                var idiv = document.createElement('div');
                Object.assign(idiv,{className:'seer', id: id});
                document.body.appendChild(idiv);
                idiv.appendChild(offscreen);
                return 1;
            }
        }
        else {
           //  canvas fallback
           offscreen = top.image;
        }

        // Actually join source to canvas
        self.toCanvas(low,top,offscreen);
    }

};

// Join a source by canvas overlay to a seadragon
J.Join.prototype.toCanvas = function(low,top,source) {

    var Go = function() {
        var ctx = this.context2d();
        ctx.globalAlpha = top.alpha;
        ctx.drawImage(source || top.image, ...top.shape);
    }

    low.canvasOverlay({onRedraw: Go});
};