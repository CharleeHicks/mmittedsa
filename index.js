// 通过以太坊账户签名数据
async function signDataWithAccount(web3, data, address, privateKey) {
  const signature = await web3.eth.accounts.sign(data, privateKey);
  return signature.signature;
}

// 验证以太坊签名数据
async function verifySignature(web3, data, signature, address) {
  return web3.eth.accounts.recover(data, signature) === address;
}