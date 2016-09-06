
# [ViaWebGL + seadragonGL][1]

## [OpenSeadragon][7] shaders by [viaWebGL][5] + [seadragonGL][6]

* [Sobel filter on tiled image][4]

[![Sobel filter on tiled image][9]][4]

```
openSD = OpenSeadragon({
        tileSources: '../tiles.dzi',
        prefixUrl: '../your/icons/',
        id: 'viaWebGL'
});
seaGL = new SeadragonGL(openSD);
seaGL.addHandler('tile-drawing');
seaGL.vShader = '../fileV.glsl';
seaGL.fShader = '../fileF.glsl';
seaGL.init();

```

## Image shaders by pure [viaWebGL][5]

* [Sobel filter on vector image][8]

[![Sobel filter on vector image][10]][8]

```
image = new Image();
viaGL = new ViaWebGL();

image.onload = function() {
    viaGL.vShader = '../fileV.glsl';
    viaGL.fShader = '../fileF.glsl';
    viaGL.init(image);
}
image.src = '../file.type';
```


[1]: https://github.com/thejohnhoffer/viaWebGL
[4]: https://thejohnhoffer.github.io/viaWebGL/sobel/dzi/
[8]: https://thejohnhoffer.github.io/viaWebGL/sobel/svg/
[5]: tools/viaWebGL.js
[6]: tools/seadragonGL.js
[7]: https://openseadragon.github.io
[9]: ../master/images/toggle.png?raw=true
[10]: ../master/images/click.png?raw=true