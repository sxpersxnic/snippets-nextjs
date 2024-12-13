type Profile = {
  id: string;
  user_id: string;
  username: string;
  description?: string;
  photo: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default Profile;