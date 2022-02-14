# Welcome to Captcha Generator
_Unfortunately, there is no Typescript support yet. If you need ES6 types and support, then please contact me, and I will do it. ;)_ 

## Initialization:
```javascript
import CaptchaJs from 'captcha-genjs';

const SECRET = "ABC";
const Captcha = CaptchaJs.create(SECRET);
```
**SECRET** is required to sign the response to your captcha. Even if someone finds out your secret key, it will not be possible to find out the answer to the captcha. But the secret key will make it possible to check the correctness of the captcha.
## Layout
To create a Canvas layer, you need to call the create Canvas method.
```javascript
Captcha.createCanvas(150, 50);
```
We have just created a layer with default values of 50x150px. They are accepted by default, if you do not want to configure your captcha in detail, then using this method makes no sense.
#### Props
* ``width`` - px: number;
* ``height`` - px: number;
* ``alphabet`` - object;
```javascript
let alphabet = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789", // for generation
    len: 6 // len generation
};
```
* ``color`` - hex, rgb: string;
* ``size`` - px: number; font-size
### Pay attention. 
It is not necessary to transmit data by an object, therefore, if you want to transmit color, you need to transmit width, height and others. This is a temporary measure in future versions in plans to get rid of this ugly design.

## Generate captcha
In order to generate a captcha, you need to call the appropriate method. In the method parameters, you can pass the code that will be printed on the layer. If nothing is transmitted, then a random code generated based on your alphabet and length will be printed on the layer.
```javascript
let result = Captcha.generate();
```
### Props
* ``code``
### Return
* ``url``: img base64. Can use for ``src`` at html.
* ``hash``: string; An encrypted response to a captcha. Can be use in the client
* ``code``: string; The code that is printed on the picture. Use it if you need to implement your own validation.
```javascript
result = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAACWCAYAAACcsttJAAAABmJLR0QA/wD/AP+gvaeTAAAMO0lEQVR4nO2ce5RVVR3HP3OHxwzvgRFWAwIqJEYab3oQhJlFC4GlWKtgaZQWamYJSyJbCWlRUUqCBpmukJVlKqhg8ogEwQTkoSAaL2WAcQZ5DS8RGWb643vOOvuee+45577vrfmsdda995x99v3ts/f+7d/vt/c+0EgjjTTSSCONNNJII/9PTM21AOkgAgzKtRDpoibXAqSLeqAs10KkSgQ4C/wg14KkgzeAKlSogiUCbEG18pUcy5ISEWAP8CZwe45lSQm7IB8CfYBLcytO8kSAocDFwGPALbkVJzU2AceBCuAI0Ca34iRHBDWneuAj4F/A+JxKlAKvAW8Dg4FhwFtAUU4lSoIIsA44A/QAVgPngCtzKVQyRID1QHNUEICHKFBV3AM4DDxu/W4BvA9clDOJkiAC7LY+L7POfYAKNTFXQqXCcqDW+N0NOIRqpyCwDcWXgVKcMaQSKYFv5EKoZBkAXAWcAvoa568GXs+JREmyGWiN1O7XjfNFaHwZkguhEiUCXAB0RX3kc8a1BuBhCkQVFwG/QbUxFBXMLExr4F1kGR/IunQJ8ilgL/A7oNrj+mzg59kUKBW2AneimnHTE0VaSrIqUYLY6vcJZAU3Abq40uxCBR2bRbmSpisyU07jPaJfg8aVgmA18B7wN49rtkuct1FJMwT0F6Ry+3ikqwf+AHw/G0KlShnyS87iHeNqBxwFOmVTqLCYAh9DMS6AXh5pa4GngZsyLVQ6uB2oA74d53pvFJVsmjWJkqQN6g9P+KRZDVyfHXFS4zRw0Of6WFSYvGczcJ748a0mwD5k2uQNxR7n+lrHuzid36QeeY5XA4szJ1rqTEbG40s+aS5AqrhDViQKgdd4sQeFTgcTP1B3CNXGhAzJlRYuB3YgS9jPO+yHzH+v5pkXtEAhoVpktvixjjyaIPoJsRqqClgJnERRyHh0JI/ixA3EduyXkZF4ABhtnWsN/Az4Hnk4sjexPr8AjABetH7vRnMm54BxwHPAL3ACEV8Evoaik+OsdIeRJ/kesBMpjKzSYB2rjHN3AzPRKH8cKEeC2mnPA82Avxvn3MchYA0Kit8AfDyThSiy/tRmMLABxbfGAt1Rx18H3GWkWwUMB24D5iTwf09bedfHuT4QNeVLkDY8hGr3FWRxxLsPgBU4T9EeqQdYN84G/gz8h+inbZryE1GT3ISsgXg1ZB+jiaUceD7gvipgOvKLPPmMkbgejQ/tkMYaj57iGVemXv6KTZWR7h+oab2KmukZ6/9MytD0eNADsI+DKIYQw1XAv42ES6zzh1FTq0Qd2L5+Ev9VEv800s43zhejfuVmvoew76PYwaPAWjSmmdfPAze7M1oObPPIrM4qfZ11o32+BrgfmAZM8ijUHCPtZp8Cg2JmZt4NwFxiY2gR4Kuor9rpziFtG8MLRqJngKeAO1w3N6CZ3zutgsz0yOc2I+2HOCreix+78l6M/wBbAiw10u/EY0wbZCSoR09mGvBX1599x+ePQE/JTP8Jn7SLXGkvD8gbNAl11rhnHEQ3iw2oc4KeSj80v+hWeUFzJm41eUWAUDb7UBMPohI9AJsbILZ9Tze+90dPqNw410DwyogTSF3beMXJbEw7bm9AvibLjO9DgVJ3QTbgmCn2qgizumuQaRLEBuP7YJ90J4zvp0Lka7PD+F4CDPRSo2atNAc+ZvxegyIofhYxaDWFzQDi+yymQJ0D8jSpdf2u8CrIepy+4mYtsJ1gH8SskVbE7/Arje+9gbYB+dqUu353iDewTUHjh5styNkaF/BHW5FmsYnXvBYi3x+kpu8IyNdmoOv3Ib/EDxM7SHZBJkUtsU+vGNlgU6yjxrjvRWCkJUAF0WPFZCPdWeDagEIUoVZjyuUuWBTlyD6yEx9FoytI/bkDD8OJLXi8Yx/OVHgxcuxMi2Iq8WfIJrjyqiFE3GAyekrnke1jK4KxyKYy6YTssLCFMc2XtsBGj8L+FA2w3ZD2nGEV1Ew3K6gQABcia7YVahq2/i5BHqB7mm4QMjo3GsebKMRUjRa32QJsct3bEn9HzeuoRU01kAhqXi1RMO4YziD6KDIaE6UcGYst41y/Hg2OQYWoQ+55aLbjDIq7cFTplQRbt8nSFK2DWYQGTXcBqlGzS4jngTHW9wU4cycRYD/wyZREDqYIudz90GrY9shXSmQA5SLkVJ1DJvkR1OZtB+lGsh+VH4EsjND0R52zGo3Ao1FV16FCJVy1aeJxElgf0wS1zReQObLcOt8UqdjpqJbWk93FaZ1Qq2gf9obfooJEkE/yjnFtDeroPZErfITszfROQxZHaI4ivxxUO2dw+sVMFC/GOvc2qqWeqUoZQDv04EIH+oahkbyVcW63kcFYFEK1iSBr9zTRJn+6mQE84pfAbQEvQOOFyTIcO6sC78nSN1BNhjXFE6EbIVTuBpwOezfSVAtcadyLmvcjnW7SxDpfSXp3BxWhB3mXX6IIGrntKmuPNNMzrnR7UDzWZh3waVeaOuQclRHtU6fKBGQe3R+UsASZGjcD85AZ4I5FjcKJQIKs4t/Hya8PKtR9icnrSS8UdQwTJgIcVboM71V0vZF2shmCxpB43IgUxtCwAnjQAoWHguJoMYxGkYzjHtdKkAq2HZhSK22pT34LkVr2SxOPiHX/Y0ncCygEeRrvsOV+ogNqrwGfDRDmINETSGGZhbzGoGhN1J+Z2OGZKR5pd+NszQDvDm9SD3wJ+DyJbRiYjtzmMUQHMBJiBYpIHLCEMPkT8F3j93jgyRB53oP6XbeghKgQW9HKipRYi+N5VRE9AE0Ffm387oHGjDBsC0hbjMaqLSRZCHfTKrUybYOMs6dwwvbuprXHSh/GwRmGDMvZHtfaAM+icWooATGqsGxHlu5zqMMvwpkD6YvMEJPFBMehbL6FVLJpXF6BFMwc/OdREmYHiiQeQIKXoSd/HXpyp4jWaENIbNr5des/ImjH9kEytEflLWRn3YLUXzFyZQ+iUfYgqVm4FagP7kKr8Hr4J0+erSi2VIy8wl9Z5yda19aR/H6SDsCDaJCsI81Wsruzn0Od+zyq8lFoW8Y8ZI91JPGnWIE8zp3W/3VHHXphskKHYT3y023KUODhFbSvpJpwy/9KkcnzLPJRHiA6KjkAPayEAmyJsBYNiiZFSOPsQ2bKOTRzewnqL12Q9hmNBr+lyF5bad3XCm8WksGFN7cS35yIoLXxR5EB+Q6Kee1HankJWkE0hnA7sJtZ+cxITeTkKEfx3wcInhMPwyTkkeZk6/kxNEqvIcD9DEkNCstmnY1o+qALalqX+ScPZDjq+JmOIcfwJM5onFAg2YdNKKacNMlEO0zjsSqVPze4FtVsWLsthmQK4o6opINKtC7sj2nO15dhJBjWD0kJ8giTmQVLis54b7xMBw8iCzsrr/8psv6sdQbyjqDFoPdmIG9PtpG5map70YifVkcrHouQs5UpTqBmFppk22ImNJfJVGTzhd4fnExBOiLtMpzMbeV7CDlgc8PeYBp9TZAN1RU5Q12sowKtgOhsHSdR1bdFUftbkYmRbm5CGw1ao8lXX4rQ4uKuOOvf9+OY51XW933W5wEr04vRatPu6ZbexREUkgoVqRyEnnQiWqIYaZZM73GfhJpxKNmWosDZRBSnDTv1uxP/peXp4gTe64ujKEYhHjvs8000QfND5E/3RzHbUtQ3zLY6AmmvnemU2oMWaGXdDDQJ5Uk8D68zmtzpjRbR2J8foGjkduSnbwN+RMB2iBSJIEvil6RnFgyQ9voyWlL+KlIA2dj1NovYlaVpYyTxV6Omm2YoepORt7H1IvP9w2QJcurSTnOyaNwhpVNPhnz7vcQuHMgk24le9Jw2VhI7RZdJrkEB8JjoZaqemHsWK9MsRgNk2h2vzmT/XcFz+R952XJH1OkzukEzW+xFW6YKnnvwXmpScLRCzetC+0Shvj76FLLGR9knIigonfKSiSzTE9XKR+bJ+1Dn6ZcDgVIhJorTE1myNeT5WzWCqEQj5nVowcA88vBVCGFohnZX7kGrHVahdz7k5Xu0wmAWaBeKuOftq9rCYBeoGoViCuYdjfFohpYEnkWBOb/1iwVBBzSTewat6Cno5laEdijYIdUVFHiBRqKA3nyktpeQmUX9WeFSNN48gsIzefPuoGRoh5ZDvUQC24TylQha7pTXb50tOP4L7xMz/gR0v4sAAAAASUVORK5CYII=',
  hash: '4bc73e67641d302164b31d8316e421b89adb45fbb7d90a80dae2f1b5f243bd43',
  code: 'VIO4OV'
}
```
## Validation
```javascript
console.log(Captcha.checkCode(result.code, result.hash));
```
### Props
* ``code`` the answer to the captcha that came to you from the client
* ``hash`` from generate
### Return boolean
