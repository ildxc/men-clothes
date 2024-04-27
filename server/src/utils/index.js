import crypto from 'crypto'

export const hashFunction = (password) => {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}