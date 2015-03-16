/**
 * Created by Administrator on 2015/3/16.
 */
var UiScnen = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var touchLayer = new TouchLayer();
        this.addChild(touchLayer);
    }
});


var TouchLayer = cc.LayerGradient.extend({
        menu: null,
        ctor: function () {
            this._super(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
            this.uiMenu = new cc.Menu();
            for (var i = 0; i < item.length; i++) {
                var label = new cc.LabelTTF(item[i].text, "Arial", 16);
                var menuItem = new cc.MenuItemLabel(label, this.callBack, this);
                menuItem.x = (cc.winSize.width / 2);
                menuItem.y = (cc.winSize.height - 40 * (i + 1));
                this.uiMenu.addChild(menuItem, i + 1000);
            }
            this.uiMenu.x = 0;
            this.uiMenu.y = 0;
            this.uiMenu.height = (40 * (item.length + 1));
            this.addChild(this.uiMenu);
            if ('touches' in cc.sys.capabilities)
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                    onTouchesMoved: function (touches, event) {
                        var target = event.getCurrentTarget();
                        var delta = touches[0].getDelta();
                        target.moveMenu(delta);
                        return true;
                    }
                }, this);
            else if ('mouse' in cc.sys.capabilities) {
                cc.eventManager.addListener({
                    event: cc.EventListener.MOUSE,
                    onMouseMove: function (event) {
                        if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
                            event.getCurrentTarget().moveMenu(event.getDelta());
                    },
                    onMouseScroll: function (event) {
                        var delta = cc.sys.isNative ? event.getScrollY() * 6 : -event.getScrollY();
                        event.getCurrentTarget().moveMenu({y: delta});
                        return true;
                    }
                }, this);
            }
        },
        callBack: function (sender) {
            var tag = sender.getLocalZOrder() - 1000;
            var callBackFunction = item[tag].callBack;
            callBackFunction();


        },
        moveMenu: function (delta) {
            var newY = this.uiMenu.y + delta.y;
            if (newY < 0)
                newY = 0;

            if (newY > ((item.length + 1) * 40 - cc.winSize.height))
                newY = ((item.length + 1) * 40 - cc.winSize.height);

            this.uiMenu.y = newY;
        }
    })
    ;


var item = [
    {
        text: "button",
        callBack: function () {
            cc.log("执行了这个方法")
            //cc.director.runScene(new ButtonScene());
        }
    }
    ,
    {
        text: "button",
        callBack: function () {

        }
    }
    ,
    {
        text: "button",
        callBack: function () {

        }
    }
    ,
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    },
    {
        text: "button",
        callBack: function () {

        }
    }
]