import { createContext, ReactNode, useContext, useState } from "react";
import { CardItemProps } from "../components/CardItem";

interface CartProviderProps {
  children: ReactNode;
}

interface SavedItemProps {
  id: number;
  amount: number;
  apiCartItem: CardItemProps;
}

interface CartContextData {
  items: SavedItemProps[];
  totalAmount: number;
  removeItemFromCart: (itemToRemoveId: number) => void;
  deleteItemFromCart: (itemToRemoveId: number) => void;
  addNewItemToCart: (itemToAddId: number, cardItem: CardItemProps) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [savedCart, setSavedCart] = useState<SavedItemProps[]>([]);
  const [savedItems, setSavedItems] = useState<number[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function addNewItemToCart(itemToAddId: number, cardItem: CardItemProps) {
    if (savedItems.indexOf(itemToAddId) == -1) {
      setSavedItems([...savedItems, itemToAddId]);
      setSavedCart([
        ...savedCart,
        { id: itemToAddId, amount: 1, apiCartItem: cardItem },
      ]);
      setTotalAmount(totalAmount + 1);
      return;
    }

    const newCart = savedCart.map((cartItem) => {
      if (cartItem.id == itemToAddId) {
        cartItem.amount++;
        setTotalAmount(totalAmount + 1);
      }
      setTotalAmount(totalAmount + 1);
      return cartItem;
    });

    setSavedCart(newCart);
    setTotalAmount(totalAmount + 1);
    return;
  }

  function removeItemFromCart(itemToRemoveId: number) {
    const newSavedItems: number[] = [];

    const newCart = savedCart.filter((item) => {
      if (item.amount == 1) {
        return;
      } else {
        newSavedItems.push(item.id);
        if (item.id == itemToRemoveId) {
          item.amount--;
          setTotalAmount(totalAmount - 1);
          return item;
        } else {
          return item;
        }
      }
    });
    setSavedItems(newSavedItems);
    setSavedCart(newCart);
  }
  function deleteItemFromCart(itemToRemoveId: number) {
    const selectedItem = savedCart.find((item) => item.id == itemToRemoveId);

    if (selectedItem) {
      const newCart = savedCart.filter((item) => item.id != itemToRemoveId);
      const newItems = savedItems.filter((item) => item != itemToRemoveId);
      setSavedCart(newCart);
      setSavedItems(newItems);
      setTotalAmount(totalAmount - selectedItem.amount);
    }
  }

  return (
    <CartContext.Provider
      value={{
        items: savedCart,
        addNewItemToCart: addNewItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
