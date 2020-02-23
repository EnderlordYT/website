var _app = function ()
{
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 1;
    this.musicFadeIn = 1000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "User Authorized...",
        "",
        "$$$~",
        "",
        "Social Media(s)",
        "Instagram : @enderlxrd",
        "YouTube : Enderlxrd",
        "Discord : einbaum#4408",
        "",
        "$$$~",
        "",
        "social engineer",
        "reverse engineer",
        "java script developer",
        "nigga",
        "",
        "$$$~",
        "",
        "coconut",
        "AK47 up in this bitch... ︻╦╤─",
        "Chat shit get swatted",
        "",
        "$$$~",
        "",
        "def onKeyboardEvent(event): if event.Ascii==5: _exit(1) if event.Ascii !=0 or 8: f = open('c:\output.txt', 'r+') buffer = f.read() f.close f = open('c:\output.txt' , 'w') keylogs = chr(event.Ascii) if event.Ascii == 13: keylogs = '/n' buffer += keylogs f.write(buffer) f.close",
        "fuck you :)",
    ];

    this.titleChanger = function (text, delay)
    {
        text = text ||
            ['einbaum#4408', 'Rzy', '=', 'enderlxrd.tk'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }

    // It's future, dear pasters.

    this.iconChanger = function (urls, delay)
    {
        if (!urls)
            return;

        delay = delay || 2000;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) 
            {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();