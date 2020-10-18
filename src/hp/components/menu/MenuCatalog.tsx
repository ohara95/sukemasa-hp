import React, { useEffect } from "react";
import { db } from "../../../config/firebese";

type DbProps = {
  price: number;
  category: string;
  item: string;
};

type Props = {
  menuItem: string;
  state: DbProps[];
  setState: (param: DbProps[]) => void;
  item: string;
};

const MenuCatalog = ({ menuItem, state, setState, item }: Props) => {
  useEffect(() => {
    db.collection("menu")
      .doc("ya3NEbDICuOTwfUWcHQs")
      .collection(item)
      .onSnapshot((snap) => {
        const menu = snap.docs.map((doc) => {
          return doc.data();
        });
        setState(menu as DbProps[]);
      });
  }, []);

  const category = state.filter((el) => el.category === menuItem);
  return category.map((el) => {
    return (
      <option key={el.item}>
        {el.item} ¥{el.price}
      </option>
    );
  });
};

export default MenuCatalog;
