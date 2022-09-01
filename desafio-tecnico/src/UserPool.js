import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = { // Acceso al pool de usuario de aws
  UserPoolId: "us-east-1_9I7c311zU",
  ClientId: "4g7tb7111fu0lqdjbeporprs9k",
};

export default new CognitoUserPool(poolData);
