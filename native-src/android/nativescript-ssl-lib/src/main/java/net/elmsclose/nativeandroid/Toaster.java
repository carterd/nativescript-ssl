package net.elmsclose.nativeandroid;

/**
 * Created by derek on 20/03/2018.
 */

import android.content.Context;
import android.widget.Toast;

public class Toaster {
    public void show(Context context) {
        CharSequence text = "Hello NativeScript!";
        int duration = Toast.LENGTH_SHORT;

        Toast toast = Toast.makeText(context, text, duration);
        toast.show();
    }
}
