import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  removeItemFromCart: (itemToRemoveId: number) => void;
  deleteItemFromCart: (itemToRemoveId: number) => void;
  addNewItemToCart: (itemToAddId: number, cardItem: CardItemProps) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [savedCart, setSavedCart] = useState<SavedItemProps[]>([]);
  const [savedItems, setSavedItems] = useState<number[]>([]);

  function addNewItemToCart(itemToAddId: number, cardItem: CardItemProps) {
    if (savedItems.indexOf(itemToAddId) == -1) {
      setSavedItems([...savedItems, itemToAddId]);
      setSavedCart([
        ...savedCart,
        { id: itemToAddId, amount: 1, apiCartItem: cardItem },
      ]);
      return;
    }

    const newCart = savedCart.map((cartItem) => {
      if (cartItem.id == itemToAddId) {
        cartItem.amount++;
      }
      return cartItem;
    });

    setSavedCart(newCart);
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
    const newCart = savedCart.filter((item) => item.id != itemToRemoveId);
    const newItems = savedItems.filter((item) => item != itemToRemoveId);
    setSavedCart(newCart);
    setSavedItems(newItems);
  }

  return (
    <CartContext.Provider
      value={{
        items: savedCart,
        addNewItemToCart: addNewItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
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
