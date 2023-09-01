export interface UserInfoInterface {
  _id: string;
  email: string | null;
  created_at: string;
  updated_at: string;
  username: string;
  fullname: string | null;
  phone: string | null;
  avatar: string | null;
  is_admin: boolean | null;
  token: string;
}
