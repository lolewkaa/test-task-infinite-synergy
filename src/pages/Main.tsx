import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.css";
import { RootState } from "../slices";
import { setUserRepo } from "../slices/usersSlice";
import { RepoItem } from "../types/types";
import { fetchUserRepos } from "../utils/fetchUserRepos";
import Preloader from "../ui/Preloader/Preloader";
import User from "../components/User/User";
import UserCard from "../components/UserCard/UserCard";

const Main: React.FC = () => {
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [selectedUser, setIsSelectedUser] = useState({
    id: "",
    name: "",
    department: "",
    company: "",
    jobTitle: "",
  });
  const [isAtBottom, setIsAtBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();
  const useAppSelector = useSelector.withTypes<RootState>();
  const users = useAppSelector((state) => state.users.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUserRepos();
        dispatch(setUserRepo(users));
        setIsSelectedUser(users[0]);
      } catch {
        console.log("Ошибка");
      }
    };
    fetchData();
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollHeight - scrollTop <= clientHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      setIsPreloaderActive(true);

      const timer = setTimeout(async () => {
        const fetchData = async () => {
          try {
            const users = await fetchUserRepos();
            dispatch(setUserRepo(users));
          } catch {
            console.log("Ошибка");
          } finally {
            setIsPreloaderActive(false);
          }
        };
        fetchData();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAtBottom]);
  return (
    <section className={styles.main}>
      <div className={styles.main__user_container} ref={containerRef}>
        {users.length > 0 &&
          users.map((el: RepoItem, index: number) => (
            <User setIsSelectedUser={setIsSelectedUser} key={index} user={el} />
          ))}
        {isPreloaderActive && <Preloader />}
      </div>
      <div className={styles.main__userCard_box}>
        <UserCard user={selectedUser} />
      </div>
    </section>
  );
};
export default Main;
