'use strict';

app.controller('MapController',
    function MapController( $scope, bomberMap) {
        $scope.bomberMap = bomberMap.getMap();
        //console.info($scope.bomberMap);

    });