var StartLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;
        var helloLabel = new cc.LabelTTF( "Hello Word" ,"",38);
        helloLabel.x=size.width;
        helloLabel.y=size.height;
        this.addChild(helloLabel);

        return true;
    }
});
var StartScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
})