import { decode_key } from '../key';
import { encodeTx, signTx } from './lib/tx';
import axios from 'axios';
import vstruct from 'varstruct';
import base32 from 'base32.js';

export const makePaymentTx = async (sequence, message, address, amount, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = (message === '' ? Buffer.alloc(0) : Buffer.from(message, 'utf8'));
    tx.operation = 'payment';

    tx.params = {};
    tx.params.address = address;
    tx.params.amount = amount;

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let hexData = encodeTx(tx).toString('hex');
    let result = await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + hexData);

    return result.data;
}

export const makeCreateAccTx = async (sequence, address, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = Buffer.alloc(0);
    tx.operation = 'create_account';

    tx.params = {};
    tx.params.address = address;

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let hexData = encodeTx(tx).toString('hex');
    let result = await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + hexData);

    return result.data;
}

export const makePostTx = async (sequence, content, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = Buffer.alloc(0);
    tx.operation = 'post';

    const PlainTextContent = vstruct([
        { name: 'type', type: vstruct.UInt8 },
        { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
    ]);

    tx.params = {};

    let bufContent = PlainTextContent.encode({
        type: 1,
        text: content
    });

    tx.params.keys = [];
    tx.params.content = bufContent;

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let hexData = encodeTx(tx).toString('hex');
    let result = await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + hexData);

    return result.data;
}

export const makeUpdateNameTx = async (sequence, name, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = Buffer.alloc(0);
    tx.operation = 'update_account';

    tx.params = {};

    tx.params.key = 'name';
    tx.params.value = Buffer.from(name);

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let hexData = encodeTx(tx).toString('hex');
    let result = await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + hexData);

    return result.data;
}

export const makeUpdatePictureTx = async (sequence, picture_base64, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = Buffer.alloc(0);
    tx.operation = 'update_account';

    tx.params = {};

    tx.params.key = 'picture';
    tx.params.value = Buffer.from(picture_base64, 'base64');

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let dataEncoded = encodeTx(tx).toString('base64');

    let result = await axios.post('https://komodo.forest.network/', {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "broadcast_tx_commit",
        "params": [dataEncoded]
    });

    return result.data;
}

export const makeUpdateFollowTx = async (sequence, arr, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = Buffer.alloc(0);
    tx.operation = 'update_account';

    tx.params = {};

    tx.params.key = 'followings';

    const Followings = vstruct([
        { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
    ]);

    let tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        tempArr.push(Buffer.from(base32.decode(arr[i])));
    }

    tx.params.value = Followings.encode({
        addresses: tempArr
    });

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let dataEncoded = encodeTx(tx).toString('base64');

    let result = await axios.post('https://komodo.forest.network/', {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "broadcast_tx_commit",
        "params": [dataEncoded]
    });

    return result.data;
}