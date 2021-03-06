# U Mad Bro?

U Mad Bro is a smartwatch app designed for the Pebble watch. The app is intended to be an assistive technology to help people who might otherwise have a difficult time distinguishing different emotional sentiments in conversation, such as those with autism. The watch picks up on conversation and, using the IBM Watson [Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/), subtly shows a color corresponding to the dominant emotion in the speech.

This application was created in 24 hours during the [Hack CU](https://2017.hackcu.org/) hackathon in Boulder, Colorado. Our project won 3rd place.

## Demonstration
[![U Mad Bro Vimeo](https://i.vimeocdn.com/video/630850048_640.jpg)](https://vimeo.com/214394691)

Since our code is spread across Github and the CloudPebble IDE and had so many contributors, we created a video to demonstrate our final product. Click on the image above to view the video in Vimeo.

### Structure
The watch picks up on speech and converts it to text, before calling our API. The API we created processes the text and JSON returned from IBM watson, and returns a simple object containing the dominant emotion and corresponding color to the watch app. 

- The api was deployed seperately and can be seen [here](https://github.com/THEAverageSpeedBurrito/speech_to_color_api).
- The watch app itself is located in the CloudPebble IDE but the code can be seen [here](https://github.com/malilasage/u-mad-bro/blob/master/cloudpebble.js)
- Our HackCU submission is on [Devpost](https://devpost.com/software/u-mad-bro)

### Contributors
- [Alex Andrei](https://github.com/AlexAndrei98)
- [Evan Busse](https://github.com/theaveragespeedburrito)
- [Malila Clearwater](https://github.com/malilasage)
- [Nicholas Kee](https://github.com/nkkee)
- [Jordan Wick](https://github.com/Jomanw)

And a huge thank you to all the mentors at HackCU for their support!
