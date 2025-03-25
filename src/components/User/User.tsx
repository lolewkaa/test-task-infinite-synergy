import React from "react";
import styles from "./User.module.css";
import { RepoItem } from "../../types/types";

type PropsUser = {
  user: RepoItem;
  setIsSelectedUser: (arg: RepoItem) => void;
};

const User: React.FC<PropsUser> = ({ user, setIsSelectedUser }) => (
  <div className={styles.user} onClick={() => setIsSelectedUser(user)}>
    <p className={styles.user__text}>{user.name}</p>
    <p className={styles.user__text}>{user.id}</p>
  </div>
);

export default User;