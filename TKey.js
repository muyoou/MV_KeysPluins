/*:
 * @plugindesc 用按键发动技能
 * @author: Muyoo
 */

 (function(){
    var SceneManager_update=SceneManager.update
    var MapId=0

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args){
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        switch(command){
            case "setMap":
                MapId=args[0]
                break;
            default: break;
        }
    }

    SceneManager.update=function(){
        
        if(Input.isTriggered('pageup')){
            console.log(MapId)
            if(MapId!=0){
                //console.log(SceneManager._scene.children) 
                $gameSwitches.setValue(MapId,true)
            }
        }
        SceneManager_update.call(this)
    }
 })()