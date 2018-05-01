import { Common, Utils } from './ssl.common';

var application = require("application");
var context = application.android.context;
 
declare var net: any;

export class Ssl extends Common {

    constructor() {
        super();
        this.message = Utils.SUCCESS_MSG();
        this.showToast();
    }

    public showToast() {
            var toaster = new net.elmsclose.nativeandroid.Toaster();
            toaster.show(context);
    }
}
