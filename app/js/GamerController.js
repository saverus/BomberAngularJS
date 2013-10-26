'use strict';

app.controller('GameController',
    function GameController( $scope, bomberMap) {
        if (!$scope.playerCount) {
            $scope.playerCount = 0;
        }

        var playerID = $scope.playerCount++;

        function spawnPlayer() {
            var location  = bomberMap.getValidSpawnLocation();
            this.endpoint.emit('player-spawned', {
                id: this.id,
                x: loc.x,
                y: loc.y
            });
        };

        return

        $scope.player = bomberMap.getMap();

        //console.info($scope.bomberMap);

    });