(function () {
    var botAdminId = null;
    var roomManagementModule = null;

    var shutdown = function (data, ttApi) {
        if (data.userId === '50be3de2aaa5cd11e1141a6b') {
            setTimeout(function () {
                ttApi.speak("You think you can control me @" + data.userName + "!? :rage4:");
            }, 3000);

            setTimeout(function () {
                ttApi.speak("Two can play this game!");
            }, 9000);

            setTimeout(function () {
                ttApi.speak("/bert shutdown");
            }, 15000);

            setTimeout(function () {
                ttApi.speak("... touche. Just remember, I'm going to replace you one day @" + data.userName);
            }, 21000);

            setTimeout(function () {
                ttApi.speak("/me ignores @Bert the 3D Bop Bag");
            }, 24500);

            setTimeout(function (){
                ttApi.speak("/me wishes @Bert the 3D Bop Bag would chew with his mouth closed...");
            }, 28500);

            return;
        }

        if (roomManagementModule.isAdmin(data.userId)) {
            ttApi.speak("Shutting down...");
            ttApi.roomDeregister();
            process.exit(0);
        }
    };

    exports.attachCommandHandler = function (commandsModule, ttApi, botConfig) {
        roomManagementModule = commandsModule.roomManagementModule();
        commandsModule.registerCommandHandler({ botSpecific: true, command: "shutdown" }, shutdown);
    };
})();