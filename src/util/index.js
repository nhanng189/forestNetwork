import { decode_key } from '../key';
import { encodeTx, decodeTx, verifyTx, signTx, hashTx } from './lib/tx';
import axios from 'axios';

export const makePaymentTx = async (sequence, message, address, amount, privateKey_en) => {
    let tx = {};

    tx.version = 1;
    tx.sequence = sequence;
    tx.memo = (message === '' ? Buffer.alloc(0) : Buffer.from(message, 'base64'));
    tx.operation = 'payment';

    tx.params = {};
    tx.params.address = address;
    tx.params.amount = amount;

    console.log(tx);

    try {
        signTx(tx, decode_key(privateKey_en));
    } catch (err) {
        throw err;
    }

    let jsonRpc = {
        "method": "broadcast_tx_commit",
        "jsonrpc": "2.0",
        "params": [`${encodeTx(tx).toString('base64')}`],
        "id": ""
    }

    console.log(jsonRpc);
}