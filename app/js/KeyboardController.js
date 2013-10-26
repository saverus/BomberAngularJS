
    app.controller('KeyboardCtrl', function($scope) {
        var lock = 0, keys = 0;
        var locks = {}
        $scope.rootScope.keyLock = function(name) {
            if (!name) name = "default"
            if (!locks[name])
                lock++;
            locks[name] = 1;
            keys = 0;
        }
        $scope.rootScope.keyUnlock = function(name) {
            if (!name) name = "default"
            if (locks[name])
                lock--;
            locks[name] = 0;
        }
        $scope.rootScope.keyUp = function(key) {
            var keys2 = (keys & ~key);
            if (keys2 != keys) {
                keys = keys2;
                gameInner.appInputKeys(keys);
            }
        }
        $scope.rootScope.keyDown = function(key) {
            var keys2 = (keys | key);
            if (keys2 != keys) {
                keys = keys2;
                gameInner.appInputKeys(keys);
            }
        }
        var docOnKeyDown = function(e) {
            if (lock != 0)
                return;
            var __keys = [39, 68, 38, 87, 37, 65, 40, 83, 32, 75, 17, 76, 13, 9, 80, 81, 73, 8 /* backspace */],
                code = e.keyCode ? e.keyCode : e.which;
            switch (code) {
                case 39:
                case 68:
                    $scope.rootScope.keyDown(1);
                    break;
                case 38:
                case 87:
                    $scope.rootScope.keyDown(2);
                    break;
                case 37:
                case 65:
                    $scope.rootScope.keyDown(4);
                    break;
                case 40:
                case 83:
                    $scope.rootScope.keyDown(8);
                    break;
                case 32:
                case 75:
                    if (config.version=="0.1")
                        gameInner.appInputBomb();
                    else {
                        gameInner.appInputBomb();
                        $scope.rootScope.keyDown(32);
                    }
                    break;
                case 16:
                case 76:
                    gameInner.appInputDetonation();
                    break;
                case 13:
                    gameInner.appInputChat();
                    break;
                case 9:
                    gameInner.appInputTab();
                    break;
                case 80:
                    $scope.toggleFullScreen();
                    break;
                case 81:
                    $scope.rootScope.keyDown(16);
                    break;
                case 17:
                    if (config.version=="0.1")
                        gameInner.appInputDetonation();
// else
// $scope.rootScope.keyDown(32);
                    break;
                case 70:
                    if (gameInner.appInputJump)
                        gameInner.appInputJump();
                    break;
                case 73:
                    gameInner.appInputPause();
                    break;
            }
            if (~__keys.indexOf(code)) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
        var docOnKeyUp = function(e) {
            if (lock != 0)
                return;
            var __keys = [39, 68, 38, 87, 37, 65, 40, 83, 81, 8 /* backspace */],
                code = e.keyCode ? e.keyCode : e.which;
            switch (code) {
                case 39:
                case 68:
                    $scope.rootScope.keyUp(1);
                    break;
                case 38:
                case 87:
                    $scope.rootScope.keyUp(2);
                    break;
                case 37:
                case 65:
                    $scope.rootScope.keyUp(4);
                    break;
                case 40:
                case 83:
                    $scope.rootScope.keyUp(8);
                    break;
                case 81:
                    $scope.rootScope.keyUp(16);
                    break;
                case 32:
                case 75:
                    if (config.version!="0.1")
                        $scope.rootScope.keyUp(32);
                    break;
            }
            if(~__keys.indexOf(code)){
                e.stopPropagation();
                e.preventDefault();
            }
        }
        $(document).on('keydown', docOnKeyDown);
        $(document).on('keyup', docOnKeyUp);
        $scope.$on('$destroy', function() {
            $(document).unbind('keydown', docOnKeyDown);
            $(document).unbind('keyup', docOnKeyUp);
        });
    })