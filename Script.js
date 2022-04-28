window.onload = function()
{
    // cria o app
    var app = new b5.App(document.getElementById('gamecanvas'), true);
    app.debug = false;
    app.clear_canvas = true; 
    //aqui nos redimensionamos a tela 
    app.setCanvasScalingMethod(b5.App.FitBest);
    
    // Aqui criamos uma cena
    var scene = new b5.Scene();
    var vec = Box2D.Common.Math.b2Vec2;
    // Aqui Adicionamos a cena no game
    app.addScene(scene);
    //aqui implantamos a fisica no game, colocando velocidade no eixo x e y, para verdadeiro
    scene.initWorld( 0, 0, false);
    b5.app.focus_scene = scene;
    app.touch_focus = scene;
//aqui criamos os atores(objetos) 
    
    
/*
*/
scene.extents=[-1000,-1000,2000,2000];
app.start();

};