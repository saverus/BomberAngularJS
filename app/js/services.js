'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');


app.factory('bomberMap', function() {
    var TILE_EMPTY = 0,
        TILE_SOLID = 1,
        TILE_BRICK = 2,
        TILE_SOLID_CLASS = "solid",
        TILE_BRICK_CLASS = "brick";

    var mapHeight = 40,
        mapWidth = 30,
        map = null;

    function initializeMap() {
        var m =  mapHeight * mapWidth;
        map = new Array(m);

        for ( var i=0; i < m; i++ ) {
            map[i] = { value : TILE_EMPTY, htmlClass : "" };
        }

        classicMapGenerator();
    }

    function classicMapGenerator() {
        borderedMapGenerator();

        for ( var i=0; i<mapWidth; i++ ) {
            for ( var j=0; j<mapHeight; j++ ) {
                if ( i%2 == 0 && j%2 == 0 ) {
                    setMapTile( i, j, { value : TILE_SOLID, htmlClass : TILE_SOLID_CLASS } );

                } else if ( Math.floor( Math.random()*9 ) == 0 ) {
                    setMapTile( i, j, { value : TILE_BRICK, htmlClass : TILE_BRICK_CLASS } );
                }
            }
        }
    }

    function borderedMapGenerator() {
        for(var i=0; i<mapWidth; i++) {
            for( var j=0; j<mapHeight; j++ ) {
                if ( i == 0 || i == mapWidth-1 || j==0 || j == mapHeight-1 ) {
                    setMapTile( i, j, { value : TILE_SOLID, htmlClass : TILE_SOLID_CLASS });
                }
            }
        }
    }

    function setMapTile( x, y, tileType ) {
        map[ y * mapHeight + x ] = tileType;
    }

    function getMap() {
        initializeMap();
        return map;
    }

    return {
        getMap : getMap
    };
});