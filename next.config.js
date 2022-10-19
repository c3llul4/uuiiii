module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/frases",
        permanent: true,
      },
    ];
  },
};
