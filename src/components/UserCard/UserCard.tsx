import React, { useEffect, useState } from "react";
import styles from "./UserCard.module.css";
import { RepoItem } from "../../types/types";
import { useDispatch } from "react-redux";
import { editUser } from "../../slices/usersSlice";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { updateSeminarRepo } from "../../utils/fetchUserRepos";

type PropsUserCard = {
  user: RepoItem;
};

const UserCard: React.FC<PropsUserCard> = ({ user }) => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(user);
  const [error, setError] = useState('')
  
  useEffect(() => {
    setNewUser(user)
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUser.name !== '' && newUser.department !== '' && newUser.company !== '' && newUser.jobTitle !== '' ) {
    dispatch(editUser(newUser));
    updateSeminarRepo(newUser.id, newUser)
    setError('')
    }
    else {
      setError('Пожалуйста, заполните все поля')
    }
    
  };
  return (
    <form onSubmit={handleSubmit} className={styles.userCard}>
      <div className={styles.userCard__container}>
        <Input
          name="name"
          inputStyle={styles.userCard__input}
          value={newUser.name || ''}
          handleChange={handleChange}
          label="Имя"
        />
        <Input
          name="department"
          inputStyle={styles.userCard__input}
          value={newUser.department || ''}
          handleChange={handleChange}
          label="Отдел"
        />
        <Input
          name="company"
          inputStyle={styles.userCard__input}
          value={newUser.company || ''}
          handleChange={handleChange}
          label="Компания"
        />
        <Input
          name="jobTitle"
          inputStyle={styles.userCard__input}
          value={newUser.jobTitle || ''}
          handleChange={handleChange}
          label="Должность"
        />
      </div>
      {error && <p className={styles.userCard__error}>{error}</p>}
      <Button buttonStyle={styles.form__btn} type="submit" text="Отправить" />
    </form>
  );
};

export default UserCard;
