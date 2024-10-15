import 'dotenv/config';

export const getSecretKey = () => {
  return process.env.SECRET_KEY || '';
};

(async () => {
  const secretKey = getSecretKey();
  console.log(`Secret key: ${secretKey}`);
})();
