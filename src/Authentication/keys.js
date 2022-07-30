import { Buffer } from 'buffer';
var cryptoBrowserify = require('crypto-browserify');

/*
    Encrypt --
      (i) Encrypt message with |currentUser Public key| and then with |receiver public key|
      (ii) add them with a " " between them

    Decrypt --
      (i) if(sender is currentUser) decrypt the first part of msg else
          decrypt the second part of message


*/

// Function to Decrypt Chat
function decryptChat(currentUser, chats) {
    // const currentPublicKey = localStorage.getItem('publicKey');
    const currentPrivateKey = localStorage.getItem('privateKey');
    // const receiverPublicKey = currentPublicKey === pk.pk1 ? pk.pk2 : pk.pk1;

    var decryptedChat = [];
    for (var i = 0; i < chats.length; i++) {
        const msg = chats[i].message.split(' ');

        if (chats[i].fromUserId === currentUser) {
            const val = decryptMessage(currentPrivateKey, msg[0]);
            decryptedChat.push({ ...chats[i], message: val });
        } else {
            const val = decryptMessage(currentPrivateKey, msg[1]);
            decryptedChat.push({ ...chats[i], message: val });
        }
    }
    return decryptedChat;
}

// Function to decrypt Single Message
function decryptMessage(privatekey, cipherCode) {
    try {
        const decryptData = cryptoBrowserify.privateDecrypt(
            {
                key:
                    '-----BEGIN PRIVATE KEY-----\n' +
                    privatekey +
                    '\n-----END PRIVATE KEY-----',
                oaepHash: 'sha256',
                padding: cryptoBrowserify.constants.RSA_PKCS1_OAEP_PADDING,
            },
            Buffer.from(cipherCode, 'base64')
        );
        return decryptData.toString('utf-8');
    } catch (err) {
        console.log('There is an Error Decrypting the message', err);
    }
}

// Function to Encrypt Single Message
function encryptMessage(pk, message) {
    const currentPublicKey = localStorage.getItem('publicKey');
    const receiverPublicKey = currentPublicKey === pk.pk1 ? pk.pk2 : pk.pk1;

    const encryptByCurrentPublicKey = cryptoBrowserify.publicEncrypt(
        {
            key:
                '-----BEGIN PUBLIC KEY-----\n' +
                currentPublicKey +
                '\n-----END PUBLIC KEY-----',
            oaepHash: 'sha256',
            padding: cryptoBrowserify.constants.RSA_PKCS1_OAEP_PADDING,
        },
        Buffer.from(message)
    );

    const encryptByReceiverPublicKey = cryptoBrowserify.publicEncrypt(
        {
            key:
                '-----BEGIN PUBLIC KEY-----\n' +
                receiverPublicKey +
                '\n-----END PUBLIC KEY-----',
            oaepHash: 'sha256',
            padding: cryptoBrowserify.constants.RSA_PKCS1_OAEP_PADDING,
        },
        Buffer.from(message)
    );

    return (
        encryptByCurrentPublicKey.toString('base64') +
        ' ' +
        encryptByReceiverPublicKey.toString('base64')
    );
}

//============================================

// const pk =
//     'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAOlX2FhcbfL1WWh6Qf8/3dZ3u2dbo9IDyvA0Ea6KRjW6vFeYD+H8z6QyGueLqIxx/uvWcKu9xgbWP/0tPCkqU7rnjdswxaW2Tgx86vEUn1FJJNwlWYTLDe+rrF8JlZYs9k87ahMDYBVQXjfxNYKEZzNy/rRcZrs8LAUKOiH8pqlzAgMBAAECgYAZ3ewUt4JUuZAEvfDM++Z6nOFAbu81G8iGYi9Hmvp3gFDaoPe5xI28FPXYjynLD+QDfs0UrL/kCCIlzbrqkU+gpUmynY0EcOVmKrWGjyFgUWDmUt7D7k4JvqzuQL304qHZATJiJ3ZITQDrXo8Ugt25EQMAPKv0CMgtjlpj7NuRiQJBAP48bpkN+jYHWgZb4EGdJCFm949A8p2LCL6jSctAjCsnQQHmyi1Nip4GPp/0GDPL/CpKnZ70emj7PkKIMC1uiB0CQQDq9k23RJWxMP0XmtNY17MQ73uEMTWANvav6PLvCmJTmrSdQZ/y2JWlOkFufJyZwEC8quISU5tk/t5Mye50AeLPAkBEggxbegS+omSD6iYYCDxAM/rpw1qdUWXd2Sp9drtOtZky5fn9EzQTOSOO/ru22XTuAIVQ3BhQScORMhmpZGuRAkBxJ9Fhs4wL27Xnyk6CeM7qFwt7LF/Bsba4HQ3yBSQ5c0YMffBT+e6HtjiQxz575VTIB9v8S3uI9h2FCbLm94mNAkB3+OUF4Bps+DnhpFfVxbF6oc1c7qrcxrGsNj6xGo79ycRK+D/UK4NZIC2HtOG2kbSCroCqi6vQM2my8rR6k1ID';

// const pubk =
//     'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDpV9hYXG3y9VloekH/P93Wd7tnW6PSA8rwNBGuikY1urxXmA/h/M+kMhrni6iMcf7r1nCrvcYG1j/9LTwpKlO6543bMMWltk4MfOrxFJ9RSSTcJVmEyw3vq6xfCZWWLPZPO2oTA2AVUF438TWChGczcv60XGa7PCwFCjoh/KapcwIDAQAB';

// // const em = encryptMessage(pubk, 'Last Chance');
// // console.log(em);
// const cip =
//     'IhNmOalhdsR8WnLbX/I2J1giaI6Lv8xSihpLe+ALrlFmBQT9fKJrrT8uiL24D/aLffbiagQgjpDX2C/MmcbNKTz5cfdBhEhPF2UnnuCeKLn//S2+AbwhjlSNJsrOTS4tjzC22aiUOjQSuq2mwPQbjZ05haI+H6UXi3MvW+Bbgqo=';

// const dm = decryptMessage(pk, cip);
// console.log(dm);

export { encryptMessage, decryptMessage, decryptChat };
