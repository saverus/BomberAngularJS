'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');


angular.factory('BomberMap', function() {
    var TILE_EMPTY = 0,
        TILE_SOLID = 1,
        TILE_BRICK = 2;

    var mapHeight = 40,
        mapWidth = 30,
        map = null,



    function initializeMap( opt ) {
        var m =  mapHeight * mapWidth;
        map = new Array(m);

        for ( var i=0; i < m; i++ ) {
            map[i] = TILE_EMPTY;
        }

        classicMapGenerator();
    }

    function classicMapGenerator() {
        borderedMapGenerator();

        for ( var i=0; i<mapWidth; i++ ) {
            for ( var j=0; j<mapHeight; j++ ) {
                if ( i%2 == 0 && j%2 == 0 ) {
                    setMapTile( i, j, TILE_SOLID );

                } else if ( Math.floor( Math.random()*9 ) == 0 ) {
                    setMapTile( i, j, TILE_BRICK );
                }
            }
        }
    }

    function borderedMapGenerator() {
        for(var i=0; i<mapWidth; i++) {
            for(var j=0; j<mapHeight; j++) {
                if (i==0 || i==mapWidth-1 || j==0 || j==mapHeight-1)
                    this.setMap(i,j, TILE_SOLID);
            }
        }
    }

    function setMapTile( x, y, tileType ) {
        map[ y * mapHeight + x ] = tileType;
    }

    // -1 - wall
    // 0 - empty
    // 1 - brick
    // 2 - start position of bot

    var bomberMap1 = [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    bomberMaps.push(bomberMap1);

    return {
        setCurrentBomberMap : function( mapIndex ) {
            var result = false;
            if ( bomberMaps[mapIndex] ) {
                currentMap = bomberMaps[mapIndex];
                result = true;
            }
            return result;
        },
        generateSpecialBonusesForBricks() {

        }
        isWall : function( x, y ) {
            var result = false;

            if ( currentMap ) {

            }

            return result;
        },

    }

    };
});