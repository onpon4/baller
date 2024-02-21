gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDGoalButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDGoalButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDCornerLargeObjects1= [];
gdjs.Untitled_32sceneCode.GDCornerLargeObjects2= [];
gdjs.Untitled_32sceneCode.GDCornerSmallObjects1= [];
gdjs.Untitled_32sceneCode.GDCornerSmallObjects2= [];
gdjs.Untitled_32sceneCode.GDBlockSingleObjects1= [];
gdjs.Untitled_32sceneCode.GDBlockSingleObjects2= [];
gdjs.Untitled_32sceneCode.GDBlockLongObjects1= [];
gdjs.Untitled_32sceneCode.GDBlockLongObjects2= [];
gdjs.Untitled_32sceneCode.GDBlockWideObjects1= [];
gdjs.Untitled_32sceneCode.GDBlockWideObjects2= [];
gdjs.Untitled_32sceneCode.GDBlockSquareObjects1= [];
gdjs.Untitled_32sceneCode.GDBlockSquareObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getLinearVelocityX() > runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityX(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getLinearVelocityX() < -(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityX(-(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getLinearVelocityX() < runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").applyForce(2, 0, (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getMassCenterY()) - 32);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getLinearVelocityX() > -(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").applyForce(-(2), 0, (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Physics2").getMassCenterY()) - 32);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDGoalButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoalButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCornerLargeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCornerLargeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCornerSmallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCornerSmallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlockSingleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlockSingleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlockLongObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlockLongObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlockWideObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlockWideObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlockSquareObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlockSquareObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
