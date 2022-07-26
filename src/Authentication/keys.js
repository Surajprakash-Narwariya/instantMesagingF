import { Buffer } from 'buffer';

var cryptoBrowserify = require('crypto-browserify');

function encryptMessage(publicKey, message) {
    var currentPublicKey = localStorage.getItem('publicKey');
    var receiverPublicKey =
        publicKey.pk2 === currentPublicKey ? publicKey.pk1 : publicKey.pk2;

    console.log(currentPublicKey);
    console.log(receiverPublicKey);
    console.log('==============');
    console.log(publicKey);

    // const encryptedData = cryptoBrowserify.publicEncrypt(
    //     {
    //         key:
    //             '-----BEGIN PUBLIC KEY-----\n' +
    //             receiverPublicKey +
    //             '\n-----END PUBLIC KEY-----',
    //         // padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    //         oaepHash: 'sha256',
    //     },
    //     // We convert the data string to a buffer using `Buffer.from`
    //     Buffer.from(message)
    // );

    const enc = cryptoBrowserify.publicEncrypt(
        {
            key:
                '-----BEGIN PUBLIC KEY-----\n' +
                currentPublicKey +
                '\n-----END PUBLIC KEY-----',
            // padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256',
        },
        // We convert the data string to a buffer using `Buffer.from`
        Buffer.from(message)
    );

    // return enc.toString('base64') + ' ' + encryptedData.toString('base64');
    // return enc + ' ' + encryptedData;
    return enc.toString('base64');
}

function decryptMessage(privatekey, passphrase, cipherCode) {
    const decryptData = cryptoBrowserify.privateDecrypt(
        {
            key:
                '-----BEGIN ENCRYPTED PRIVATE KEY-----\n' +
                privatekey +
                '\n-----END ENCRYPTED PRIVATE KEY-----',
            oaepHash: 'sha256',
            passphrase: passphrase,
        },
        Buffer.from(cipherCode, 'base64')
    );
    return decryptData.toString('utf-8');
}

function decryptChat(chats, currentUserId) {
    var decryptedChat = [];
    var currentPublicKey = localStorage.getItem('publicKey');
    var currentPrivateKey = localStorage.getItem('privateKey');
    // var receiverPublicKey = k2.pk2 === currentPublicKey ? k2.pk1 : k2.pk2;

    for (var i = 0; i < chats.length; i++) {
        if (chats[i].fromUserId === currentUserId) {
            var toDecrypt = chats[i].message.split(' ');
            console.log(toDecrypt);
            var msg = decryptMessage(
                currentPrivateKey,
                currentUserId,
                toDecrypt[0]
            );
            decryptedChat.push({ message: msg });
        } else {
            var toDecrypt = chats[i].message.split(' ');
            console.log(toDecrypt);
            var msg = decryptMessage(
                currentPrivateKey,
                currentUserId,
                toDecrypt[1]
            );
            console.log(msg);
            decryptedChat.push({ message: msg });
        }
    }
    console.log('decryped cah:     ' + decryptChat);

    return chats;
}

const data = 'Surajprakash';

const en = encryptMessage(localStorage.getItem('publicKey'), data);
console.log(en);

const e =
    'MQHCtvBmkYWoslOLySeCDaiR/gnt8v/hA49EKzITcRujRCb05aTFn/88i5Goh1BUnywKB4gTRKv+04DxRySLlAZfDvHLHAVsZbJYKDwKq0n29J8g0M917p5FS5Zn5Fa0MfZCYE+rKXhhj3G/M/cor5fcW5FIyTTVVa8wUucKhKE=';

const pk =
    'MIIC3TBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQIsZ0BAoNRsXwCAggAMAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBCSncYHFbuZpuad6JG0X/ABBIICgDYPWcqcv6xbkqISHmJ5kdV6VVYiUUBVUEMLh2zfe6rSxKUjyLvd11ApoBA6mzwiqLctC8+W/EvADWh6KoNDRldTIKwWOxd66bLQ/lkHfJOMxpkdEXx2ig6EH9yyTicpe+7HQ441D1G2tb+kIkqrghauoM0MCHl/sW2afYzmxZYHP7YoCIC3WqkTRrH4cqjshwcT2vawX6Uhbg9OgSx14hmg+FW8nGOiuFfG5D8J9K/fWkHS7FsiI50gWh5/bAjd2L1b8M9jTdln+0WdKv6hMY5dWdCbqtKyjDi8MNVf+ch0LR2Dn26mrnnpVsPlpwFijTCd/JMZfkujpIztzzf6/MRWM73ivKIC7ZU1UELPOell0ID0RID/WlO6PPjDEplOaU0UEgbkD4+Xqhcb0uM5gyxdlDnNCmGSolBLTO7oMA0rme7+rnlv7hM4VjJvKJANzPr9cuMRO0gQXUCDuY54ALDvajVVO0MjlmkNtar5XZwwNRn90H1ROxiC5i+VjedrNfgKkWcHFmESfeliIo2Eilh/8m3rlrLWFC/0LCfCUfaow5SSZ8B4YlHole6sU5mPfVKX/3odblsDc9swUkDT4vLgRKi8PIbyWeZg5rtgRGVFMznN+5uorsKIwWJXvZwlxWphq400OH4Cjpk2npn205zcyiQbvLLeseKc8+8fpIyD4D74kDHqLx5Q/KfD0zYHslQ/63B5LK4HgIZC8jMhPWod9zjQbQAFesQfEUHbxXAT5D4Dfm1T8SsvGa8HEcMxilUOIYZp5Ghd0H5puq0g8viXSa0N6ZL4rb8E4fdG9BbR8r6jHwTKKdM8PyfG3K41eBy53/dLZGAiCzRROH7wiqw=';

const d = decryptMessage(pk, 'Suraj99', e);

console.log(d);
console.log('dec');

export { encryptMessage, decryptMessage, decryptChat };
