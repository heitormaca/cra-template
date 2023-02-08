export interface AuthRequestParams {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface Token {
  sub: string;
  name: string;
  email: string;
  role: string; // enum
  permissions: string[]; //arr enum
  exp: number;
  iss: string;
  aud: string;
}
