const helpers = {
    helper1: function(){

    },
    getImageIconPath: function(name){
        var setIcons = [
            {"name":"store", "path":require('../assets/UImages/IconBtn_0000_Store-btn.png')},
            {"name":"gamepad", "path":require('../assets/UImages/IconBtn_0001_More-games-btn.png')},
            {"name":"plus", "path":require('../assets/UImages/IconBtn_0002_Plus-btn.png')},
            {"name":"settings", "path":require('../assets/UImages/IconBtn_0003_Settings.png')},
            {"name":"g+", "path":require('../assets/UImages/IconBtn_0004_G+.png')},
            {"name":"tw", "path":require('../assets/UImages/IconBtn_0005_Twitter.png')},
            {"name":"fb", "path":require('../assets/UImages/IconBtn_0006_Fb.png')},
            {"name":"ranking", "path":require('../assets/UImages/IconBtn_0007_Leaderboard-btn.png')},
            {"name":"cup", "path":require('../assets/UImages/IconBtn_0008_Achievements-btn.png')},
            {"name":"prev", "path":require('../assets/UImages/IconBtn_0010_Prev-btn.png')},
            {"name":"forward", "path":require('../assets/UImages/IconBtn_0011_Forward-btn.png')},
            {"name":"help", "path":require('../assets/UImages/IconBtn_0012_Help-btn.png')},
            {"name":"info", "path":require('../assets/UImages/IconBtn_0013_Info-btn.png')},
            {"name":"music", "path":require('../assets/UImages/IconBtn_0014_Music-btn.png')},
            {"name":"sound", "path":require('../assets/UImages/IconBtn_0015_Sound-btn.png')},
            {"name":"back-arrow", "path":require('../assets/UImages/IconBtn_0016_Back-btn.png')},
            {"name":"forward-arrow", "path":require('../assets/UImages/IconBtn_0017_Forward-btn.png')},
            {"name":"menu", "path":require('../assets/UImages/IconBtn_0018_Menu-btn.png')},
            {"name":"pause", "path":require('../assets/UImages/IconBtn_0019_Pause-btn.png')},
            {"name":"play", "path":require('../assets/UImages/IconBtn_0020_Play-btn.png')},
            {"name":"close", "path":require('../assets/UImages/item_0010_X-btn.png')},
            {"name":"tick", "path":require('../assets/UImages/item_0011_Accept-btn.png')},
        ]
        var path = setIcons.filter(function (val) {
            return val.name === name;
        });
        if (path.length === 0) {
            path = require('../assets/UImages/IconBtn_0020_Play-btn.png');
            return path;
        }else{
            return path[0].path
        }
    },

    getIconPath: function(name){
        var setIcons = [
            {"name":"coin-a", "path":require('../assets/UIcons/item_0000_Coins.png')},
            {"name":"cash", "path":require('../assets/UIcons/item_0001_Cash.png')},
            {"name":"gem", "path":require('../assets/UIcons/item_0002_Gems.png')},
            {"name":"star-a", "path":require('../assets/UIcons/item_0003_Points.png')},
            {"name":"thunder", "path":require('../assets/UIcons/item_0004_Energy.png')},
            {"name":"heart-a", "path":require('../assets/UIcons/item_0005_Life.png')},
            {"name":"shield", "path":require('../assets/UIcons/item_0006_Shield.png')},
            {"name":"magnet", "path":require('../assets/UIcons/item_0012_Coin-magnet.png')}
        ]
        var path = setIcons.filter(function (val) {
            return val.name === name;
        });
        if (path.length === 0) {
            path = require('../assets/UImages/IconBtn_0020_Play-btn.png');
            return path;
        }else{
            return path[0].path
        }
    }
}

export default helpers;