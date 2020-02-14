const express = require('express');
const app = express();

// From A Connecticut Yankee in King Arthur's Court
// https://www.gutenberg.org/files/86/86-0.txt
let yankee = [
    'It was in Warwick Castle that I came across the curious stranger whom I am going to talk about.',
    'He attracted me by three things: his candid simplicity, his marvelous familiarity with ancient armor, and the restfulness of his company--for he did all the talking.',
    'We fell together, as modest people will, in the tail of the herd that was being shown through, and he at once began to say things which interested me.',
    'As he talked along, softly, pleasantly, flowingly, he seemed to drift away imperceptibly out of this world and time, and into some remote era and old forgotten country; and so he gradually wove such a spell about me that I seemed to move among the specters and shadows and dust and mold of a gray antiquity, holding speech with a relic of it!',
    'Exactly as I would speak of my nearest personal friends or enemies, or my most familiar neighbors, he spoke of Sir Bedivere, Sir Bors de Ganis, Sir Launcelot of the Lake, Sir Galahad, and all the other great names of the Table Round--and how old, old, unspeakably old and faded and dry     and musty and ancient he came to look as he went on!',
    'Presently he turned to me and said, just as one might speak of the weather, or any other common matter-- "You know about transmigration of souls; do you know about transposition of epochs--and bodies?"',
    'I said I had not heard of it.',
    'He was so little interested--just as when people speak of the weather--that he did not notice whether I made him any answer or not.',
    'There was half a moment of silence, immediately interrupted by the droning voice of the salaried cicerone:',
    '"Ancient hauberk, date of the sixth century, time of King Arthur and the Round Table; said to have belonged to the knight Sir Sagramor le Desirous; observe the round hole through the chain-mail in the left breast; can\'t be accounted for; supposed to have been done with a bullet since invention of firearms--perhaps maliciously by Cromwell\'s soldiers."',
    'My acquaintance smiled--not a modern smile, but one that must have gone out of general use many, many centuries ago--and muttered apparently to himself:',
    '"Wit ye well, _I saw it done_."  Then, after a pause, added: "I did it myself."',
    'By the time I had recovered from the electric surprise of this remark, he was gone.',
    'All that evening I sat by my fire at the Warwick Arms, steeped in a dream of the olden time, while the rain beat upon the windows, and the wind roared about the eaves and corners.',
    'From time to time I dipped into old Sir Thomas Malory\'s enchanting book, and fed at its rich feast of prodigies and adventures, breathed in the fragrance of its obsolete names, and dreamed again.',
    'Midnight being come at length, I read another tale, for a nightcap--this which here follows, to wit:'
];

app.get('/', function (req, res) {
    res.send(`<p>Send various data types as JSON.</p>
    <ul>
        <li><a href="/scalar/int/">Random int</a></li>
        <li><a href="/scalar/string/">Random string</a></li>
        <li><a href="/scalar/time/">Current Time</a></li>
        <li><a href="/array/">array</a></li>
        <li><a href="/object/">object</a></li>
    </ul>
    `);
});

// Return a random integer in the range 0 >= n > 10000
app.get('/scalar/int', (req, res) => {
    let val = Math.floor(Math.random() * Math.floor(10000))
    res.json(val);
});

// Return a string
app.get('/scalar/string', (req,res) => {
    let line = Math.floor(Math.random() * Math.floor(yankee.length));
    res.json(yankee[line]);
})

// Return a string
app.get('/scalar/time', (req,res) => {
    let time = new Date().toUTCString();
    res.json(time);
})

// Return the entire 'yankee' array.
app.get('/array', (req, res) => {
    res.json(yankee);
});

// Return a complex object.
app.get('/object', (req, res) => {

    let list = [];
    yankee.forEach((value, index) => {
        list.push( {
            offset: index,
            line: value
        });
    });

    let obj = {
        array: list,
        size: list.length
    };

    res.json(obj);
});

app.listen(3000);
console.log('http://localhost:3000');
