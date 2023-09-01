export interface ProfileInterface {
  _id: string;
  username: string;
  bio: string | null;
  avatar: string | null;
  following: boolean | null;
}
