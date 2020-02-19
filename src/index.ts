import * as Matter from 'matter-js';

/**
 *   Demonstrates the usage of the MatterJS engine.
 */
class MatterJsDemo
{
    /**
     *   Represents the entry point to our MatterJs demo.
     *   This method creates a new MatterJs engine, adds two boxes along
     *   with a static ground and starts the MatterJs physics simulation.
     */
    public static main()
    {
        let body :HTMLBodyElement = document.querySelector("body");
        let engine :Matter.Engine = Matter.Engine.create( body );

        let boxA :Matter.Body   = Matter.Bodies.rectangle( 400, 200, 80,  80 );
        let boxB :Matter.Body   = Matter.Bodies.rectangle( 450, 50,  80,  80 );
        let boxC :Matter.Body   = Matter.Bodies.rectangle( 350, 100, 100, 80  )
        let circleA :Matter.Body   = Matter.Bodies.circle( 300, 100,  70,  { mass: 5 } );
        let ground :Matter.Body = Matter.Bodies.rectangle( 400, 610, 810, 60, { isStatic: true } );

        // add all bodies to the engine's world
        Matter.World.add
        (
            engine.world,
            [
                boxA,
                boxB,
                boxC,
                circleA,
                ground,
            ]
        );

        // start the MatterJS simulation
        Matter.Engine.run( engine );
    }
}

/**
 *   Being invoked when all components of the website are loaded.
 */
window.onload = function()
{
    MatterJsDemo.main();
};
