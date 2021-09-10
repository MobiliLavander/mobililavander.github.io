class Utils {

    static randomColorRGB() {

        colorMode(RGB);

        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = 255;

        return color(red, green, blue, alpha);
    }

    static randomColorHSL() {

        colorMode(HSL, 360, 100, 100);  // spazio colore definito su 360 gradi

        let hue = random(360);              // tonalità o tinta
        let saturation = 100;    // saturazione
        let luminance = 50;     // luminanza

        return color(hue, saturation, luminance);

    }

}