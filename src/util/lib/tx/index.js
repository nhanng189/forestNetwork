import vstruct from 'varstruct';
import crypto from 'crypto';
import { Keypair } from 'stellar-base';
import { encode, decode } from './v1';

const Transaction = vstruct([
  { name: 'version', type: vstruct.UInt8 },
]);

export function encodeTx(tx) {
  switch (tx.version) {
    case 1:
      return encode(tx);

    default:
      throw Error('Unsupport version');
  };
}

export function decodeTx(data) {
  const versionTx = Transaction.decode(data);
  switch (versionTx.version) {
    case 1:
      return decode(data);
    
    default:
      throw Error('Unsupport version');
  }
}

function getUnsignedHash(tx) {
  return crypto
    .createHash('sha256')
    .update(encode({
      ...tx,
      signature: Buffer.alloc(64, 0),
    }))
    .digest();
}

export function signTx(tx, secret) {
  const key = Keypair.fromSecret(secret);
  tx.account = key.publicKey();
  tx.signature = key.sign(getUnsignedHash(tx));
}

export function verifyTx(tx) {
  const key = Keypair.fromPublicKey(tx.account);
  return key.verify(getUnsignedHash(tx), tx.signature);
}

export function hashTx(tx) {
  return tx.hash = crypto.createHash('sha256')
    .update(encode(tx))
    .digest()
    .toString('hex')
    .toUpperCase();
}
