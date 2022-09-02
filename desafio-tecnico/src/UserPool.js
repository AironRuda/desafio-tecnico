import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = { // Acceso al pool de usuario de aws
  UserPoolId: "us-east-1_EfHNLrC3s",
  ClientId: "49fufos9qfhp4c3nrsi6q267id",
};

export default new CognitoUserPool(poolData);
