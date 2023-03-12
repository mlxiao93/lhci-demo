module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
    },
    upload: {
      target: 'lhci',
      serverBase: 'http://localhost:9001',
      token: 'ddf6f610-6014-405b-a184-f0852767c606',
    },
  },
};